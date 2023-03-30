import {
  IonPage,
  IonHeader,
  IonItem,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonToggle,
  IonLabel,
  IonCardContent,
  IonButton,
  IonIcon,
  IonRouterOutlet,
  IonButtons,
  IonBackButton,
} from '@ionic/react';

import { Redirect, Route, Link, useHistory } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { notifications, chatbox, helpCircle, lockClosed, person, exit, arrowBack } from 'ionicons/icons';
import Store from '../../store';
import Home from './Emergencies'
import Account from './Account'
import { useState } from 'react';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';

const Settings = () => {
  const settings = Store.useState(selectors.getSettings);
  const history = useHistory();
  const handleBackClick = () => {
    history.goBack();
  }

  return (
    <IonPage>
      <IonRouterOutlet>

        </IonRouterOutlet>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs" icon={arrowBack} onClick={handleBackClick} />
          </IonButtons>
          <IonTitle class="ion-text-center" size="large">Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="none">
          <IonItem button detail={true} routerLink="/account">
          <IonIcon icon={person}></IonIcon>
            &nbsp;
          <IonLabel>Account</IonLabel>
          </IonItem>
          <IonItem>
          <IonIcon icon={notifications}></IonIcon>
            &nbsp;
            <IonLabel>Push Notifications</IonLabel>
            <IonToggle
              checked={settings.enableNotifications}
              onIonChange={e => {
                setSettings({
                  ...settings,
                  enableNotifications: e.target.checked,
                });
              }}
            />
          </IonItem>
          <IonItem button detail={true}>
          <IonIcon icon={lockClosed}></IonIcon>
            &nbsp;
            <IonLabel>Privacy and Security</IonLabel>
          </IonItem>
          <IonItem button detail={true}>
            <IonIcon icon={chatbox}></IonIcon>
            &nbsp;
            <IonLabel color="blue">Help and Support</IonLabel>
          </IonItem>
          <IonItem button detail={true}>
          <IonIcon icon={helpCircle}></IonIcon>
            &nbsp;
            <IonLabel>About</IonLabel>
          </IonItem>
          <IonItem button>
          <IonIcon icon={exit}></IonIcon>
            &nbsp;
            <ionLabel color="red">Logout</ionLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
