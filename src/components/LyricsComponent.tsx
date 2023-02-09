import { IonCard, IonCardContent, IonCardHeader, IonGrid, IonRow } from '@ionic/react'
import React from 'react'
import SongDetailsJson from '../data/SongDetails.json'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';



type Props = {}

const cardContentStyle = {
    fonFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    color: 'black'
}


const LyricsComponent = (props: Props) => {

    const albumName = SongDetailsJson.albums['Michael-the-Band'].albumName
    const tracksData = SongDetailsJson.albums['Michael-the-Band'].tracks

    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {tracksData.map(track => {
                                return (
                                    <Nav.Item>
                                        <Nav.Link eventKey={track.trackName}>{track.trackName}</Nav.Link>
                                    </Nav.Item>
                                )
                            })}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {tracksData.map(track => {
                                return (
                                    <Tab.Pane eventKey={track.trackName}>
                                        <p>{track.lyrics}</p>
                                    </Tab.Pane>
                                )
                            })}


                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>



        </div>
    )
}

export default LyricsComponent