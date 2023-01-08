import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";
import LyricsComponent from "../components/LyricsComponent";


const Lyrics = ({ name }: any) => {

  return (
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <LyricsComponent />
    </IonContent>
  )
}

export default Lyrics