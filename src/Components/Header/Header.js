import React, {Component} from 'react';
import { Navbar, Nav, FormControl, Container, Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";

import logo from './logo.svg';
import Home from '../../Pages/Home';
import Charts from '../../Pages/Charts';
import Categories from '../../Pages/Categories';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
                    <Container>
                        <Navbar.Brand className='mr-4' href='/'>
                            <img
                                src={logo}
                                height='30'
                                width='30'
                                className='d-inline-block align-top'
                                alt="Logo"
                            /> Money Tracker
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='/charts'>Charts</Nav.Link>
                                <Nav.Link href='/categories'>Categories</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <HashRouter exact path='/' component={Home} />
                        <HashRouter exact path='/charts' component={Charts} />
                        <HashRouter exact path='/categories' component={Categories} />
                    </Switch>
                </Router>

            </>
        );
    }
}

export default Header;