import { IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonRow } from '@ionic/react';
import React, { useState } from 'react'
import './MusicPlayer.css'
import SongDetailsJson from '../data/SongDetails.json'
import { musicalNoteOutline } from 'ionicons/icons'
import justDanceDonkeys from '../assets/images/JustDanceDonkeys.png'







export const MusicPlayer = () => {

    interface SongDetails {
        trackName: string
        trackLength: string
        youtubeVideoId: string
    }

    const albumName = SongDetailsJson.albums['Michael-the-Band'].albumName
    const tracksData = SongDetailsJson.albums['Michael-the-Band'].tracks

    return (
        <div className='musicPlayerContainer'>
            <IonCard>
                <IonCardHeader>Music</IonCardHeader>
                <IonGrid>
                    <IonRow className="">
                        <IonCol size='4' className="ion-align-self-start startCol ">
                            <IonCard>
                                <IonCardHeader>header 1</IonCardHeader>
                                <IonCardContent className='ion-justify-content-center'>
                                    <IonImg src={justDanceDonkeys} alt="album cover"></IonImg>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol className='endCol'>
                            <IonList>
                                <IonListHeader>{albumName}</IonListHeader>
                                {tracksData && tracksData.map(track => {
                                    return (
                                        <IonItem>
                                            <IonLabel slot='start'> {track.trackName}</IonLabel>
                                            <IonLabel> {track.trackLength}</IonLabel>
                                            <IonIcon slot='end' ios={musicalNoteOutline}></IonIcon>
                                        </IonItem>
                                    )
                                })}
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCard>
        </div>
    );
}


