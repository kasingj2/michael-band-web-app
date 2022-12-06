import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import react, { FC } from 'react';
import { useParams } from 'react-router';
import ShowsContainer from '../components/ShowsContainer';
import './Home.css';
import michaelImage from '../assets/images/homeImage-small.png'
import { MusicPlayer } from '../components/MusicPlayer';
import YouTubeFooter from '../components/YoutubeFooter'

const Home: FC = () => {

    return (
        <IonPage >
            <IonContent class="maincontent" fullscreen>
                <IonCard>
                    <IonCardContent className="ion-justify-content-center">
                        <img className='michaelsImg' src={michaelImage} alt="michaels"></img>
                    </IonCardContent>
                </IonCard>
                <ShowsContainer />
                <MusicPlayer />
                <YouTubeFooter />

            </IonContent>
        </IonPage >
    );
};

export default Home;
