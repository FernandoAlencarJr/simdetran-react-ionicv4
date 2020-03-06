import React from 'react';
import { } from './ModalComp'
import {IonButton,IonTitle, }from '@ionic/react'
  
export default function ModalComp(props) {
  return (
<>

    <IonTitle>
      {props.titulo}
    </IonTitle>
    <IonButton href={props.href}>
        Iniciar Simulado
    </IonButton>
</>
  );
}
