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
    IonCheckbox,
    handleFilterClick,
    IonSelect,
    IonSelectOption,
  } from '@ionic/react';

import { Redirect, Route, Link, } from 'react-router-dom';
import { filter } from 'ionicons/icons';
import Store from '../../store';
import { useState } from 'react';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';

//<IonSelectOption value="">All Buildings</IonSelectOption> - ADD TO lINE 61 IF YOU WANT ALL BUILDINGS FILTER
//const [selectedBuilding, setSelectedBuilding] = useState(''); - CHANGE LINE 44 TO DISPLAY ALL BUILDINGS IF NO FILTER SELECTED

function Assets() {
    const [items, setItems] = useState([
      { id: 1, name: 'Stethoscopes', quantity: 15, checked: false, building: 'Building A'},
      { id: 2, name: 'Thermometers', quantity: 15, checked: false, building: 'Building A' },
      { id: 3, name: 'Sphygmomanometers', quantity: 10, checked: false, building: 'Building A' },
      { id: 1, name: 'Stethoscopes', quantity: 15, checked: false, building: 'Building B'},
      { id: 2, name: 'Thermometers', quantity: 15, checked: false, building: 'Building B' },
      { id: 3, name: 'Sphygmomanometers', quantity: 10, checked: false, building: 'Building B' },
      { id: 1, name: 'Stethoscopes', quantity: 15, checked: false, building: 'Building C'},
      { id: 2, name: 'Thermometers', quantity: 15, checked: false, building: 'Building C' },
      { id: 3, name: 'Sphygmomanometers', quantity: 10, checked: false, building: 'Building C' },
    ]);
    const [selectedBuilding, setSelectedBuilding] = useState('Building A');
  
    const handleItemCheck = (id) => {
      setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
    };
  
    const handleFilterChange = (event) => {
      setSelectedBuilding(event.target.value);
    };
  
    const filteredItems = selectedBuilding ? items.filter(item => item.building === selectedBuilding) : items;
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle class="ion-text-right">Assets</IonTitle>
            <IonSelect slot="start" value={selectedBuilding} onIonChange={handleFilterChange}>
              <IonSelectOption value="Building A">Building A</IonSelectOption>
              <IonSelectOption value="Building B">Building B</IonSelectOption>
              <IonSelectOption value="Building B">Building C</IonSelectOption>
            </IonSelect>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonList lines="none">
            {filteredItems.map(item => (
              <IonItem key={item.id}>
                <IonCheckbox checked={item.checked} onIonChange={() => handleItemCheck(item.id)} />
                <IonLabel style={{ marginLeft: '20px', display: 'inline-block', width: 'calc(100% - 70px)' }}>
                <div style={{ float: 'right' }}>{item.quantity}</div>
                <div style={{ marginLeft: '10px' }}>{item.name}</div>
              </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPage>
    );
  }

export default Assets;