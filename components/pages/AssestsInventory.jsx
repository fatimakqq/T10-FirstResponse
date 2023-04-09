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
  } from '@ionic/react';

//import my page components 
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';


const AssestsInventory = () => {
    const homeItems = Store.useState(getHomeItems);
    
    return(
        <IonPage>
            <IonHeader>
                Emergency Logs coming soon.
            </IonHeader>
        </IonPage>
    );
}

export default EmergencyLogs;