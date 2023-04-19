'use client';
//insert other imports here
import React from 'react';
import { useLocation, Route } from 'react-router-dom';
//import  il_element1  from '../assets/img/il_element1';
//import { img } from '../assets/img';
import Image from 'next/image'
import Emergencies from './/Emergencies';

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
  IonImg,
  IonCardSubtitle, 
  IonList,
  IonThumbnail,
  IonAvatar,
  IonChip,
  IonBackButton,
  IonNav, 
  IonRouterOutlet
} from '@ionic/react';
import { warning } from 'ionicons/icons';
const IndividualLog = ({ match }) => {
  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
      
      <IonRouterOutlet>
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        </IonRouterOutlet>
      
      <IonItem className = "mx-none" routerLink={`/tabs/emergencies`}>
        <IonTitle>
          Back
        </IonTitle>
      </IonItem>

      <div className='mx-3 pb-4'>
        <h1 className='text-left text-6xl font-manjari leading-8 pb-1'>Head Injury</h1>
        <hr class="h-.01 my-5 bg-white"></hr>
        <h2 className='text-left text-l font-manjari leading-5 pb-0'>1:02 - 1:34PM</h2>
        <h2 className='text-left text-opacity-50 text-l font-manjari leading-1 pb-0'>2/20/23</h2>
      </div>

        <IonCard className = "pb-5" color="testing">
          <IonCardHeader color="testing2">
            <IonCardTitle className="font-manjari text-2xl leading-none pb-none">Description:</IonCardTitle>
          </IonCardHeader>
          <IonCardContent color="testing">
            <IonList>
              <IonItem>
                <IonLabel>Name: John Doe</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Gender: Male </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Age: 20</IonLabel>
              </IonItem>

              <IonItem class="item-text-wrap">
                <IonLabel>Chief Complaint: John busted his head on the concrete. He is not happy. Oops.</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Location/Room Number: A002</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>CAD: 12345</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className= "pb-7" color = "testing">
          <IonCardHeader color="testing2">
            <IonLabel className="font-manjari text-2xl leading-none pb-none">Location:</IonLabel>
          </IonCardHeader>

        </IonCard>


        <IonCard color="testing">
          <IonCardHeader className='text-left' color="testing2">
            <IonCardTitle className='text-s'>Need additional help navigating how to treat this injury?</IonCardTitle>
          </IonCardHeader>

          <IonItem button detail = "true" routerLink={`/tabs/Chat`}>
            <IonLabel>Our Chatbot can help!</IonLabel>
          </IonItem>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default IndividualLog;

