
import {
    IonPage,
    IonHeader,
    IonItem,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonSelect,
    IonSelectOption,
    IonCard,
    IonImg,
  } from '@ionic/react';

  import { useState, useEffect } from 'react';
  import Store from '../../store';
  import * as selectors from '../../store/selectors';

  const InputField = ({onInputChange}) => (
      <div className= "inline-block my-0 mx-auto pt-20">
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="pounds"
            id="pounds"
            className="text-5xl font-majorMonoDisplay underline block bg-transparent w-72 rounded-md border-0 py-1.5 pr-20 text-white  placeholder:text-white  "
            placeholder="0.0"
            onChange={onInputChange}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="inputUnit" className="sr-only">
              Units
            </label>
            <h4
              id="inputUnit"
              name="inputUnit"
              className="text-5xl h-full font-manjari rounded-md border-0 bg-transparent py-0  pr-10 mt-12   text-white"
            >
              LBS
            </h4>
          </div>
        </div>
        <label htmlFor="price" className="font-majorMonoDisplay text-center block text-md font-medium leading-6 text-white">
          enter patient weight in LBS
        </label>
      </div>
    );

  const MedicationDropdown = ({selectedMedication, onMedicationChange}) => {
    const handleSelectChange = (e) => {
      onMedicationChange(e.target.value);
    };
    
    return(
    <div className= "inline-block my-0 mx-auto p-3">
        <IonItem className="my-0 mx-0">

          
          <select className="bg-transparent font-manjari border-none"interface="popover" 
          placeholder="Select medication"
          value={selectedMedication}
          onChange={handleSelectChange}
          
          >
            <option value="" disabled selected>Select Medication</option>
            <option value="acetaminophen-adult">Acetaminophen - Adult</option>
            <option value="acetaminophen-pediatric">Acetaminophen - Pediatric</option>
            <option value="albuterol">Albuterol</option>
            <option value="aspirin">Aspirin</option>
            <option value="dipenhydramine">Dipenhydramine</option>
            <option value="epinephrine-adult">Epinephrine 1:1000 - Adult</option>
            <option value="epinephrine-pediatric">Epinephrine 1:1000 - Pediatric</option>
            <option value="glucose-adult">Glucose - Adult</option>
            <option value="glucose-pediatric">Glucose - Pediatric</option>
            <option value="ibuprofen-adult">Ibuprofen - Adult</option>
            <option value="ibuprofen-pediatric">Ibuprofen - Pediatric</option>
            <option value="igel-airway-device">I-gel Airway Device</option>
            <option value="ipratropium-bromide">Ipratropium Bromide</option>
            <option value="kilograms">Kilograms</option>
            <option value="naloxone-adult">Naloxone - Adult</option>
            <option value="naloxone-pediatric">Naloxone - Pediatric Opioid Exposure</option>
          </select>
        </IonItem>
    </div>
    );
    
      
  };

  const WeightCard = () => {
    const [inputValue, setInputValue] = useState(0);
    const [selectedMedication, setSelectedMedication] = useState(null);
    const [calculatedDosage, setCalculatedDosage] = useState(0);
      const [dosageUnit, setDosageUnit] = useState("mL");


    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleMedicationChange = (e) => {
      
        setSelectedMedication(e);
      
    };

    useEffect(() => {
      //console.log("selected is " + selectedMedication);
      // calculate the dosage based on the selected medication and the input value
      let dosage = 0;
      let unit = "mg";
      let kilos = inputValue/2.205;
      if (selectedMedication === "acetaminophen-adult") {
        dosage = 500;
      } else if (selectedMedication === "acetaminophen-pediatric") {
        dosage = 15*kilos;
        if(dosage>=1000){
          dosage = 1000;
        }
      } else if (selectedMedication === "albuterol") {
        dosage = 2.5;
      }else if (selectedMedication === "aspirin") {
        dosage = 324;
      }else if (selectedMedication === "dipenhydramine") {
        dosage = 25;
      }else if (selectedMedication === "epinephrine-adult") {
        dosage = 0.5;
      }else if (selectedMedication === "epinephrine-pediatric") {
        unit = "mL";
        if(kilos > 0 && kilos <5){
          dosage = null;
          unit = "Do Not Administer";
        }else if(kilos >= 5 && kilos < 10){
          dosage = 0.05;
          unit = "-0.1 mL";
        }else if(kilos >= 10 && kilos < 15){
          dosage = 0.1;
        }else if(kilos >= 15 && kilos < 20){
          dosage = 0.15;
        }else if(kilos >= 20 && kilos < 25){
          dosage = 0.2;
        }else if(kilos >= 25 && kilos < 30){
          dosage = 0.25;
        }else if(kilos >= 30){
          dosage = 0.3;
        }
      }else if (selectedMedication === "glucose-adult") {
        dosage = 15;
        unit = "g";
      }else if (selectedMedication === "glucose-pediatric") {
        unit = "mL";
        if(kilos < 10){
          dosage = 5;
        }else if(kilos >= 10 && kilos < 13){
          dosage = 7.5;
        }else if(kilos >= 13 && kilos < 18){
          dosage = 0.25;
          unit = "tube";
        }else if(kilos >= 18 && kilos < 22){
          dosage = 0.5;
          unit = "tube";
        }else{
          dosage = 15;
          unit = "g";
        }
      }else if (selectedMedication === "ibuprofen-adult") {
        dosage = 600;
      }else if (selectedMedication === "ibuprofen-pediatric") {
        dosage = 10;
      }else if (selectedMedication === "igel-airway-device") {
        unit = "I-gel";
        if(kilos > 0 && kilos < 25){
          dosage = null;
          unit = "Do Not Use";
        }else if(kilos >=25 && kilos <35){
          dosage = 2.5;
        }else if(kilos >=35 && kilos <60){
          dosage = 3.0;
        }else if(kilos >=60 && kilos <90){
          dosage = 4.0;
        }else{
          dosage = 5.0;
        }
      }else if (selectedMedication === "ipratropium-bromide") {
        dosage = 0.5;
      }else if (selectedMedication === "kilograms") {
        dosage = kilos;
        unit = "kg";
      }else if (selectedMedication === "naloxone-adult") {
        dosage = 1;
      }else if (selectedMedication === "naloxone-pediatric") {
        dosage = 0.1*kilos;
        if(dosage > 0.5){
          dosage = 0.5;
        }
      }
      setCalculatedDosage(dosage);
      setDosageUnit(unit);
      
    }, [inputValue, selectedMedication]);

    return(
    <IonCard className="my-0 mx-0">
     <div className="h-screen w-screen relative bg-yellow-200">
      <div className=" h-1/2 w-screen text-center relative bg-dark-green">
        <InputField onInputChange={handleInputChange}/>
      </div>
      <div className="table h-12 w-screen relative bg-utd-green">
      <h5 className="font-majorMonoDisplay text-center my-3 block text-md font-medium leading-6 text-white">
          convert to
        </h5>
      </div>
      <div className=" h-1/2 w-screen text-center relative bg-dark-orange">
        <MedicationDropdown 
        selectedMedication={selectedMedication}
        onMedicationChange={handleMedicationChange} />
        <h4 className=" align-middle text-5xl font-manjari my-0 mx-0 py-0 text-white dark:text-white text-center "> 
          <em className="font-majorMonoDisplay mr-5 not-italic">{calculatedDosage != null ? calculatedDosage.toFixed(3) : null}</em> 
          {dosageUnit}</h4>
          
      </div>
      </div>
    </IonCard>
    );
  };

  const Converter = () => {
    const converter = Store.useState(selectors.getConverter);
    //const [convertedValue, setConvertedValue] = useState(null);
    
    
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className= "font-majorMonoDisplay">Dosage Converter</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <WeightCard/>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Converter;
  