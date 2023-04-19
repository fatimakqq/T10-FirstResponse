'use client';
//insert other imports here 
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getEmLogInfo, getHomeItems } from '../../store/selectors';
import CustomButton from './Emergencies.jsx'
import Store from '../../store';



//import my Ionic components
import {
  IonPage,
  IonAccordion,
  IonAccordionGroup,
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


const MapCard = ({index}) => {
  
  //const homeItems = Store.useState(getEmLogInfo);
  const [map, setMap] = useState(null);
  const [steps, setSteps] = useState([]);
  const [eta, setEta] = useState(null);
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const emLogInfo = Store.useState(getEmLogInfo);
  //const location = useLocation();
  //const { state } = location;
  //const index = state.index;
  //const { title, timeStart, timeEnd, location, date, index } = history.location.state;
  console.log("we in map and the index is " + index);



  useEffect(() => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDWhhJfm9B9r5evrHoSDWRUQX3gr6ac2W4`;
      script.onload = () => {
          const newMap = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 0, lng: 0 },
            styles: [
              { elementType: "geometry", stylers: [{ color: "#1e233b" }] },
              { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d17d3b" }],
              },
              {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d17d3b" }],
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
              },
              {
                featureType: "landscape.man_made",
                elementType: "geometry.stroke",
                stylers: [
                  {
                    "color": "#d85f0e"
                  },
                  {
                    "weight": 6
                  }
                ]
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
              },
              {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
              },
            ],
            
            zoom: 17,
          });
          setMap(newMap);
          

          const directionsService = new window.google.maps.DirectionsService();
          const directionsRenderer = new window.google.maps.DirectionsRenderer();
          directionsRenderer.setMap(newMap);
          navigator.geolocation.getCurrentPosition(position => {
              const { latitude, longitude } = position.coords;
              const origin = new window.google.maps.LatLng(latitude, longitude);
              //console.log(emLogInfo.)
              //const destination = new window.google.maps.LatLng(emLogInfo.lat, emLogInfo.lng);
              const destination = emLogInfo[index].mapLocation;
              //console.log("test: " + emLogInfo.latitude);
              const request = {
                origin,
                destination,
                travelMode: 'DRIVING',
              };
              directionsService.route(request, (result, status) => {
                if (status === 'OK') {
                  //console.log("slay");
                  directionsRenderer.setDirections(result);
                  const steps = result.routes[0].legs[0].steps;
                  setSteps(steps);
                  const eta = result.routes[0].legs[0].duration.text;
                  setEta(eta);
                }
                
              });
              newMap.setCenter(origin);
              
            });
  };
  document.head.appendChild(script);
  }, []);

  const handleAccordionChange = (event) => {
    setAccordionExpanded(event.detail?.open);
  };
  
  return(
    <div>
    <div id="map" style={{ height: '30vh', width: '100%' }} />
    <div style={{ backgroundColor: '#275844' }}>   
     {eta && <p className="font-majorMonoDisplay font-thin">eta:  <b>{eta}</b> </p>}
    </div>
    <div className='grid grid-cols-1 gap-6'>

          </div>

<IonAccordionGroup>
  <IonAccordion value="first">
    <IonItem slot="header" color="light">
      <IonLabel style={{ fontFamily: 'MAJORMONO' }}>Directions</IonLabel>
    </IonItem>
    <div slot="content" style={{ maxHeight: '28vh', overflow: 'auto' }}>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>
            <div style={{ fontFamily: 'sans-serif', fontWeight: '100' }} dangerouslySetInnerHTML={{ __html: step.instructions }}></div>
          </li>
        ))}
      </ol>
    </div>
  </IonAccordion>
</IonAccordionGroup>
    
    
    
  </div>
      
  );
}


const IndividualLog = (props) => {
  //const [destination, setDestination] = useState('');
  //const (s) go here
  //const index = props.location.state.index;
  const emLogInfo = Store.useState(getEmLogInfo);
  const index = props.location.pathname.split("/").pop();
  console.log("iiii" + index);



  return (
    <IonPage>
      
      
      <div id="info">
        <IonTitle className="pt-8 font-majorMonoDisplay text-xl leading-none pb-8">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px" }}>Title:</span>
            {emLogInfo[index] && <div className="font-manjari font-light mt-2">{emLogInfo[index].title} </div>}
          </div>   

          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px" }}>Time:</span>
            {emLogInfo[index] && <div className="font-manjari mt-2 font-light">{emLogInfo[index].timeStart} - {emLogInfo[index].timeEnd} </div>}
          </div>  

          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px" }}>Location:</span>
            {emLogInfo[index] && <div className="font-manjari  mt-2 font-light">{emLogInfo[index].location} </div>}
          </div> 

          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px" }}>Date:</span>
            {emLogInfo[index] &&  <div className="font-manjari mt-2 font-light">{emLogInfo[index].date} </div>}
          </div> 

          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px" }}>Log ID:</span>
            {emLogInfo[index] &&  <div className="font-manjari mt-2 font-light">{emLogInfo[index].logId} </div>}
          </div> 

          <div style={{ display: "flex", alignItems: "center", maxWidth: "20%"}}>
            <span style={{ marginRight: "10px" }}>Additional Info:</span>
            {emLogInfo[index] &&  <div className="font-manjari mt-2 font-light break-words">{emLogInfo[index].info} </div>}
          </div> 
          
        </IonTitle>
      </div>
      <MapCard index={index} />
      
    </IonPage>
  );
};

export default IndividualLog;

