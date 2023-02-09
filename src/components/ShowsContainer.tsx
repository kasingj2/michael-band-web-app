

import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonListHeader, IonIcon, IonText, IonButton } from '@ionic/react'
import React from 'react'
import './ShowsContainer.css'
import justDanceDonkeys from '../assets/images/JustDanceDonkeys.png'



type Props = {}

interface Shows {
    date: string
    venue: string
    cityState: string
}

const showEvents: Shows[] = [
    {
        date: "12/28/22",
        venue: "tacoma dome",
        cityState: "tacoma, Wa"
    },
    {
        date: "12/29/22",
        venue: "Safeco Field",
        cityState: "Seattle, Wa"
    },
    {
        date: "12/30/22",
        venue: "Key Arena",
        cityState: "Tacoma, Wa"
    }
]


const ShowsContainer = (props: Props) => {
    return (
        <div className='showsContainer'>
            <IonGrid className='showContainerGrid'>
                <IonRow className='ion-align-items-center ion-justify-content-center'>
                    <IonCol>
                        <IonCard className='showsCard' >
                            <IonCardContent>
                                <IonList>
                                    <IonListHeader>Upcoming Shows</IonListHeader>
                                    {showEvents.map((showEvent, index) => {
                                        return (
                                            <IonItem className='' routerDirection="none" lines="none" detail={false}>
                                                <IonText>{showEvent.date}</IonText>
                                                <IonLabel className='ion-padding-start'>
                                                    <h1>{showEvent.venue}</h1>
                                                    <p>{showEvent.cityState}</p>
                                                </IonLabel>
                                                <IonButton>buy</IonButton>
                                            </IonItem>
                                        );
                                    })}
                                </IonList>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol className='ion-align-items-center ion-justify-content-center'>
                        <IonCard className='merchCard ion-padding-bottom'>
                            <IonCardHeader>Merch</IonCardHeader>
                            <IonCardContent class='ion-justify-content-center'>
                                <img src={justDanceDonkeys} alt="dance donkeys" ></img>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>

    )
}

export default ShowsContainer