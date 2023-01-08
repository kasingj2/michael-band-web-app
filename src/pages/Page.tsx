import { IonButtons, IonContent, IonHeader, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ReactComponentElement } from 'react';
import { useParams } from 'react-router';
import Home from './Home';

type props = {
  Component: React.FC
}

const toolbarStyle = {
  backgroundColor: 'transparent'
}

const Page = ({ Component }: props) => {

  const mainComponent = () => {
    return <Component />
  }

  return (
    <div className='pageMenuToggle'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>title</IonTitle>
        </IonToolbar>
      </IonHeader>
      {mainComponent()}
    </div>
  );
};

export default Page;


{/* <IonPage>
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>
    <IonTitle>{name}</IonTitle>
  </IonToolbar>
</IonHeader>

<IonContent fullscreen>
  <IonHeader collapse="condense">
    <IonToolbar>
      <IonTitle size="large">{name}</IonTitle>
    </IonToolbar>
  </IonHeader>
</IonContent>
</IonPage> */}