import { IonCard, IonCardContent, IonCardHeader, IonGrid, IonRow } from '@ionic/react'
import React from 'react'
import SongDetailsJson from '../data/SongDetails.json'
import './LyricsComponent.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import '../fonts/Times.ttc'
import LyricsImage from '../assets/images/michael-insert-side1.png'
import BlueLogo from '../assets/images/michael-blue-logo.png'

type Props = {}

const cardContentStyle = {
    fonFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    color: 'black'
}

const LyricsContainer = {
    display: 'flex',
    width: 'auto',
    justifyContent: 'center',
    marginBottom: '10rem'
}
const TabContainer = {
    width: '90%',
}

const LyricsComponent = (props: Props) => {

    const albumName = SongDetailsJson.albums['Michael-the-Band'].albumName
    const tracksData = SongDetailsJson.albums['Michael-the-Band'].tracks
    const lyricTagStyle = {
        fontSize: '1rem'
    }

    return (
        <div style={LyricsContainer}>
        </div>
    )
}

export default LyricsComponent

/* 
    <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
*/