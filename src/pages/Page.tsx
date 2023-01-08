import { IonButtons, IonContent, IonHeader, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ReactComponentElement } from 'react';
import { useParams } from 'react-router';
import Home from './Home';

type props = {
  Component: React.FC
}

const headerStyle = {
  height: '3rem',
  zIndex: '1'
}
const toolbarStyle = {
  border: 'none'
}

const Page = ({ Component }: props) => {

  return (
    <IonPage>
      <IonHeader style={headerStyle} class="ion-no-border">
        <IonToolbar style={toolbarStyle}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <Component />
    </IonPage>
  );
};

export default Page;
