import React, { useState} from 'react';
import { IonPage,IonModal, IonButton, IonContent} from '@ionic/react'
import ModalComp from '../components/ModalComp'

export default function AbaSimulado() {

  const [showModaldf, setShowModaldf] = useState(false)
  const [showModalrj, setShowModalrj] = useState(false)
  
  return (
    <IonPage>
      <IonContent>
        <IonModal isOpen={showModaldf}>
          <ModalComp
            titulo='Simulado Distrito Federal'
            subtitulo='sub titulo simulado distrito federal'
          />
          <IonButton onClick={() => setShowModaldf(false)}>Close Modal</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalrj}>
        <p>RJ</p>
        <IonButton onClick={() => setShowModalrj(false)}>Close Modal</IonButton>
        </IonModal>
      </IonContent>
      <IonButton onClick={() => setShowModaldf(true)}>SIMULADO/DF</IonButton>
      <IonButton onClick={() => setShowModalrj(true)}>SIMULADO/RJ</IonButton>
    </IonPage>
  );
}
