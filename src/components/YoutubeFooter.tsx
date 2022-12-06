import { IonButton, IonContent, IonFooter, IonItem, IonThumbnail } from '@ionic/react';
import React from 'react'
import YouTube from 'react-youtube'

export default function YouTubeFooter() {
    const opts = {
        height: '50',
        width: '50',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        // <IonContent className='YoutubeContainer'>
        //     <IonItem>
        //         <YouTube videoId="2g811Eo7K8U" opts={opts} />
        //     </IonItem>
        // </IonContent>
        <IonFooter className='YoutubeContainer'>
            <IonItem className="ion-justify-content-middle">
                <IonButton slot="start">start</IonButton>
                <IonThumbnail slot='end'>
                    <YouTube videoId="2g811Eo7K8U" opts={opts} className="YoutubeTag" />
                </IonThumbnail>
            </IonItem>
        </IonFooter>
    )
}

