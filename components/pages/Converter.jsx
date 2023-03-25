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


  import Store from '../../store';
  import * as selectors from '../../store/selectors';

  const InputField = () => (
      <div className= "inline-block my-0 mx-auto pt-20">
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="pounds"
            id="pounds"
            className="text-5xl font-majorMonoDisplay underline block bg-transparent w-72 rounded-md border-0 py-1.5 pr-20 text-white  placeholder:text-white  "
            placeholder="0.0"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="inputUnit" className="sr-only">
              Units
            </label>
            <select
              id="inputUnit"
              name="inputUnit"
              className="text-5xl h-full font-majorMonoDisplay rounded-md border-0 bg-transparent py-0  pr-7 text-white"
            >
              <option>LBS</option>
              <option>KG</option>
            </select>
          </div>
        </div>
        <label htmlFor="price" className="font-majorMonoDisplay text-center block text-md font-medium leading-6 text-white">
          enter quantity in LBS
        </label>
      </div>
    );
  const MedicationDropdown = () => (
    <div className= "inline-block my-0 mx-auto p-3">
        <IonItem className="my-0 mx-0">
          <IonSelect className="bg-transparent font-majorMonoDisplay"interface="popover" placeholder="Select medication">
            <IonSelectOption value="apples">Diazepam</IonSelectOption>
            <IonSelectOption value="oranges">Glucose</IonSelectOption>
            <IonSelectOption value="bananas">Hydrocortisone</IonSelectOption>
          </IonSelect>
        </IonItem>
    </div>
    
      
  );

  const WeightCard = () => (
    <IonCard className="my-0 mx-0">
     <div className="h-screen w-screen relative bg-yellow-200">
      <div className=" h-1/2 w-screen text-center relative bg-dark-green">
        <InputField/>
      </div>
      <div className="table h-12 w-screen relative bg-utd-green">
      <h5 className="font-majorMonoDisplay text-center my-3 block text-md font-medium leading-6 text-white">
          convert to
        </h5>
      </div>
      <div className=" h-1/2 w-screen text-center relative bg-dark-orange">
        <MedicationDropdown/>
        <h4 className=" align-middle text-5xl font-majorMonoDisplay my-0 mx-0 py-0 text-white dark:text-white text-center uppercase"> <em>XXX</em> mL</h4>
      </div>
      </div>
    </IonCard>
  );

  const Converter = () => {
    const converter = Store.useState(selectors.getConverter);
  
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
  