import { IonCard, IonCardContent, IonContent } from '@ionic/react';
import { FC, useState } from 'react';
import ShowsContainer from '../components/ShowsContainer';
import './Home.css';
import michaelImage from '../assets/images/homeImage-small.png'
import { MusicPlayer } from '../components/MusicPlayer';
import YouTubeFooter from '../components/YoutubeFooter'
import EmailSignupForm from '../components/EmailSignupForm';
import SongDetailsJson from '../data/SongDetails.json'

type Props = {
    setCurrentSongDetail: any,
}
const Home = ({ setCurrentSongDetail }: Props) => {
    const imageCardStyle = {
        boxShadow: 'none'
    }

    return (
        <>
            <IonContent class="maincontent" fullscreen >
                <IonCard style={imageCardStyle}>
                    <IonCardContent className="ion-justify-content-center">
                        <img className='michaelsImg' src={michaelImage} alt="michaels"></img>
                    </IonCardContent>
                </IonCard>
                <ShowsContainer />
                <MusicPlayer
                    setCurrentSongDetail={setCurrentSongDetail}
                />
                <EmailSignupForm />
            </IonContent>
            <div style={{ height: '5rem' }}></div>
        </>
    );
};

export default Home;
