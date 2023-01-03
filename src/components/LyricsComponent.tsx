import { IonCard, IonCardContent, IonCardHeader, IonGrid, IonRow } from '@ionic/react'
import React from 'react'
import SongDetailsJson from '../data/SongDetails.json'



type Props = {}

const cardContentStyle = {
    fonFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    color: 'black'
}

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
                            <IonCardContent style={cardContentStyle}>{track.lyrics}</IonCardContent>
                        </IonCard>
                    )
                })
            }

        </div>
    )
}


export default LyricsComponent