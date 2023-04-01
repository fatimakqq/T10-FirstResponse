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
import { arrowBack, callOutline, mailOutline } from 'ionicons/icons';
import Store from '../../store';
import { useState } from 'react';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';


const Help = () => {
    const help = Store.useState(selectors.help);
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
        <IonTitle class = "ion-text-center" size="large">Help and Support</IonTitle>
    </IonToolbar>
        </IonHeader>
    <IonContent fullscreen>
    <IonList>
          <IonItem button href="tel:+18001234567">
            <IonIcon icon={callOutline} slot="start" />
            <IonLabel>Call Us</IonLabel>
          </IonItem>
          <IonItem button href="mailto:support@example.com">
            <IonIcon icon={mailOutline} slot="start" />
            <IonLabel>Email Us</IonLabel>
          </IonItem>
        </IonList>
        <p style={{ marginTop: '20px' }}>Our customer support team is available Monday-Friday, 9am-5pm EST.</p>
        <IonButton expand="block" style={{ marginTop: '20px' }}>Chat with us</IonButton>
    </IonContent>
    </IonPage>

    );  
};

export default Help;