//import my Ionic components
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonMenuButton,
  } from '@ionic/react';

//import my page components 
import { useState, useEffect } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';

const MapCard = ({destination}) => {
    const [map, setMap] = useState(null);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDWhhJfm9B9r5evrHoSDWRUQX3gr6ac2W4`;
        script.onload = () => {
            const newMap = new window.google.maps.Map(document.getElementById('map'), {
              center: { lat: 0, lng: 0 },
              zoom: 15,
            });
            setMap(newMap);

            const directionsService = new window.google.maps.DirectionsService();
            const directionsRenderer = new window.google.maps.DirectionsRenderer();
            directionsRenderer.setMap(newMap);
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                const origin = new window.google.maps.LatLng(latitude, longitude);
                //console.log(position.coords);
                const request = {
                  origin,
                  destination,
                  travelMode: 'DRIVING',
                };
        
                directionsService.route(request, (result, status) => {
                  if (status === 'OK') {
                    directionsRenderer.setDirections(result);
                  }
                });
              });

    };
    document.head.appendChild(script);
    }, [destination]);
    
    return(
        <div id="map" style={{ height: '50%', width: '100%' }} />
    );
}
const Reports = () => {
    const homeItems = Store.useState(getHomeItems);
    const destination = "Grapevine, TX"; // a sample destination

    
    
    return(
        <IonPage>
            <IonHeader>
                Reports coming soon.
            </IonHeader>
            <MapCard destination={destination}/>
        </IonPage>
    );
}

export default Reports;