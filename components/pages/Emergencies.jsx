import Image from 'next/image';
import Card from '../ui/Card';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
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
import { useState } from 'react';
import { cog } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';

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
);

const Emergencies = () => {
  const homeItems = Store.useState(getHomeItems);

  return (
    <IonPage>
      <IonHeader>
        <IonRouterOutlet>
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        </IonRouterOutlet>
        <IonToolbar>
          <IonTitle>Emergency Log</IonTitle>
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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Emergency Log</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTitle size="large">Test</IonTitle>
        <IonCard color="danger" id="open-modal">
          <IonCardHeader>
            <IonCardTitle>Current Emergency</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Heres a small text description for the current emergency. 
          </IonCardContent>
        </IonCard>

        <IonModal color="danger" trigger="open-modal">
          <IonHeader>
            <IonToolbar></IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel>Active Emergency!!</IonLabel>
            </IonItem>
          </IonContent>
        </IonModal>

        {homeItems.map((i, index) => (
          <EmergencyCard {...i} key={index} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Emergencies;
