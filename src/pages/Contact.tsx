import { IonCard, IonCardContent, IonContent, IonItem, IonList } from "@ionic/react"
import ListGroup from 'react-bootstrap/ListGroup';


const Contact = () => {

    const containerStyle = {
        width: '80% ',
        backgroundColor: `--ion-color-primary`
    }

    return (
        <IonContent>
            <div style={containerStyle}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </div>

        </IonContent>
    )
}

export default Contact