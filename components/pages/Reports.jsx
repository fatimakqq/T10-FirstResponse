import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BarChart from './BarChart';
const Reports = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bar Graph</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <BarChart />
      </IonContent>
    </IonPage>
  );
};

export default Reports;