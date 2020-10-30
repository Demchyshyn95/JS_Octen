import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FullUser = (props) => {
    let {id,name,email,phone,website} = props.user;
    return (
        <Modal show={true}>
            <Modal.Header closeButton  onClick={() => props.changeShow()}>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body><em>
                id - {id} <hr/>
                email - {email}<hr/>
                phone - {phone}<hr/>
                website - {website}<hr/>
            </em></Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => props.changeShow()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default FullUser;
