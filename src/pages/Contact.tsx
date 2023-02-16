import { IonCard, IonCardContent, IonContent, IonItem, IonList } from "@ionic/react"
import ListGroup from 'react-bootstrap/ListGroup';


const Contact = () => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        height: '70%'
    }

    const listGroupStyle = {
        width: '20rem',
    }

    const listItemStyle = {
        backgroundColor: 'var(--ion-color-primary)',
        color: 'black'
    }

    return (
        <IonContent>
            <div style={containerStyle}>
                <div style={listGroupStyle}>
                    <ListGroup variant="flush">
                        <ListGroup.Item style={listItemStyle}><h4>Management</h4><p>meredith@michaeltheband.com</p></ListGroup.Item>
                        <ListGroup.Item style={listItemStyle}><h4>Booking</h4><p>meredith@michaeltheband.com</p> </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </IonContent>
    )
}

export default Contact