import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export default function Project() {
    return (
        <Container className="my-5">
            <Row>
                <Card style={{ width: '100%' }} md={6}>
                    <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
                    <Card.Body>
                        <Card.Title>Parking Manager</Card.Title>
                        <Card.Text>
                            Web application for the user to manage their paid parking lots.
                        </Card.Text>
                        <Button variant="primary" href="#">View Project</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }} md={6}>
                    <Card.Img variant="top" src="./assets/BB.png" />
                    <Card.Body>
                        <Card.Title>Budget Buddy</Card.Title>
                        <Card.Text>
                            Web application to manage finances.
                        </Card.Text>
                        <Button variant="primary" href="https://budget-buddy.herokuapp.com/">View Project</Button>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card style={{ width: '100%' }} md={6}>
                    <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
                    <Card.Body>
                        <Card.Title>Receiplease</Card.Title>
                        <Card.Text>
                            Web Application used to look up new recipes for food and drinks.
                        </Card.Text>
                        <Button variant="primary" href="#">View Project</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }} md={6}>
                    <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
                    <Card.Body>
                        <Card.Title>Password generator</Card.Title>
                        <Card.Text>
                            Project used to create a random generated password based off the users criteria
                        </Card.Text>
                        <Button variant="primary" href="#">View Project</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}
