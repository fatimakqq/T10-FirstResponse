'use client';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
import "tailwindcss/tailwind.css";
import Card from '../ui/Card';
// import { signIn, signOut, refresh } from '../../store/actions';
import { getSession } from 'next-auth/react'
import { useSession } from "next-auth/react"
import { useNavigate } from "react-router-dom";
//import my page components
import Notifications from './Notifications';
import { useState, useEffect } from 'react';
import { notificationsOutline, cog} from 'ionicons/icons';
import { getEmLogInfo, getHomeItems } from '../../store/selectors';
import Store from '../../store';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';

import IndividualLog from './IndividualLog';
//import my Ionic components
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonModal,
  IonItem,
  IonRouterOutlet,
} from '@ionic/react';
import Settings from './Settings';
import Tabs from './Tabs'

const CustomButton = ({ title, timeStart, timeEnd, location, date, logId, index }) => {
  const emergency = { title, timeStart, timeEnd, location, date, logId, index };
  const history = useHistory();
  const handleClick = () => {
    history.push(`/Emergency/${index}`);
    console.log("ya" + index);
  };
//routerLink={`/Emergency/${logId}`} routerDirection="forward" state={{ title, timeStart, timeEnd, location, date, index }}>
  return (
    <div>
   
    <div className="w-400 mx-30 h-84">
      
      
      <IonItem onClick={handleClick}> 
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "rgba(220, 116, 0, 0.8)", borderRadius: "30px"}}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full bg-green-500 bg-opacity-49 border border-green-500 text-white font-bold py-2 px-4 rounded-lg"
          style={{ backgroundColor: "rgba(39, 88, 68, 0.49)", }}
        >
          
          <div className="p-1 flex justify-between ">
            <div>
              <h2 className="text-left text-4xl font-manjari leading-8 pb-0">{title}</h2>
              <h3 className="text-left text-2xl font-manjari leading-6 mt-2"> {timeStart} - {timeEnd}</h3> 
              <h3 className="text-left text-2xl font-manjari leading-5 mt-2 opacity-40">{date}</h3>
            </div>
            <div className="text-right">
              <h3 className="text-right text-2xl font-manjari">{location}</h3>
              
              
            </div>
          </div>
          
        </motion.button>
        
      </IonItem>
      
    </div></div>
  );
};
//      <IonItem routerLink={`/Emergency/${logId}`} routerDirection='forward'>
export async function getServerSideProps({ req }){
  const session = await getSession({ req })
  if(!session){
    return {
      redirect : {
        destination: '/tabs/login',
        permanent: false
      }
    }
  }
  return {
    props: { session }
  }
}
const Emergencies = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [emergencies, setEmergencies ] = useState([]);
  const emLogInfo = Store.useState(getEmLogInfo);
  useEffect(() => {
    const fetchEmergencies = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/emergency"); ///////////SHANNON HERE!!!!!
        const data = await response.json();
        setEmergencies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmergencies();
  }, []);
  return (
    <IonPage>
      
      <IonHeader>
        <IonRouterOutlet>
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        </IonRouterOutlet>

        <IonToolbar>
          <IonTitle className= "font-majorMonoDisplay">Emergency Logs</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton routerLink="/tabs/settings">
              <IonIcon icon={cog} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding" fullscreen>
      

       <IonTitle className="font-majorMonoDisplay text-5xl leading-none pb-3">
           <div>EMERGENCY</div>
           <div>LOGS</div>
       </IonTitle>
       
       <IonTitle className='font-manjari text-green-800 text-right text-5xl leading-none pb-5'>
          today
          
        </IonTitle>
        
        
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />

      <div id="animation-circle" class="relative">
        <div class="absolute z-50 right-0 -mt-2  ml-8 w-8 h-8 rounded-full bg-red-700 animate-ping"></div>
        <div class="absolute z-50 right-0  -mt-2 ml-8 w-8 h-8 rounded-full bg-red-700"></div>
      </div>

        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="show"
           viewport={{ once: 'false' , amount: 0.25}}
        >
          <div className='grid grid-cols-1 gap-6'>
            {emLogInfo.map((log, index) => ( //{emergencies.map((log, index) => (     FOR WHEN YOU GET THE API URL
              <CustomButton
              logId={log.logId}
              title={log.title}
              time={log.time}
              location={log.location}
              date = {log.date}
              timeStart={log.timeStart}
              timeEnd={log.timeEnd}
              index = {index}
            />
            ))}
            
            
          </div>
          
          
        </motion.div>
        
      </IonContent>
      
    </IonPage>
  );
};
export default Emergencies;