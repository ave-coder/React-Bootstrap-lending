import React, { Component } from "react";
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Card className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cs6.pikabu.ru/avatars/43/x43893-1120683787.png"
                            />

                            <Card.Body>
                                <h5>Пост</h5>
                                <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley a type specimen book. </p>
                            </Card.Body>
                        </Card >
                        <Card className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cs6.pikabu.ru/avatars/43/x43893-1120683787.png"
                            />

                            <Card.Body>
                                <h5>Пост</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley a type specimen book. </p>
                            </Card.Body>
                        </Card >
                        <Card className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cs6.pikabu.ru/avatars/43/x43893-1120683787.png"
                            />

                            <Card.Body>
                                <h5>Пост</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley a type specimen book. </p>
                            </Card.Body>
                        </Card >
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Категории</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-5 bg-light">
                            <Card.Body>
                                <Card.Title>Виджет</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley a type specimen book.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );

    }
}