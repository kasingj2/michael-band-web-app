import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";
import LyricsComponent from "../components/LyricsComponent";


const Lyrics = ({ name }: any) => {

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          </IonToolbar>
        </IonHeader>
        <LyricsComponent />
      </IonContent>
    </IonPage>
  )
}

export default Lyrics