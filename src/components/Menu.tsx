import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { logoSoundcloud, logoInstagram, albumsOutline, albumsSharp, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

interface SocialMedia {
  url: string
  iosIcon: string
  mdIcon: string
  title: string
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Shows',
    url: '/page/Shows',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Music',
    url: '/page/Music',
    iosIcon: albumsOutline,
    mdIcon: albumsSharp
  },
  {
    title: 'Videos',
    url: '/page/Videos',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },  
  {
    title: 'Lyrics',
    url: '/page/Lyrics',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Merch',
    url: '/page/Merch',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  }
];

const socialMedias: SocialMedia[] = [
  {
   title: 'Instagram',
   url: 'https://www.instagram.com/michael_theband/',
   iosIcon: logoInstagram,
   mdIcon: logoInstagram 
  },
  {
    title: 'Sound Cloud',
    url: 'https://soundcloud.com/michael-michael-187238932',
    iosIcon: logoSoundcloud,
    mdIcon: logoSoundcloud
   }
]

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonListHeader>Social Media</IonListHeader>
        <IonList id="labels-list">
        {socialMedias.map((socialMedia, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem routerDirection="none" lines="none" detail={false} href={socialMedia.url} target='_blank'>
                  <IonIcon slot="start" ios={socialMedia.iosIcon} md={socialMedia.mdIcon} />
                  <IonLabel>{socialMedia.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
