import React, { Component } from "react";
import { Container, Nav, Row, Col, Tab } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-3">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Дизайн</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Комната</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Работа</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Команда</Nav.Link>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">Отзывы</Nav.Link>
                                    </Nav.Item>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://volgakeramika-nn.ru/wp-content/uploads/2020/11/Dekorativnye-shtukaturki-trendy-202021-1.png" />
                                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://cdn.inmyroom.ru/uploads/post/teaser/db/dbc0/dbc0ff7e-7d6f-4cc7-926b-7b289dce8948.jpg" />
                                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://avatars.mds.yandex.net/get-zen_doc/3994559/pub_5fe7445c9c06f6134f910c32_5fe744d4e5cdbc6a960a7ce8/scale_1200" />
                                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://stroikairemont.com/wp-content/uploads/2016/08/varianty-brutalnogo-interera-1.png" />
                                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://worldofwood.in/images/bed_lrg.jpg" />
                                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );

    }
}