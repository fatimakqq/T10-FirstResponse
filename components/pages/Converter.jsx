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
    IonInput,
    IonSegment,
    IonSegmentButton
  } from '@ionic/react';
  
  import Store from '../../store';
  import * as selectors from '../../store/selectors';
  
  const Converter = () => {
    const converter = Store.useState(selectors.getConverter);
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Dosage Converter</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonSegment value="default">
                <IonSegmentButton value="to-kilograms">
                    <IonLabel>to Kilograms</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="to-milliliters">
                    <IonLabel>to Milliliters</IonLabel>
                </IonSegmentButton>
            </IonSegment>
          <IonList>
            <IonItem>
                <IonLabel>Enter weight in lbs: </IonLabel>
                <IonInput placeholder="0.00 pounds"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel>Milliliters: </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Converter;
  