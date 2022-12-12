import { IonCard, IonCardContent, IonCardHeader, IonGrid, IonRow } from '@ionic/react'
import React from 'react'
import SongDetailsJson from '../data/SongDetails.json'
import './LyricsComponent.css'



type Props = {}

const LyricsComponent = (props: Props) => {

    const albumName = SongDetailsJson.albums['Michael-the-Band'].albumName
    const tracksData = SongDetailsJson.albums['Michael-the-Band'].tracks

    return (
        <div>
            {
                tracksData.map(track => {

                    return (
                        <IonCard>
                            <IonCardHeader>{track.trackName} - {albumName}</IonCardHeader>
                            <IonCardContent>{track.lyrics}</IonCardContent>
                        </IonCard>
                    )
                })
            }

        </div>
    )
}


export default LyricsComponent