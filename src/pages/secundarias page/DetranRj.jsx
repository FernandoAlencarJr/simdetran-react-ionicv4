import React from 'react';
import { IonPage, IonFooter, IonHeader, IonContent, IonTitle } from '@ionic/react'
import { tituloheader} from './Estilos.module.css'
import Quiz from 'react-quiz-component'
import {quiz} from '../../questions/simuladorj'

export default function DetranRj() {

  return (
    <IonPage>

    <IonHeader  className={tituloheader}>
     <strong>simDetran</strong>  Rio de Janeiro
    </IonHeader>
      <IonContent>
      <Quiz quiz={quiz}></Quiz>
      </IonContent>
      <IonFooter>
      <IonTitle className={tituloheader}>
      <strong>simDetran</strong>  Rio de Janeiro
      </IonTitle>
      </IonFooter>
    </IonPage>

  );
}
