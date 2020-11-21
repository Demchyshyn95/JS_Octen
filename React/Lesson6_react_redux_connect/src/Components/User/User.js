import './style.css';
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";


const User = ({user, select, selecteds}) => {
    const {id, name, email, website} = user;
    const bg = selecteds.find(el => el.id === id);

    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="https://picsum.photos/100/100"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p>{email}</p>
                    <p>{website}</p>
                </Card.Text>
                <Button variant={bg ? 'warning' : 'success'}
                        onClick={() => select(user)}>{bg ? 'Selected' : 'Select'}</Button>
            </Card.Body>
        </Card>
    )
}
export default User;
