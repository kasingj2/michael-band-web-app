import { useState } from 'react'
import { IonHeader, IonToolbar, IonContent } from "@ionic/react";
import LyricsComponent from "../components/LyricsComponent";
import Button from 'react-bootstrap/Button';
import LyricsModal from '../components/LyricsModal';
import ListGroup from 'react-bootstrap/ListGroup';
import SongDetailsJson from '../data/SongDetails.json'
import Album1Thumbnail from '../assets/images/homeImage-small.png'



const listItemStyle = {
  backgroundColor: 'var(--ion-color-primary)'
}
const imageStyle = {
  width: '5rem'
}
const imageContainerStyle = {
  display: 'inline-block',
  marginLeft: '1rem',
}

const Lyrics = ({ name }: any) => {

  const [modalShow, setModalShow] = useState(false);
  const [lyricsForModal, setLyricsForModal] = useState('');
  const [songTitleForModal, setSongTitleForModal] = useState('')
  const albumName = SongDetailsJson.albums['Michael-the-Band'].albumName
  const tracksData = SongDetailsJson.albums['Michael-the-Band'].tracks

  const onClickListItem = (songtitle: any, trackLyrics: any) => {
    setLyricsForModal(trackLyrics)
    setSongTitleForModal(songtitle)
    setModalShow(true)
  }

  return (
    <IonContent fullscreen>
      <div>
        <div style={imageContainerStyle}>
          <img style={imageStyle} src={Album1Thumbnail} alt='' />
          <h5>{albumName}</h5>
        </div>
        <ListGroup variant="flush">
          {tracksData && tracksData.map((track) => {
            return (
              <ListGroup.Item style={listItemStyle} action onClick={() => { onClickListItem(track.trackName, track.lyrics) }}>{track.trackName}</ListGroup.Item>
            )
          })}
        </ListGroup>
      </div>

      <LyricsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        lyrics={lyricsForModal}
        songTitle={songTitleForModal}
      />

    </IonContent>
  )
}

export default Lyrics