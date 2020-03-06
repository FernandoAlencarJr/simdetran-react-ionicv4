import React from 'react';
import { IonPage, IonFooter, IonHeader, IonContent, IonTitle } from '@ionic/react'
import { tituloheader} from './Estilos.module.css'
import Quiz from 'react-quiz-component'
import {quiz} from '../../questions/simuladoba'

export default function DetranBa() {

  return (
    <IonPage>

    <IonHeader  className={tituloheader}>
     <strong>simDetran</strong>  Bahia
    </IonHeader>
      <IonContent>
      <Quiz quiz={quiz}></Quiz>
      </IonContent>
      <IonFooter>
      <IonTitle className={tituloheader}>
      <strong>simDetran</strong>  Bahia
      </IonTitle>
      </IonFooter>
    </IonPage>

  );
}