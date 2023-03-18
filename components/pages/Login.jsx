import {
    IonPage,
    IonCheckbox,
    IonHeader,
    IonItem,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonToggle,
    IonLabel,
    IonInput,
    IonSegment,
    IonSegmentButton,
    IonButton,
    IonModal,
    IonButtons,
    IonRouterOutlet,
    
  } from '@ionic/react';
  import { Redirect, Route } from 'react-router-dom';

  import Home from './Emergencies';


  import Store from '../../store';
  import * as selectors from '../../store/selectors';
  
  const Login = () => {
    const login = Store.useState(selectors.getLogin);
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Log In</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
                <IonLabel>Email: </IonLabel>
                <IonInput placeholder="Your Email"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel>Password: </IonLabel>
                <IonInput value="password" type="password" placeholder="Your Password"></IonInput>
            </IonItem>
          </IonList>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Remember Me</IonLabel>
        </IonItem>
        <IonItem>
            <IonLabel id="open-modal">Forgot Password?</IonLabel>
            <IonModal trigger="open-modal">
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonButton>Cancel</IonButton>
                </IonButtons>
                <IonTitle>Welcome</IonTitle>
                <IonButtons slot="end">
                    <IonButton>Confirm</IonButton>
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                <IonLabel position="stacked">New password</IonLabel>
                <IonInput type="password" value="password" placeholder="Your new password" />
                </IonItem>
            </IonContent>
        </IonModal>
        </IonItem>
        <IonItem >
            <IonButton routerLink= "/tabs">Sign In</IonButton>
        </IonItem>
        <IonItem>
            <IonLabel>or</IonLabel>
        </IonItem>
        <IonItem>
            <IonButton>G</IonButton>
        </IonItem>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
  