import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import react, { FC } from 'react';
import { useParams } from 'react-router';
import ShowsContainer from '../components/ShowsContainer';
import './Home.css';

const Home: FC = () => {

    return (
        <IonPage>
            <IonContent class="maincontent" fullscreen>
                <div className='imagecontainer'>
                <ShowsContainer />
                </div>



            </IonContent>
        </IonPage>
    );
};

export default Home;
