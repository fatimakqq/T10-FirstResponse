import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { radioButtonOn, calculator, analytics, calendar, cube } from 'ionicons/icons';

import Home from './Emergencies';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Settings from './Settings';
import Calendar from './Calendar';
import Converter from './Converter';
import Login from './Login'

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/converter" render={() => <Converter />} exact={true} />
        <Route path="/tabs/lists" render={() => <Lists />} exact={true} />
        <Route path="/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
        <Route path="/tabs/emergencies" render={() => <Home />} exact={true} />
        <Route path="/tabs/calendar" render={() => <Calendar />} exact={true} />
        <Route path="/tabs/assets" render={() => <Lists />} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/emergencies" />} exact={true} />
        <Route path="/tabs/login" render={() => <Login />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/converter">
          <IonIcon icon={calculator} />
          <IonLabel>Converter</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/lists">
          <IonIcon icon={analytics} />
          <IonLabel>Reports</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/emergencies">
          <IonIcon icon={radioButtonOn} />
          <IonLabel>Emergencies</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/tabs/calendar">
          <IonIcon icon={calendar} />
          <IonLabel>Calendar</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab5" href="/tabs/assets">
          <IonIcon icon={cube} />
          <IonLabel>Assets</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
