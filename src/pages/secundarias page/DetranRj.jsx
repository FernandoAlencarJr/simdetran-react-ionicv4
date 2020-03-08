import React from 'react';
import { IonPage, IonFooter, IonHeader, IonContent, IonTitle, } from '@ionic/react'
import { tituloheader,conteudoquiz} from './Estilos.module.css'
import Quiz from 'react-quiz-component'
import { quiz } from '../../questions/simulado1'
import {quiz1} from '../../questions/simulado2'

export default function DetranRj(props) {

  return (
    <IonPage>
    <IonHeader>
    <IonTitle className={tituloheader}>
      <strong>simDetran</strong>  Rio de Janeiro
      </IonTitle>
      </IonHeader>
      <IonContent className={conteudoquiz}>
      <Quiz quiz={quiz}></Quiz>

      <Quiz quiz={quiz1}></Quiz>

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
