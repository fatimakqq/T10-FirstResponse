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
      { id: 1, name: 'AUTO BLOOD PRESSURE (1)', checked: false, building: 'Building A',},
      { id: 2, name: '4-LEAD (1)', checked: false, building: 'Building A' },
      { id: 3, name: 'PULSE OX (1)', checked: false, building: 'Building A' },
      { id: 4, name: 'AED PADS (1 adult, 1 pediatric)', checked: false, building: 'Building A' },
      { id: 5, name: 'AED CORD (1) ', checked: false, building: 'Building A' },
      { id: 6, name: '12-LEAD (1)', checked: false, building: 'Building A' },
      { id: 7, name: 'ORAL THERMOMETER (1)', checked: false, building: 'Building A' },
      { id: 8, name: 'THERMOMETER PROBE SLEEVE (5)', checked: false, building: 'Building A' },
      { id: 9, name: 'TEST LOAD (1)', checked: false, building: 'Building A' },
      { id: 10, name: 'ETCO2 NC (1)', checked: false, building: 'Building A' },
      { id: 11, name: 'ETCO2 AIRWAY ADAPTER (1)', checked: false, building: 'Building A' },
      { id: 12, name: 'PRINTER PAPER (1)', checked: false, building: 'Building A' },
      { id: 13, name: 'DISPOSABLE RAZORS (2)', checked: false, building: 'Building A' },
      { id: 14, name: 'LANCET (5)', checked: false, building: 'Building A' },
      { id: 2, name: 'GLUCOMETER (1)', checked: false, building: 'Building A' },
      { id: 2, name: 'BGL TEST STRIPS (10)', checked: false, building: 'Building A' },
      { id: 2, name: 'ALCOHOL PREP PRADS', checked: false, building: 'Building A' },
      { id: 2, name: 'ECG ELECTRODES (4)', checked: false, building: 'Building A' },
      { id: 2, name: 'LARGE BP CUFF (1)', checked: false, building: 'Building A' },
      { id: 2, name: 'SMALL BP CUFF (1)', checked: false, building: 'Building A' },
      { id: 2, name: 'PED BP CUFF (1)', checked: false, building: 'Building A' },
      { id: 1, name: 'Stethoscopes', checked: false, building: 'Building B'},
      { id: 2, name: 'Thermometers', checked: false, building: 'Building B' },
      { id: 3, name: 'Sphygmomanometers', checked: false, building: 'Building B' },
      { id: 1, name: 'Stethoscopes', checked: false, building: 'Building C'},
      { id: 2, name: 'Thermometers', checked: false, building: 'Building C' },
      { id: 3, name: 'Sphygmomanometers', checked: false, building: 'Building C' },
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
            <IonTitle className="text-center">Assets</IonTitle>
            <IonSelect slot="start" style={{width: '100px', fontSize: '1em'}} value={selectedBuilding} onIonChange={handleFilterChange}>
              <IonSelectOption value="Building A">LIFEPAK</IonSelectOption>
              <IonSelectOption value="Building B">OUTSIDE COMPARTMENT</IonSelectOption>
              <IonSelectOption value="Building C">MAIN COMPARTMENT</IonSelectOption>
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