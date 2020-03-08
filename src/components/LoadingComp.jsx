import React from 'react';
import {IonPage ,IonTitle,IonImg,IonCard,IonHeader,IonContent} from '@ionic/react'
import {ThreeHorseLoading } from 'react-loadingg'
import  FotoCarregando  from '../Images/FotoCarregando.png'
import { cardloading,tituloloading} from './LoadingComp.module.css'
export default function LoadingComp(props) {
  return (
    <IonPage>
     
   

      <IonHeader>
        <IonTitle className={tituloloading}>
          Bem vindo ao <strong>simDetran</strong>
</IonTitle>
        <IonImg
          src={FotoCarregando}
        />
    </IonHeader>
      <IonContent>     
    <ThreeHorseLoading  size='large' />
    </IonContent>
      <IonCard className={cardloading}>       
        <IonTitle>{props.infor}</IonTitle>
      </IonCard>
    </IonPage>
  );
}
