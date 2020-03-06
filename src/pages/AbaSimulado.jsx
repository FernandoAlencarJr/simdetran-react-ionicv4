import React, { useState} from 'react';
import { IonPage,IonModal, IonButton, IonContent} from '@ionic/react'
import ModalComp from '../components/ModalComp'

export default function AbaSimulado() {

  const [showModaldf, setShowModaldf] = useState(false)
  const [showModalrj, setShowModalrj] = useState(false)
  const [showModalam, setShowModalam] = useState(false)
  const [showModalba, setShowModalba] = useState(false)
  const [showModales, setShowModales] = useState(false)
  const [showModalgo, setShowModalgo] = useState(false)
  const [showModalms, setShowModalms] = useState(false)
  const [showModalmg, setShowModalmg] = useState(false)
  const [showModalsc, setShowModalsc] = useState(false)
  const [showModalsp, setShowModalsp] = useState(false)

  
  return (
    <IonPage>
      <IonContent>
        <IonModal isOpen={showModaldf}>
          <ModalComp
            titulo='Simulado Distrito Federal'
            href='/DetranDf'
          />
          <IonButton onClick={() => setShowModaldf(false)}>Close Modal</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalrj}>
        <ModalComp
            titulo='Simulado Rio de Janeiro'
            href='/DetranRj'
          />
        <IonButton onClick={() => setShowModalrj(false)}>Close Modal</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalam}>
        <ModalComp
            titulo='Simulado Amazonas'
            href='/DetranAm'
          />
        <IonButton onClick={() => setShowModalam(false)}>Close Modal</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalba}>
        <ModalComp
            titulo='Simulado Bahia'
            href='/DetranBa'
          />
        <IonButton onClick={() => setShowModalba(false)}>Close Modal</IonButton>
        </IonModal>
      </IonContent>
      <IonButton onClick={() => setShowModalam(true)}>SIMULADO/AM</IonButton>
      <IonButton onClick={() => setShowModalam(true)}>SIMULADO/BA</IonButton>
      <IonButton onClick={() => setShowModaldf(true)}>SIMULADO/DF</IonButton>
      <IonButton onClick={() => setShowModalrj(true)}>SIMULADO/RJ</IonButton>
    </IonPage>
  );
}
