import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {square,busOutline,documentAttachOutline } from 'ionicons/icons';
import AbaInicio from './pages/AbaInicio';
import AbaSimulado from './pages/AbaSimulado';
import AbaDicas from './pages/AbaDicas';
import DetranDf from './pages/secundarias page/DetranDf'
import DetranAm from './pages/secundarias page/DetranAm'
import DetranBa from './pages/secundarias page/DetranBa'
import DetranRj from './pages/secundarias page/DetranRj'
import DetranCe from './pages/secundarias page/DetranCe'
import DetranGo from './pages/secundarias page/DetranGo'
import DetranEs from './pages/secundarias page/DetranEs'
import DetranMa from './pages/secundarias page/DetranMa'
import DetranMt from './pages/secundarias page/DetranMt'
import DetranMs from './pages/secundarias page/DetranMs'
import DetranMg from './pages/secundarias page/DetranMg'
import DetranPa from './pages/secundarias page/DetranPa'
import DetranPb from './pages/secundarias page/DetranPb'
import DetranRn from './pages/secundarias page/DetranRn'
import DetranSc from './pages/secundarias page/DetranSc'



const Rotas: React.FC = () => (


  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/AbaInicio" component={AbaInicio} exact={true} />
          <Route path="/AbaSimulado" component={AbaSimulado} exact={true} />
          <Route path="/AbaDicas" component={AbaDicas} />
          <Route path="/DetranDf" component={DetranDf} />
          <Route path="/DetranAm" component={DetranAm} />
          <Route path="/DetranBa" component={DetranBa} />
          <Route path="/DetranRj" component={DetranRj} />
          <Route path="/DetranCe" component={DetranCe} />
          <Route path="/DetranGo" component={DetranGo} />
          <Route path="/DetranEs" component={DetranEs} />
          <Route path="/DetranMa" component={DetranMa} />
          <Route path="/DetranMt" component={DetranMt} />
          <Route path="/DetranMs" component={DetranMs} />
          <Route path="/DetranMg" component={DetranMg} />
          <Route path="/DetranPa" component={DetranPa} />
          <Route path="/DetranPb" component={DetranPb} />
          <Route path="/DetranRn" component={DetranRn} />
          <Route path="/DetranSc" component={DetranSc} />
          <Route path="/" render={() => <Redirect to="/AbaInicio" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="AbaInicio" href="/AbaInicio">
            <IonIcon icon={busOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="AbaSimulado" href="/AbaSimulado">
            <IonIcon icon={documentAttachOutline} />
            <IonLabel>Simulado</IonLabel>
          </IonTabButton>
          <IonTabButton tab="AbaDicas" href="/AbaDicas">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default Rotas;