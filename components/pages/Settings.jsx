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
} from '@ionic/react';

import { notifications, chatbox, helpCircle, lockClosed, person, exit } from 'ionicons/icons';
import Store from '../../store';
import Notifications from './Notifications';
import { useState } from 'react';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';

const Settings = () => {
  const settings = Store.useState(selectors.getSettings);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center" size="large">Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="none">
          <IonItem button detail={true}>
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
