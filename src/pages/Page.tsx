import { IonButtons, IonHeader, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';

type props = {
  getComponent: any
}

const headerStyle = {
  height: '3rem',
  zIndex: '1'
}
const toolbarStyle = {
  border: 'none'
}

const Page = ({ getComponent }: props) => {

  return (
    <IonPage>
      <IonHeader style={headerStyle} class="ion-no-border">
        <IonToolbar style={toolbarStyle}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {getComponent()}
    </IonPage>
  );
};

export default Page;
