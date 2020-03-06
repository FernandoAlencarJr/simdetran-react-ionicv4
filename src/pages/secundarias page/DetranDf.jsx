import React from 'react';
import { IonPage,IonFooter, IonHeader,IonContent,IonTitle } from '@ionic/react'
import Quiz from 'react-quiz-component'
import {quiz} from '../../questions/quiz'

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
        <IonTitle>
          Ionappp
      </IonTitle>
      </IonFooter>
    </IonPage>

  );
}
