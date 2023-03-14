import {
    IonPage,
    IonButton,
    IonDatetime,
    IonHeader,
    IonItem,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonLabel,
  } from '@ionic/react';
  
  import Store from '../../store';
  import * as selectors from '../../store/selectors';
  
  const Calendar = () => {
    const calendar = Store.useState(selectors.getCalendar);
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Calendar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel>Schedule</IonLabel>
            </IonItem>
          </IonList>
          <IonDatetime></IonDatetime>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Calendar;
  