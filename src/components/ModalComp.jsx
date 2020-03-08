import React from 'react';
import {titulomodal,headermodal } from './ModalComp.module.css'
import { IonButton, IonTitle, IonHeader, IonImg } from '@ionic/react'
import placamodal from '../Images/placamodal.jpg'
  
export default function ModalComp(props) {
  return (
<>
      <IonHeader className={headermodal}>
        <IonTitle className={titulomodal}>
      simulado <strong>{props.titulo}</strong>
        </IonTitle>
      </IonHeader>
      <IonImg
        src={placamodal}
      />
    <IonButton href={props.href} color='tertiary'>
        Iniciar Simulado
    </IonButton>

</>
  );
}
