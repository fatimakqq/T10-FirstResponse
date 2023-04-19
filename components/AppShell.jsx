import { IonApp, IonLabel, IonRouterOutlet, setupIonicReact, IonTabs, IonTabBar, IonTabButton, IonIcon  } from '@ionic/react';
import { radioButtonOn, calculator, analytics, calendar, cube } from 'ionicons/icons';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Emergencies from './pages/Emergencies';
import Lists from './pages/Lists';
import ListDetail from './pages/ListDetail';
import Settings from './pages/Settings';
import Calendar from './pages/Calendar';
import Converter from './pages/Converter';
import Login from './pages/Login';
import Tabs from './pages/Tabs';
import Register from './pages/Register';

import React from 'react';
import IndividualLog from './pages/IndividualLog';

//import Emergency from  '../pages/Emergency/[...id]';


setupIonicReact({});

window.matchMedia("(prefers-color-scheme: dark)").addListener(async (status) => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

const AppShell = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/" component={Login} exact/>
          <Route path="/tabs" render={() => <Tabs />} />
          <Route path="/signup" render={() => <Register />} />
          {/* <Switch>
            <Route path="/" exact component={Emergencies}/>
            <Route path="/IndividualLog" component={IndividualLog}/>
          </Switch> */}
          <Route path="/Emergency/:id" component={IndividualLog} />
        
          
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
