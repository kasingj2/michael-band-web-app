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
import { pricetagOutline, videocamOutline, musicalNoteOutline, homeOutline, logoSoundcloud, logoInstagram, albumsOutline, albumsSharp, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
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
    iosIcon: homeOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Shows',
    url: '/page/Shows',
    iosIcon: musicalNoteOutline,
    mdIcon: musicalNoteOutline
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
    iosIcon: videocamOutline,
    mdIcon: videocamOutline
  },
  {
    title: 'Lyrics',
    url: '/lyrics',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Merch',
    url: '/page/Merch',
    iosIcon: pricetagOutline,
    mdIcon: pricetagOutline
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

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" >
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Michael the Band</IonListHeader>
          <IonNote>Seattle, Wa</IonNote>
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
