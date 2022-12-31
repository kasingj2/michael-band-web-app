import { IonButton, IonContent, IonFooter, IonIcon, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import React, { useRef, useState, useEffect } from 'react'
import { playOutline, pauseOutline } from 'ionicons/icons';
import YouTubePlayer from 'youtube-player';

declare global {
    interface Window { player: any; }
}


export default function YouTubeFooter({ currentSongDetail, playButtonOnClick }: any) {

    const [isPlaying, setIsPlaying] = useState(false)
    const [footerActionIcon, setFooterActionIcon] = useState(playOutline)



    useEffect(() => {
        const stateNames: { [key: number]: string; } = {
            '-1': 'unstarted',
            0: 'ended',
            1: 'playing',
            2: 'paused',
            3: 'buffering',
            5: 'video cued'
        };

        if (!window.player) {
            const player = YouTubePlayer('video-player', {
                videoId: currentSongDetail.youtubeVideoId,
                height: '50',
                width: '50'
            });


            window.player = player

            window.player.on('stateChange', (event: any) => {
                const num: number = event.data
                let name = stateNames[num];

                console.log('State: ' + name + ' (' + event.data + ').');
            });

        }

        if (isPlaying) {
            window.player.loadVideoById(currentSongDetail.youtubeVideoId)
        }

    });


    const youTubeOnClick = () => {

        if (isPlaying) {
            //symbol was pause, change to play
            //reset the youtube player, stop music
            window.player.stopVideo()
            setIsPlaying(false)
            setFooterActionIcon(playOutline)

        } else {
            //symbol was pause, change to play
            //reset the youtube player, stop music
            setIsPlaying(true)
            setFooterActionIcon(pauseOutline)

            if (window.player) {
                window.player.loadVideoById(currentSongDetail.youtubeVideoId)
                window.player.playVideo()
            }
        }
    }


    return (
        <IonFooter className='YoutubeContainer'>
            <IonItem className="ion-justify-content-middle">
                <div onClick={youTubeOnClick}>
                    <IonIcon ios={footerActionIcon} slot="start">start</IonIcon>
                </div>
                <IonLabel class="ion-padding-horizontal">
                    <p>{currentSongDetail.trackName}</p>
                    <p>{currentSongDetail.trackLength}</p>
                </IonLabel>

                <IonThumbnail slot='end'>
                    <div id='video-player'></div>
                </IonThumbnail>
            </IonItem>
        </IonFooter>
    )
}

