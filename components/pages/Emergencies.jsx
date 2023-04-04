'use client';

import { motion } from 'framer-motion';

import { staggerContainer } from '../../utils/motion';
import "tailwindcss/tailwind.css";

import Card from '../ui/Card';
// import { signIn, signOut, refresh } from '../../store/actions';
import { handleGoogleSignin } from '../../store/actions';
import { DisplayUser } from '../../pages';
import styles from '../../styles/Form.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import { RegisterValidate, LoginValidate } from "../../lib/validate"
import { useRouter } from 'next/router';
import Layout from '../../layout/layout';
import { getCsrfToken } from 'next-auth/react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getSession } from 'next-auth/react'
import { useSession } from "next-auth/react"

//import my page components
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline, cog} from 'ionicons/icons';
import { getEmLogInfo, getHomeItems } from '../../store/selectors';
import Store from '../../store';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
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

// <styles jsx>{`
//   .custom-button {
//     width: 313px;
//     height: 84px;
//     background-color: rgba(39, 88, 68, 0.5);
//     color: #fff;
//     padding: 1rem;
//     border-radius: 10px;
//     transition: background-color 0.3s ease-in-out;
//   }
  
//   .custom-button:hover {
//     background-color: rgba(220, 116, 0, 0.4) !important;
//   }
  
//   .custom-button:hover h2,
//   .custom-button:hover p {
//     color: #fff;
//   }
  
//   .text-left {
//     text-align: left;
//   }
  
//   .text-right {
//     text-align: right;
//   }
// `}</styles>;

const getHoverColor = (color) =>{
  `hover:${color}-500 focus:${color}-700 active:${color}-800`;
}

const EmergencyCard = ({ title, type, text, author, authorAvatar, image }) => (
<Card className="my-4 mx-auto">
<div className="h-32 w-full relative">
  <img className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full" src={image} alt="" />
</div>
<div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
  <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
  <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
  <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{text}</p>
  <div className="flex items-center space-x-4">
    <div className="w-10 h-10 relative">
      <img src={authorAvatar} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
    </div>
    <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
  </div>
</div>
</Card>
); //end of EmergencyCard


const CustomButton = ({ title, time, location }) => {
  return (
    <div className="w-400 mx-30 h-84">
      <motion.button
        whileHover={{ scale: 1.105, backgroundColor: "#DC7400" }}
        whileTap={{ scale: 0.95 }}
        className="w-full h-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
        style={{ backgroundColor: "#275844" }}
      >
        <div className="p-4">
          <div className="flex justify-between">
            <h2 className="text-left text-lg font-bold">{title}</h2>
            <h3 className="text-left text-sm font-light mt-6">{time}</h3>
          </div>
          <div className="flex justify-end mt-6">
            <h3 className="text-right text-sm font-light">{location}</h3>
          </div>
        </div>
      </motion.button>
    </div>
  );
};

// const EmergencyLogCard = ({ color, title, time, location, children }) => (
// <motion.div
//   whileHover={{ scale: 1.1 }}
//   whileTap={{ scale: 0.9 }}
//   className="custom-button"
//   style={{
//     backgroundColor: `rgba(${color}, 0.5)`,
//   }}
// >
//   <div className="flex justify-between">
//     <div className="text-left">
//       <h2 className="text-lg font-bold">{title}</h2>
//       <p className="text-sm">{time}</p>
//     </div>
//     <div className="text-right">
//       <p className="text-sm">{location}</p>
//     </div>
//   </div>
//   {children}
// </motion.div>
// ); //end of EmergencyLogCard

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
  const homeItems = Store.useState(getEmLogInfo);
  const [showNotifications, setShowNotifications] = useState(false);

  const emLogInfo = Store.useState(getEmLogInfo);
  
  return (
    <IonPage>

      <IonHeader>
        <IonRouterOutlet>
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        </IonRouterOutlet>
        <IonToolbar>
          <IonTitle>Emergency Logs</IonTitle>
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
        <IonTitle className="custom-title"> EMERGENCY LOGS </IonTitle>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />

        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="show"
           viewport={{ once: 'false' , amount: 0.25}}
        >
          <div className='grid grid-cols-1 gap-6'>
            {emLogInfo.map((log, index) => (
              <CustomButton
              key={index}
              title={log.title}
              time={log.time}
              location={log.location}
            />
            ))}
          </div>  
        </motion.div>

      </IonContent>

    </IonPage>
  );
};

export default Emergencies;
