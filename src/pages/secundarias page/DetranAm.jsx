import React from 'react';
import { IonPage, IonFooter, IonHeader, IonContent, IonTitle } from '@ionic/react'
import { tituloheader} from './Estilos.module.css'
import Quiz from 'react-quiz-component'
import {quiz} from '../../questions/simuladoam'

export default function DetranAm() {

  return (
    <IonPage>

    <IonHeader  className={tituloheader}>
     <strong>simDetran</strong>  Amazonas
    </IonHeader>
      <IonContent>
      <Quiz quiz={quiz}></Quiz>
      </IonContent>
      <IonFooter>
      <IonTitle className={tituloheader}>
      <strong>simDetran</strong>  Amazonas
      </IonTitle>
      </IonFooter>
    </IonPage>

  );
}
