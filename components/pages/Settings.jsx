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
} from '@ionic/react';

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
        <IonList>
          <IonItem>
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
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
