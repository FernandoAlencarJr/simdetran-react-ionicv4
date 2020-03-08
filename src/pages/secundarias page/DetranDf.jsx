import React from 'react';
import { IonPage, IonFooter, IonHeader, IonContent, IonTitle } from '@ionic/react'
import { tituloheader} from './Estilos.module.css'
import Quiz from 'react-quiz-component'
import {quiz} from '../../questions/simuladodf'

export default function DetranDf() {

  return (
    <IonPage>

    <IonHeader>
      QizDF
    </IonHeader>
      <IonContent>
      <Quiz quiz={quiz}></Quiz>
      </IonContent>
      <IonFooter>
      <IonTitle className={tituloheader}>
      <strong>simDetran</strong>  Distrito Federal
      </IonTitle>
      </IonFooter>
    </IonPage>

  );
}
