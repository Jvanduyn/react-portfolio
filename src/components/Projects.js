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
                        <Card.Title>Project 1</Card.Title>
                        <Card.Text>
                            I need to add projects here
                        </Card.Text>
                        <Button variant="primary" href="#">View Project</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }} md={6}>
                    <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
                    <Card.Body>
                        <Card.Title>Project 2</Card.Title>
                        <Card.Text>
                            I need to add projects here                        </Card.Text>
                        <Button variant="primary" href="#">View Project</Button>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card style={{ width: '100%' }} md={6}>
                    <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
                    <Card.Body>
                        <Card.Title>Project 3</Card.Title>
                        <Card.Text>
                            I need to add projects here
                        </Card.Text>
                        <Button variant="primary" href="#">View Project</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }} md={6}>
                    <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
                    <Card.Body>
                        <Card.Title>Project 4</Card.Title>
                        <Card.Text>
                            I need to add projects here
                        </Card.Text>
                        <Button variant="primary" href="#">View Project</Button>
                    </Card.Body>
                </Card>
            </Row>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
                <Card.Body>
                    <Card.Title>Project 5</Card.Title>
                    <Card.Text>
                        I need to add projects here
                    </Card.Text>
                    <Button variant="primary" href="#">View Project</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
                <Card.Body>
                    <Card.Title>Project 6</Card.Title>
                    <Card.Text>
                        I need to add projects here
                    </Card.Text>
                    <Button variant="primary" href="#">View Project</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}
