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
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  } from '@ionic/react';

import { Redirect, Route, Link, useHistory } from 'react-router-dom';
import { arrowBack } from 'ionicons/icons';
import Store from '../../store';
import { useState } from 'react';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';


const About = () => {
    const account = Store.useState(selectors.about);
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
        <IonTitle class = "ion-text-center" size="large">About Us</IonTitle>
    </IonToolbar>
        </IonHeader>
    <IonContent className="ion-padding">
    <IonCard color="warning" className="ion-text-center">
            <IonCardContent>
                <p className="ion-text-center ion-text-large">In life-threatening emergencies, seconds save lives. UEMR shortens response time and improves the accessibility of care for members of the UT Dallas community by having EMT's and resources available and nearby. But some of the tools in use to communicate and track emergencies are outdated and not as useful as they could be. Respondent is a tool that allows Student EMT's on campus to keep track of and respond to emergencies on campus efficiently.</p>
            </IonCardContent>
        </IonCard>
    </IonContent>
    </IonPage>
    

    );  
};

export default About;