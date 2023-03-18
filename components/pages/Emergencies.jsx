import Image from 'next/image';
import Card from '../ui/Card';
// import { signIn, signOut, refresh } from '../../store/actions';
import { handleGoogleSignin } from '../../store/actions';
import { DisplayUser } from '../../pages';
import styles from '../../styles/Form.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import { RegisterValidate, LoginValidate } from "../../lib/validate"
import { useRouter } from 'next/router';
import Layout from '../../layout/layout';
import { getCsrfToken } from 'next-auth/react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getSession } from 'next-auth/react'
import { useSession } from "next-auth/react"

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
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonModal,
  IonItem,
} from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';

const EmergencyCard = ({ title, type, text, author, authorAvatar, image }) => (
  <Card className="my-4 mx-auto">
    <div className="h-32 w-full relative">
      <img className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full" src={image} alt="" />
    </div>
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{text}</p>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 relative">
          <img src={authorAvatar} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
        </div>
        <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
      </div>
    </div>
  </Card>
);

export async function getServerSideProps({ req }){
  const session = await getSession({ req })

  if(!session){
    return {
      redirect : {
        destination: '/tabs/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}

const Emergencies = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Emergency Log</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Emergency Log</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTitle size="large">Test</IonTitle>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        <IonCard color="danger" id="open-modal">
          <IonCardHeader>
            <IonCardTitle>Current Emergency</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Heres a small text description for the current emergency. 
          </IonCardContent>
        </IonCard>

        <IonModal color="danger" trigger="open-modal">
          <IonHeader>
            <IonToolbar></IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel>Active Emergency!!</IonLabel>
            </IonItem>
          </IonContent>
        </IonModal>

        {homeItems.map((i, index) => (
          <EmergencyCard {...i} key={index} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Emergencies;
