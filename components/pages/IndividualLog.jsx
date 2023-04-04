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


const IndividualLog = ({ match }) => {
  //const (s) go here
  
  // return (
  //   <IonPage>
  //     <IonContent className="ion-padding" fullscreen>

  //      <IonTitle className="font-majorMonoDisplay text-7xl leading-none pb-8">
  //          <div>User {match.params.id}</div>
  //          <div>Time: {match.params}</div>
  //      </IonTitle>

  //     </IonContent>
  //   </IonPage>

  const location = useLocation();
  //const { title, timeStart, timeEnd, location : emLocation, date } = location.state;

  console.log(location);
  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <IonTitle className="font-majorMonoDisplay text-7xl leading-none pb-8">
          <div>Title: </div>
          <div>Time: </div>
          <div>Location: </div>
          <div>Date: </div>
          <div>Log ID: </div>
        </IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default IndividualLog;
