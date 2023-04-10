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
      { id: 1, name: 'AUTO BLOOD PRESSURE (1)', checked: false, building: 'Building A', compartment: 'LEFT COMPARTMENT'},
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
      { id: 15, name: 'GLUCOMETER (1)', checked: false, building: 'Building A' },
      { id: 16, name: 'BGL TEST STRIPS (10)', checked: false, building: 'Building A' },
      { id: 17, name: 'ALCOHOL PREP PRADS', checked: false, building: 'Building A' },
      { id: 18, name: 'ECG ELECTRODES (4)', checked: false, building: 'Building A' },
      { id: 19, name: 'LARGE BP CUFF (1)', checked: false, building: 'Building A' },
      { id: 20, name: 'SMALL BP CUFF (1)', checked: false, building: 'Building A' },
      { id: 21, name: 'PED BP CUFF (1)', checked: false, building: 'Building A' },
      { id: 22, name: 'TEMPORAL THERMOMETER (1)', checked: false, building: 'Building B'},
      { id: 23, name: 'PULSE OXIMETER (1)', checked: false, building: 'Building B'},
      { id: 24, name: 'PENLIGHT (1)', checked: false, building: 'Building B'},
      { id: 25, name: 'BGL KIT (1)', checked: false, building: 'Building B'},
      { id: 26, name: 'TRAUMA SHEARS (1)', checked: false, building: 'Building B'},
      { id: 27, name: 'STETHOSCOPE', checked: false, building: 'Building B'},
      { id: 28, name: 'BP CUFF (1)', checked: false, building: 'Building B'},
      { id: 29, name: 'GAUZE PAD', checked: false, building: 'Building B'},
      { id: 30, name: 'BANDAGE (5)', checked: false, building: 'Building B'},
      { id: 31, name: 'ALCOHOL PREP PAD (2)', checked: false, building: 'Building B'},
      { id: 32, name: 'TAPE ROLL (1)', checked: false, building: 'Building B'},
      { id: 33, name: 'NON-ADHERENT PAD', checked: false, building: 'Building B'},
      { id: 34, name: 'COVER ROLL (1)', checked: false, building: 'Building B'},
      { id: 35, name: 'MULTI-TRAUMA DRESSING (1)', checked: false, building: 'Building B'},
      { id: 36, name: 'FINGER SPLINT (2)', checked: false, building: 'Building B'},
      { id: 37, name: 'FLUSH (2)', checked: false, building: 'Building B'},
      { id: 38, name: 'EMR GUIDEBOOK (1)', checked: false, building: 'Building B'},
      { id: 39, name: 'EPINEPHRINE', checked: false, building: 'Building C'},
      { id: 40, name: 'ALBUTEROL (2)', checked: false, building: 'Building C' },
      { id: 41, name: 'IPRATROPIUM BROMIDE (2)', checked: false, building: 'Building C' },
      { id: 42, name: 'BENADRYL (5)', checked: false, building: 'Building C' },
      { id: 43, name: 'ASPIRIN (12)', checked: false, building: 'Building C' },
      { id: 44, name: 'ACETAMINOPHEN (10)', checked: false, building: 'Building C' },
      { id: 45, name: 'IBUPROFEN (10)', checked: false, building: 'Building C' },
      { id: 46, name: 'NALOXONE (2)', checked: false, building: 'Building C' },
      { id: 47, name: 'GLUCOSE (2)', checked: false, building: 'Building C' },
      { id: 48, name: 'NEEDLE & SYRINGE (1)', checked: false, building: 'Building C' },
      { id: 49, name: 'MAD ATOMIZER (1)', checked: false, building: 'Building C' },
      { id: 50, name: 'C-COLLAR (1)', checked: false, building: 'Building C' },
      { id: 51, name: 'OXYGEN TANK *MAKE SURE > 700 PSI', checked: false, building: 'Building C' },
      { id: 52, name: 'OXYGEN TANK REGULATOR (1)', checked: false, building: 'Building C' },
      { id: 53, name: 'OPA (1)', checked: false, building: 'Building C' },
      { id: 54, name: 'CRAP (1)', checked: false, building: 'Building C' },
      { id: 55, name: 'NRB MASK (1)', checked: false, building: 'Building C' },
      { id: 56, name: 'NASAL CANNULA (1)', checked: false, building: 'Building C' },
      { id: 57, name: 'NEBULIZER', checked: false, building: 'Building C' },
      { id: 58, name: 'BVM', checked: false, building: 'Building C' },
      { id: 59, name: 'SAM SPLINT (1)', checked: false, building: 'Building C' },
      { id: 60, name: 'STERILE (2)', checked: false, building: 'Building C' },
      { id: 61, name: 'COLD PACK (2)', checked: false, building: 'Building C' },
      { id: 62, name: 'TRIANGULAR BANDAGE (2)', checked: false, building: 'Building C' },
      { id: 63, name: 'KERLIX ROLL (2)', checked: false, building: 'Building C' },
      { id: 64, name: 'CHEST SEAL (2)', checked: false, building: 'Building C' },
      { id: 65, name: 'CAT TOURNIQUET (2)', checked: false, building: 'Building C' },
      { id: 66, name: 'ABD PAD (2)', checked: false, building: 'Building C' },
      { id: 67, name: 'GAUZE PAD (3)', checked: false, building: 'Building C' },
      { id: 68, name: 'STRETCH GAUZE BANDAGE', checked: false, building: 'Building C' },
      { id: 69, name: 'SURVIVAL WRAP (1)', checked: false, building: 'Building C' },
      { id: 70, name: 'N95 (2)', checked: false, building: 'Building C' },
      { id: 71, name: 'GLOVES (1)', checked: false, building: 'Building C' },
      { id: 72, name: 'BIOHAZARD BAG (1)', checked: false, building: 'Building C' },
      { id: 73, name: 'SHARPS CONTAINER (1)', checked: false, building: 'Building C' },
      { id: 74, name: 'EMESIS BAG (1)', checked: false, building: 'Building C' },
      { id: 75, name: 'NPA (2)', checked: false, building: 'Building C' },
      { id: 76, name: 'NPA LUBE (1)', checked: false, building: 'Building C' },
      { id: 77, name: 'I-GEL (2)', checked: false, building: 'Building C' },
      { id: 78, name: 'MAGILL FORCEPS (1)', checked: false, building: 'Building C' },
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