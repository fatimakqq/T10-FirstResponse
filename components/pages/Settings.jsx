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

import { notifications, chatbox } from 'ionicons/icons';

import Store from '../../store';
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
          <IonItem>
            <IonLabel>Auto Connect when app starts</IonLabel>
            <IonToggle
              checked={settings.enableAutoConnect}
              onIonChange={e => {
                setSettings({
                  ...settings,
                  enableAutoConnect: e.target.checked,
                });
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Setting 3</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Setting 4</IonLabel>
          </IonItem>
          <IonItem>
            <IonButton class="ion-text-center" size="large" shape="round">Logout</IonButton>
          </IonItem>
          <IonItem>
            <IonIcon icon={chatbox}></IonIcon>
            &nbsp;
            <IonLabel color="blue">Help and Support</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
