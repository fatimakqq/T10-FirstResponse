'use client';
//insert other imports here
import React from 'react';
import { useLocation, Route } from 'react-router-dom';

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
const IndividualShift = ({ match }) => {
  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
      
      <IonRouterOutlet>
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        </IonRouterOutlet>
      
      <IonItem className = "mx-none" routerLink={`/tabs/calendar`}>
        <IonTitle>
          Back
        </IonTitle>
      </IonItem>

      <div className='mx-3 pb-4'>
        <h1 className='text-left text-6xl font-manjari leading-8 pb-1'>Shift Details</h1>
        <hr class="h-.01 my-5 bg-white"></hr>
      </div>

        <IonCard className = "pb-5" color="testing">
          <IonCardHeader color="testing2">
            <IonCardTitle className="font-manjari text-2xl leading-none pb-none">Date:</IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent color="testing">
            <IonList>
              <IonItem>
                <IonLabel>5/26/2023</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className = "pb-5" color="testing">
          <IonCardHeader color="testing2">
            <IonCardTitle className="font-manjari text-2xl leading-none pb-none">Time:</IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent color="testing">
            <IonList>
              <IonItem>
                <IonLabel>8AM - 12PM</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>


        <IonCard className = "pb-5" color="testing">
          <IonCardHeader color="testing2">
            <IonCardTitle className="font-manjari text-2xl leading-none pb-none">On Shift:</IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent color="testing">
            <IonList>
              <IonItem>
                <IonLabel>George Contreras</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Shannon Carter</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Bryan Caraman</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Fatima Khalid</IonLabel>
              </IonItem>

            </IonList>
          </IonCardContent>
        </IonCard>

        

        <IonCard className = "pb-5" color="testing">
          <IonCardHeader color="testing2">
            <IonCardTitle className="font-manjari text-2xl leading-none pb-none">Not On Shift:</IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent color="testing">
            <IonList>
            <IonItem>
                <IonLabel>Farhan Jamil</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Reshmi Ranjith</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Kenneth Anttila</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Sanika Kulkarni</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>






      </IonContent>
    </IonPage>
  );
};
export default IndividualShift;
