import React, { useState,useEffect} from 'react';
import { IonPage, IonModal, IonButton, IonContent,IonIcon,IonCard,IonHeader,IonTitle,IonFooter} from '@ionic/react'
import {closeCircleOutline} from 'ionicons/icons'
import ModalComp from '../components/ModalComp'
import LoadingComp from '../components/LoadingComp'
import { modalionic,headerandfooter,simuladocard} from './AbaSimulado.module.css'

export default function AbaSimulado() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },10000)
  },[])

  const [showModaldf, setShowModaldf] = useState(false)
  const [showModalrj, setShowModalrj] = useState(false)
  const [showModalam, setShowModalam] = useState(false)
  const [showModalba, setShowModalba] = useState(false)
  const [showModalce, setShowModalce] = useState(false)
  const [showModales, setShowModales] = useState(false)
  const [showModalgo, setShowModalgo] = useState(false)
  const [showModalma, setShowModalma] = useState(false)
  const [showModalmt, setShowModalmt] = useState(false)
  const [showModalms, setShowModalms] = useState(false)
  const [showModalmg, setShowModalmg] = useState(false)
  const [showModalpa, setShowModalpa] = useState(false)
  const [showModalpb, setShowModalpb] = useState(false)
  const [showModalrn, setShowModalrn] = useState(false)
  const [showModalsc, setShowModalsc] = useState(false)
  const [showModalsp, setShowModalsp] = useState(false)

  
  return (loading ? <LoadingComp infor={'Boa sorte! simDetran'}/> :
    <IonPage>

      <IonHeader className={headerandfooter}>
        <IonTitle>
        Simulados separados por estados
        </IonTitle>
      </IonHeader>
      <IonCard className={simuladocard}>
        
          
      <IonButton onClick={() => setShowModalam(true)} color='tertiary'>SIMULADO/AM</IonButton>
      <IonButton onClick={() => setShowModalba(true)}color='tertiary'>SIMULADO/BA</IonButton>
      <IonButton onClick={() => setShowModalce(true)}>SIMULADO/CE</IonButton>
      <IonButton onClick={() => setShowModaldf(true)}>SIMULADO/DF</IonButton>
      <IonButton onClick={() => setShowModales(true)}color='tertiary'>SIMULADO/ES</IonButton>
      <IonButton onClick={() => setShowModalgo(true)}color='tertiary'>SIMULADO/GO</IonButton>
      <IonButton onClick={() => setShowModalma(true)}>SIMULADO/MA</IonButton>
      <IonButton onClick={() => setShowModalmt(true)}>SIMULADO/MT</IonButton>
      <IonButton onClick={() => setShowModalms(true)}color='tertiary'>SIMULADO/MS</IonButton>
      <IonButton onClick={() => setShowModalmg(true)}color='tertiary'>SIMULADO/MG</IonButton>
      <IonButton onClick={() => setShowModalpa(true)}>SIMULADO/PA</IonButton>
      <IonButton onClick={() => setShowModalpb(true)}>SIMULADO/PB</IonButton>
      <IonButton onClick={() => setShowModalrn(true)}color='tertiary'>SIMULADO/RN</IonButton>
      <IonButton onClick={() => setShowModalrj(true)}color='tertiary'>SIMULADO/RJ</IonButton>
      <IonButton onClick={() => setShowModalsp(true)}>SIMULADO/SP</IonButton>
      
     
      </IonCard>
      <IonFooter className={headerandfooter}>
        <IonTitle className={headerandfooter}>
          simDetran a sua plataforma de estudo
        </IonTitle>
      </IonFooter>
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
      <IonContent>
        <IonModal isOpen={showModalce}>
        <ModalComp
            titulo='Ceará'
            href='/DetranCe'
          />
        <IonButton onClick={() => setShowModalce(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModales}>
        <ModalComp
            titulo='Espírito Santo'
            href='/DetranEs'
          />
        <IonButton onClick={() => setShowModales(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalgo}>
        <ModalComp
            titulo='Goiás'
            href='/DetranGo'
          />
        <IonButton onClick={() => setShowModalgo(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalma}>
        <ModalComp
            titulo='Maranhão'
            href='/DetranMa'
          />
        <IonButton onClick={() => setShowModalma(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalmt}>
        <ModalComp
            titulo='Mato Grosso'
            href='/DetranMt'
          />
        <IonButton onClick={() => setShowModalmt(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalms}>
        <ModalComp
            titulo='Mato Grosso do Sul'
            href='/DetranMs'
          />
        <IonButton onClick={() => setShowModalms(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalmg}>
        <ModalComp
            titulo='Minas Gerais'
            href='/DetranMg'
          />
        <IonButton onClick={() => setShowModalmg(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalpa}>
        <ModalComp
            titulo='Pará'
            href='/DetranPa'
          />
        <IonButton onClick={() => setShowModalpa(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalpb}>
        <ModalComp
            titulo='Paraíba'
            href='/DetranPb'
          />
        <IonButton onClick={() => setShowModalpb(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalrn}>
        <ModalComp
            titulo='Rio Grande do Norte'
            href='/DetranRn'
          />
        <IonButton onClick={() => setShowModalrn(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalsc}>
        <ModalComp
            titulo='Santa Catarina'
            href='/DetranSc'
          />
        <IonButton onClick={() => setShowModalsc(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
      <IonContent>
        <IonModal isOpen={showModalsp}>
        <ModalComp
            titulo='São Paulo'
            href='/DetranSp'
          />
        <IonButton onClick={() => setShowModalsp(false)}><IonIcon icon={closeCircleOutline}>
         </IonIcon>Fechar</IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
    
  );
}
