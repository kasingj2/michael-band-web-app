import { IonCard, IonCardContent, IonContent, IonHeader, IonImg } from '@ionic/react';
import { FC, useState } from 'react';
import ShowsContainer from '../components/ShowsContainer';
import './Home.css';
import michaelImage from '../assets/images/homeImage-small.png'
import MichaelCover from '../assets/images/michael-cover-small.jpeg'
import { MusicPlayer } from '../components/MusicPlayer';
import YouTubeFooter from '../components/YoutubeFooter'
import EmailSignupForm from '../components/EmailSignupForm';
import SongDetailsJson from '../data/SongDetails.json'
import MichaelLogo from '../assets/images/michael-logo.png'
import Yellow from '../assets/images/yellow.png'

type Props = {
    setCurrentSongDetail: any,
}

const showDummyContainers = false;

const Home = ({ setCurrentSongDetail }: Props) => {
    const imageCardStyle = {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        border: 'none'
    }

    const logoContainer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5rem',
        marginRight: '5rem'
    }

    return (
        <>
            <IonContent class="maincontent" fullscreen  >
                <div style={logoContainer} ><img src={MichaelLogo} alt="logo"></img></div>

                <IonCard style={imageCardStyle}>
                    <IonCardContent className="ion-justify-content-center">
                        <img className='michaelsImg' src={MichaelCover} alt="michaels"></img>
                    </IonCardContent>
                </IonCard>
                {showDummyContainers && <ShowsContainer />}
                <MusicPlayer
                    setCurrentSongDetail={setCurrentSongDetail}
                />
                {showDummyContainers && <EmailSignupForm />}
            </IonContent>
            <div style={{ height: '5rem' }}></div>
        </>
    );
};

export default Home;
