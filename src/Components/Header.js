import React, { Component } from "react";
import { Button, FormControl, Nav, Navbar, Container, Form, NavLink, NavbarBrand } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo192.png'

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Главная
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/blog">Блог</Nav.Link>
                                <Nav.Link href="/about">О нас</Nav.Link>
                                <Nav.Link href="/contact">Контакты</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder="введите текст"
                                    className="me-2"
                                />
                                <Button variant="outline-info">Найти</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/blog" element={<Blog />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}