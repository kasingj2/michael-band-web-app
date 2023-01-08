import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import react, { FC, useState } from 'react';
import { useParams } from 'react-router';
import ShowsContainer from '../components/ShowsContainer';
import './Home.css';
import michaelImage from '../assets/images/homeImage-small.png'
import { MusicPlayer } from '../components/MusicPlayer';
import YouTubeFooter from '../components/YoutubeFooter'
import YoutubePlayer from '../components/YoutubePlayer';
import EmailSignupForm from '../components/EmailSignupForm';
import { menuOutline } from 'ionicons/icons';
const Home: FC = () => {

    const [currentSongDetail, setCurrentSongDetail] = useState({
        "trackName": "I'm Going Home",
        "trackLength": "4:02",
        "youtubeVideoId": "ZQF1rSVu4oo"
    })

    const playButtonOnClick = () => {
        setCurrentSongDetail(currentSongDetail)
    }

    return (
        <IonPage>
            <IonContent class="maincontent" fullscreen>
                <IonCard>
                    <IonCardContent className="ion-justify-content-center">
                        <img className='michaelsImg' src={michaelImage} alt="michaels"></img>
                    </IonCardContent>
                </IonCard>
                <ShowsContainer />
                <MusicPlayer
                    setCurrentSongDetail={setCurrentSongDetail}
                />
                <YouTubeFooter
                    currentSongDetail={currentSongDetail}
                    playButtonOnClick={playButtonOnClick}
                />
                <EmailSignupForm />
            </IonContent>
            <div style={{ height: '20rem' }}></div>
        </IonPage >
    );
};

export default Home;
