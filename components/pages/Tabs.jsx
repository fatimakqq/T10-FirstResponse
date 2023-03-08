import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flash, list } from 'ionicons/icons';

import Home from './Feed';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Settings from './Settings';

import AssestsInventory from './AssestsInventory';
import Calendar from './Calendar';
import EmergencyLogs from './EmergencyLogs';
import Reports from './Reports';
import UnitConverter from './UnitConverter';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/AssestsInventory" render={() => <AssestsInventory/>} exact={true} />
        <Route path="/tabs/Calendar" render={() => <Calendar/>} exact={true} />
        <Route path="/tabs/EmergencyLogs" render={() => <EmergencyLogs/>} exact={true} />
        <Route path="/tabs/Reports" render={() => <Reports/>} exact={true} />
        <Route path="/tabs/UnitConverter" render={() => <UnitConverter/>} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/UnitConverter">
          <IonIcon icon={flash} />
          <IonLabel>Feed</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/lists">
          <IonIcon icon={list} />
          <IonLabel>Lists</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
