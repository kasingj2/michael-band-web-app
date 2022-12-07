import { IonButton, IonContent, IonFooter, IonIcon, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import React from 'react'
import YouTube from 'react-youtube'
import { playOutline } from 'ionicons/icons';

export default function YouTubeFooter({ currentSongDetail }: any) {


    const opts = {
        height: '50',
        width: '50',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };


    return (
        <IonFooter className='YoutubeContainer'>
            <IonItem className="ion-justify-content-middle">
                <IonIcon ios={playOutline} slot="start">start</IonIcon>
                <IonLabel>
                    <p>{currentSongDetail.trackName}</p>
                    <p>{currentSongDetail.trackLength}</p>
                </IonLabel>

                <IonThumbnail slot='end'>
                    <YouTube videoId={currentSongDetail.youtubeVideoId} opts={opts} className="YoutubeTag" />
                </IonThumbnail>
            </IonItem>
        </IonFooter>
    )
}

