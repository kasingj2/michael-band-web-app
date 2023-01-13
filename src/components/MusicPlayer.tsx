import { IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonRow } from '@ionic/react';
import './MusicPlayer.css'
import SongDetailsJson from '../data/SongDetails.json'
import { musicalNoteOutline } from 'ionicons/icons'
import justDanceDonkeys from '../assets/images/JustDanceDonkeys.png'


export const MusicPlayer = (props: any) => {
    const albumName = SongDetailsJson.albums['Michael-the-Band'].albumName
    const tracksData = SongDetailsJson.albums['Michael-the-Band'].tracks

    return (
        <div className='musicPlayerContainer'>
            <IonCard className='ion-no-padding'>
                <IonGrid>
                    <IonRow className="">
                        <IonCol size='4' className="ion-align-self-start startCol ">
                            <IonCard className='ion-no-padding'>
                                <IonCardHeader>{albumName}</IonCardHeader>
                                <IonCardContent className='ion-justify-content-center'>
                                    <IonImg src={justDanceDonkeys} alt="album cover"></IonImg>
                                </IonCardContent>
                            </IonCard>
                            <IonList className='buyNowList' color='light'>
                                <IonListHeader color={'light'}>Buy</IonListHeader>
                                <IonItem color='light'>Online</IonItem>
                                <IonItem color='light'>Vinyl</IonItem>
                                <IonItem color='--ion-color-secondary'>Cassete</IonItem>
                            </IonList>
                        </IonCol>
                        <IonCol className='endCol'>
                            <IonList>
                                {tracksData && tracksData.map(track => {
                                    return (
                                        <IonItem key={track.trackName} onClick={() => props.setCurrentSongDetail(track)} button>
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
        </div >
    );
}


