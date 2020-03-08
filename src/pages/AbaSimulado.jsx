import React, { useState,useEffect} from 'react';
import { IonPage, IonModal, IonButton, IonContent,IonIcon } from '@ionic/react'
import {closeCircleOutline} from 'ionicons/icons'
import ModalComp from '../components/ModalComp'
import LoadingComp from '../components/LoadingComp'
import { modalionic} from './AbaSimulado.module.css'

export default function AbaSimulado() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])

  const [showModaldf, setShowModaldf] = useState(false)
  const [showModalrj, setShowModalrj] = useState(false)
  const [showModalam, setShowModalam] = useState(false)
  const [showModalba, setShowModalba] = useState(false)
  /*const [showModales, setShowModales] = useState(false)
  const [showModalgo, setShowModalgo] = useState(false)
  const [showModalms, setShowModalms] = useState(false)
  const [showModalmg, setShowModalmg] = useState(false)
  const [showModalsc, setShowModalsc] = useState(false)
  const [showModalsp, setShowModalsp] = useState(false)*/

  
  return (loading ? <LoadingComp infor={'Boa sorte! simDetran'}/> :
    <IonPage>
      <IonContent>
        <IonModal isOpen={showModaldf} >
          <ModalComp 
            titulo='Distrito Federal'
            href='/DetranDf'
            className={modalionic}
          />
          <IonButton onClick={() => setShowModaldf(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalrj}>
        <ModalComp
            titulo='Rio de Janeiro'
            href='/DetranRj'
          />
        <IonButton onClick={() => setShowModalrj(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalam}>
        <ModalComp
            titulo='Amazonas'
            href='/DetranAm'
          />
          <IonButton onClick={() => setShowModalam(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalba}>
        <ModalComp
            titulo='Bahia'
            href='/DetranBa'
          />
        <IonButton onClick={() => setShowModalba(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonButton onClick={() => setShowModalam(true)}>SIMULADO/AM</IonButton>
      <IonButton onClick={() => setShowModalam(true)}>SIMULADO/BA</IonButton>
      <IonButton onClick={() => setShowModaldf(true)}>SIMULADO/DF</IonButton>
      <IonButton onClick={() => setShowModalrj(true)}>SIMULADO/RJ</IonButton>
    </IonPage>
  );
}
