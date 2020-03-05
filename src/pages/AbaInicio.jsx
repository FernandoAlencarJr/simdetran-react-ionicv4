import React, { useEffect,useState } from 'react';
import {
  IonPage, IonImg, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle,
IonSlide,IonSlides,IonIcon,IonTitle,IonContent,IonHeader,IonFooter} from '@ionic/react'
import { titulo,subTitulo,tituloheader} from './AbaInicio.module.css'
import FotoHome from '../Images/FotoHome.png'
import { arrowForwardOutline } from 'ionicons/icons'




 export default function AbaInicio()  {

   const [loading, setLoading] = useState(true)
   useEffect(() => {
     setTimeout(() => {
       setLoading(false)
       
     },1000)
   },[])



    return (
      loading ? <p>loading</p> :
        <IonPage >
          <IonHeader>
            <IonTitle className={tituloheader}><strong>simDetran</strong></IonTitle>
        <IonImg
            src={FotoHome}
        />
          </IonHeader>
          <IonContent>
        <IonSlides>
          <IonSlide>
        <IonCard color='tertiary'>
            <IonCardTitle className={titulo}>Bem vindo ao <strong>simDetran</strong></IonCardTitle>
                <IonCardSubtitle className={subTitulo}>O simDetran ajuda na preparação do candidato para o exame de Legislação de Trânsito, que é composto de 30 questões de múltipla escolha e tem duração de 60 minutos. </IonCardSubtitle>
                <IonTitle>Deslize este card e saiba mais<IonIcon icon={arrowForwardOutline} /></IonTitle>
          
        </IonCard>
          </IonSlide>
          <IonSlide>
          <IonCard color='tertiary'>
          <IonCardContent>
            <IonCardTitle className={titulo}>Bem vindo ao <strong>simDetran</strong></IonCardTitle>
            <IonCardSubtitle className={subTitulo}>O nosso <strong>Aplicativo</strong>  foi desenvolvido pensando em melhor desempenho do aluno na hora de executar a prova téorica do DETRAN. Simulados totalmente atualizados de acordo com provas que foram passadas em 2019 </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
          </IonSlide>
            </IonSlides>
          </IonContent>
          <IonFooter>

          </IonFooter>
      </IonPage>
    )
  }

