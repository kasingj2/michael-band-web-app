import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import "@ionic/react/css/ionic.bundle.css"
import Menu from './components/Menu';
import Page from './pages/Page';
import Home from './pages/Home'
import Lyrics from './pages/Lyrics';
import Sandbox from './pages/Sandbox'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import YouTubeFooter from './components/YoutubeFooter';
import SongDetailsJson from './data/SongDetails.json'
import { useState } from 'react';


setupIonicReact();

const App: React.FC = () => {
  const [currentSongDetail, setCurrentSongDetail] = useState(SongDetailsJson.albums['Michael-the-Band'].tracks[0])
  const playButtonOnClick = () => {
    setCurrentSongDetail(currentSongDetail)
  }

  const renderHomeComponent = () => {
    return <Home setCurrentSongDetail={setCurrentSongDetail} />
  }


  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact={true}>
              <Page getComponent={renderHomeComponent} />
            </Route>
            <Route path="/lyrics" exact={true}>
              <Page getComponent={() => { return <Lyrics /> }} />
            </Route>
            <Route path="/sandbox" exact={true}>
              <Sandbox />
            </Route>
            <Route path="/contact" exact={true}>
              <Page getComponent={() => { return <Contact /> }} />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
        <div>
          <YouTubeFooter
            currentSongDetail={currentSongDetail}
            playButtonOnClick={playButtonOnClick}
          /></div>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;