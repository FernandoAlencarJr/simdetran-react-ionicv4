import React from 'react';
import { IonPage, IonFooter, IonHeader, IonContent, IonTitle, } from '@ionic/react'
import { tituloheader,conteudoquiz} from './Estilos.module.css'
import Quiz from 'react-quiz-component'
import {quiz} from '../../questions/simulado1'
import {quiz1} from '../../questions/simulado2'

export default function DetranMt(props) {

  return (
    <IonPage>
    <IonHeader>
    <IonTitle className={tituloheader}>
      <strong>simDetran</strong> Mato Grosso
      </IonTitle>
      </IonHeader>
      <IonContent className={conteudoquiz}>
      <Quiz quiz={quiz} shuffle={true}></Quiz>

      <Quiz quiz={quiz1} shuffle={true}></Quiz>

      <Quiz quiz={quiz} shuffle={true}></Quiz>
    </IonContent>

      <IonFooter>
      <IonTitle className={tituloheader}>
      <strong>simDetran</strong> Mato Grosso
      </IonTitle>
      </IonFooter>
    </IonPage>
  );
}
