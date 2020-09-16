import React, {Component} from 'react';
import { Container, CardDeck, Card } from "react-bootstrap";
import me from '../images/user/me.jpg';
import maryna from '../images/user/maryna.jpg';

class Home extends Component {
    render() {
        return (
            <>
                <Container>
                    <h2 className='text-center m-3'>Developers</h2>
                    <CardDeck className='mt-4'>
                        <Card>
                            <Card.Img variant='top' src={me} style={{maxHeight:'510px'}}/>
                            <Card.Body>
                                <Card.Title>Roman Tsvetkov</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem corporis excepturi facere magnam mollitia nulla quasi tempore voluptas voluptate. At cumque eaque minus praesentium sunt unde veniam voluptas? Illo?</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant='top' src={maryna} style={{maxHeight:'510px'}}/>
                            <Card.Body>
                                <Card.Title>Maryna Zubkova</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem corporis excepturi facere magnam mollitia nulla quasi tempore voluptas voluptate. At cumque eaque minus praesentium sunt unde veniam voluptas? Illo?</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}

export default Home;