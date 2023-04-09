'use client';
//insert other imports here 
import React from 'react';
import { useLocation } from 'react-router-dom';

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
} from '@ionic/react';


const ActiveEmCard = ({ title, date, location, logId }) => {
   // const emergency = { title, timeStart, timeEnd, location, date, logId };
    return (
      <div className="absolute inset-2 bg-pink-600 rounded-lg blur opacity-5">
      //"w-400 mx-30 h-84"
          <motion.button
            // whileHover={{ scale: 1.105, backgroundColor: "rgba(220, 116, 0, 0.8)" }}
            // whileTap={{ scale: 0.95 }}
            className="w-full h-full bg-green-500 bg-opacity-49 border border-green-500 text-white font-bold py-2 px-4 rounded-lg"
            style={{ backgroundColor: "rgba(39, 88, 68, 0.49)" }}
          >
  
            <div className="p-2 flex justify-between">
              <div>
                <h2 className="text-left text-5xl font-majari leading-8 pb-0">{title}</h2>
                <h3 className="text-left text-2xl font-manjari leading-5 mt-2 opacity-40">{date}</h3>
              </div>
  
              <div className="text-right">
                <h3 className="text-right text-2xl font-manjari">{location}</h3>
              </div>
            </div>
          </motion.button>
      </div>
    );
  };


const ActiveEmergency = ({ }) => {

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <IonTitle className="font-majorMonoDisplay text-7xl leading-none pb-8">
         Testing
         <ActiveEmCard
            title={"Testing"}
            date={"date testing"}
            location={"location testing"}
            logId={1}
            >

            </ActiveEmCard>
        </IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default IndividualLog;
