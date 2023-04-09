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
    const about = Store.useState(selectors.about);
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
    <IonCard>
          <img src="https://raw.githubusercontent.com/acm-projects/Respondent/main/Photo-Drive-21.jpeg" alt="placeholder" />
          <IonCardHeader>
            <IonCardSubtitle>Welcome to Respondent</IonCardSubtitle>
            <IonCardTitle>We are a team of passionate developers aiming to maintain a safe environment at UT Dallas.</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Our mission is to create the best possible user experience for student EMT's to respond to emergencies on campus efficiently.</p>
            <p>With a focus on innovative design and accessibility of care for members at UT Dallas, we strive to improve on the current technology in place and keep our campus safe.</p>
            <p>Thank you for choosing our app!</p>
          </IonCardContent>
        </IonCard>
    </IonContent>
    </IonPage>
    

    );  
};

export default About;