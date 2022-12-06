import { IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonRow } from '@ionic/react';
import React, { useState } from 'react'
import './MusicPlayer.css'

export const MusicPlayer = () => {
    return (
        <div className='musicPlayerContainer'>
            <IonCard>
                <IonCardHeader>Music</IonCardHeader>
                <IonGrid>
                    <IonRow className="">
                        <IonCol size='4' className="ion-align-self-start startCol ">
                            <IonCard>
                                <IonCardHeader>header 1</IonCardHeader>
                                <IonCardContent>content 1</IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol className='endCol'>
                            <IonCard>
                                <IonCardHeader>header 2</IonCardHeader>
                                <IonCardContent>content 2</IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCard>
        </div>
    );
}


