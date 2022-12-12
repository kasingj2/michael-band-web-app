import { IonButton, IonContent, IonFooter, IonIcon, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import React, { useRef } from 'react'
import YouTube from 'react-youtube'
import { playOutline } from 'ionicons/icons';

export default function YouTubeFooter({ currentSongDetail, playButtonOnClick }: any) {

    const ref = useRef(null)

    const opts = {
        height: '50',
        width: '50',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    // var stopVideo = function ( element ) {
    //     var iframe = element.querySelector( 'iframe');
    //     var video = element.querySelector( 'video' );
    //     if ( iframe ) {
    //         var iframeSrc = iframe.src;
    //         iframe.src = iframeSrc;
    //     }
    //     if ( video ) {
    //         video.pause();
    //     }
    // };


    const youTubeOnClick = () => {
        const element = document.querySelector('YouTube')
        console.log("aaaa")
        const cur = ref?.current


    }

    return (
        <IonFooter className='YoutubeContainer'>
            <IonItem className="ion-justify-content-middle">
                <div onClick={youTubeOnClick}>
                    <IonIcon ios={playOutline} slot="start">start</IonIcon>
                </div>
                <IonLabel>
                    <p>{currentSongDetail.trackName}</p>
                    <p>{currentSongDetail.trackLength}</p>
                </IonLabel>

                <IonThumbnail slot='end'>
                    <YouTube ref={ref} videoId={currentSongDetail.youtubeVideoId} opts={opts} className="YoutubeTag" id="youtubeid" />
                </IonThumbnail>
            </IonItem>
        </IonFooter>
    )
}

