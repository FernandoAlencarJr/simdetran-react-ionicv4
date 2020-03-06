import React from 'react';
import { IonPage, IonCard, IonCardTitle, IonCardContent, IonFooter,IonTitle } from '@ionic/react'
import { titulofooter} from './AbaDicas.module.css'


export default function pages() {
  return (
    <IonPage>
      <IonCard>
        <IonCardTitle>

      </IonCardTitle>
        <IonCardContent>

        </IonCardContent>
      </IonCard>
      <IonFooter>
      <IonTitle className={titulofooter} color='primary'>App desevolvido por FernandoAlencarJr.</IonTitle>
      </IonFooter>
    </IonPage>
  );
}
