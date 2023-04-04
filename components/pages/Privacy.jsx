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
    IonButtons,
    IonIcon,
    IonBackButton,
  } from '@ionic/react';

import { Redirect, Route, Link, useHistory } from 'react-router-dom';
import { arrowBack, notifications, } from 'ionicons/icons';
import Store from '../../store';
import { useState } from 'react';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';


const Privacy = () => {
    const privacy = Store.useState(selectors.privacy);
    const history = useHistory();
    const handleBackClick = () => {
        history.goBack();
    }

return (
    <IonPage>
        <IonHeader>
    <IonToolbar>
        <IonButtons slot="start">
        <IonBackButton defaultHref="/tabs/settings" icon={arrowBack} onClick={handleBackClick} />
        </IonButtons>
        <IonTitle class = "ion-text-center" size="large">Privacy and Security</IonTitle>
    </IonToolbar>
        </IonHeader>
    <IonContent fullscreen>
    <IonItem>
          <IonLabel>Privacy Policy</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Terms of Service</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Two-factor Authentication</IonLabel>
          <IonToggle slot="end"></IonToggle>
        </IonItem>
        <IonItem>
          <IonLabel>Biometric Authentication</IonLabel>
          <IonToggle slot="end"></IonToggle>
        </IonItem>
    </IonContent>
    </IonPage>

    );  
};

export default Privacy;