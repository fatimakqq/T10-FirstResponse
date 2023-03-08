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
import Tabs from './pages/Tabs';


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
          <Route path="/tabs" render={() => <Tabs />} />
          <Route path="/" render={() => <Redirect to="/tabs/emergencies" />} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
