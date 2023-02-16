import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const preStyle = {
    fontSize: '.9rem'
}
const LyricsModal = (props: any) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h4>{props.songTitle}</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <pre style={preStyle}>
                    {props.lyrics}
                </pre>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LyricsModal