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

import { Redirect, Route, Link, } from 'react-router-dom';
import { arrowBack } from 'ionicons/icons';
import Store from '../../store';
import Settings from './Settings'
import { useState } from 'react';
import * as selectors from '../../store/selectors';


const Account = () => {
    const account = Store.useState(about.account);


return (
    <IonPage>
        <IonHeader>
    <IonToolbar>
        <IonButtons slot="start">
        <IonBackButton defaultHref="/tabs/settings" icon={arrowBack} onClick={handleBackClick} />
        </IonButtons>
        <IonTitle class = "ion-text-center" size="large">Privacy</IonTitle>
    </IonToolbar>
        </IonHeader>
    <IonContent>

</IonContent>
    </IonPage>

    );  
};

export default Privacy;