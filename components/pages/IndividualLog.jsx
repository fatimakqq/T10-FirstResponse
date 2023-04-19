'use client';
//insert other imports here
import React from 'react';
import { useLocation, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getEmLogInfo, getHomeItems } from '../../store/selectors';
import CustomButton from './Emergencies.jsx'
import Store from '../../store';


//import  il_element1  from '../assets/img/il_element1';
//import { img } from '../assets/img';
import Image from 'next/image'
import Emergencies from './/Emergencies';

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
  IonImg,
  IonCardSubtitle, 
  IonList,
  IonThumbnail,
  IonAvatar,
  IonChip,
  IonBackButton,
  IonNav, 
  IonRouterOutlet
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
      <IonContent className="ion-padding" fullscreen>
      
      <IonRouterOutlet>
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        </IonRouterOutlet>
      
      <IonItem className = "mx-none" routerLink={`/tabs/emergencies`}>
        <IonTitle>
          Back
        </IonTitle>
      </IonItem>

      <div className='mx-3 pb-4'>
        <h1 className='text-left text-6xl font-manjari leading-8 pb-1'>Head Injury</h1>
        <hr class="h-.01 my-5 bg-white"></hr>
        <h2 className='text-left text-l font-manjari leading-5 pb-0'>1:02 - 1:34PM</h2>
        <h2 className='text-left text-opacity-50 text-l font-manjari leading-1 pb-0'>2/20/23</h2>
      </div>

        <IonCard className = "pb-5" color="testing">
          <IonCardHeader color="testing2">
            <IonCardTitle className="font-manjari text-2xl leading-none pb-none">Description:</IonCardTitle>
          </IonCardHeader>
          <IonCardContent color="testing">
            <IonList>
              <IonItem>
                <IonLabel>Name: John Doe</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Gender: Male </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Age: 20</IonLabel>
              </IonItem>

              <IonItem class="item-text-wrap">
                <IonLabel>Chief Complaint: John busted his head on the concrete. He is not happy. Oops.</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Location/Room Number: A002</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>CAD: 12345</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className= "pb-7" color = "testing">
          <IonCardHeader color="testing2">
            <IonLabel className="font-manjari text-2xl leading-none pb-none">Location:</IonLabel>
          </IonCardHeader>

        </IonCard>


        <IonCard color="testing">
          <IonCardHeader className='text-left' color="testing2">
            <IonCardTitle className='text-s'>Need additional help navigating how to treat this injury?</IonCardTitle>
          </IonCardHeader>

          <IonItem button detail = "true" routerLink={`/tabs/Chat`}>
            <IonLabel>Our Chatbot can help!</IonLabel>
          </IonItem>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default IndividualLog;

