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
import { arrowBack } from 'ionicons/icons';
import Store from '../../store';
import { useState } from 'react';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';


const Account = () => {
    const account = Store.useState(selectors.account);
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
        <IonTitle class = "ion-text-center" size="large">Account</IonTitle>
    </IonToolbar>
        </IonHeader>
    <IonContent fullscreen>

</IonContent>
    </IonPage>

    );  
};

export default Account;