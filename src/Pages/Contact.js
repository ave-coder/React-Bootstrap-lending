import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class Contact extends Component {
    render() {
        return (
            <Container style={{ width: "500px" }}>
                <h1 className="text-center">Свяжитесь с нами</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Введите свой email" />
                    </Form.Group>
                    <Form.Text>
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    </Form.Text>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example</Form.Label>
                        <Form.Control type="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Отправить</Button>
                </Form>
            </Container>
        );

    }
}