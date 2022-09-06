import React, { Component } from "react";
import CarouselBox from '../Components/СarouselBox'
import { Container, CardGroup, Card, Button } from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />

                <Container>
                    <h2 className="text-center m-4">Наша команда</h2>
                    <CardGroup className="m-4">
                        <Card className="bg-light" >
                            <Card.Img
                                variant="top"
                                src="https://www.naveocommerce.com/wp-content/uploads/2020/09/Talk_to_Us_istock_1800.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    LoremLoremLoremLoreLoremLoremLorem
                                    LoremLoremLoremLoremLorem
                                </Card.Text>
                                <Button variant="primary">Подробнее</Button>
                            </Card.Body>
                        </Card>
                        <Card className="bg-light" >
                            <Card.Img
                                variant="top"
                                src="https://blog.rubrain.com/wp-content/uploads/2021/08/1-3.png"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    LoremLoremLoremLoreLoremLoremLorem
                                    LoremLoremLoremLoremLorem
                                </Card.Text>
                                <Button variant="primary">Подробнее</Button>
                            </Card.Body>
                        </Card>
                        <Card className="bg-light" >
                            <Card.Img
                                variant="top"
                                src="https://portal.andina.pe/EDPfotografia3/Thumbnail/2018/07/18/000518909W.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    LoremLoremLoremLoreLoremLoremLorem
                                    LoremLoremLoremLoremLorem
                                </Card.Text>
                                <Button variant="primary">Подробнее</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        );

    }
}

