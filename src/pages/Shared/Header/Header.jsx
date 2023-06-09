import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
           <div className='text-center'>
           <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
           </div>

           <div className='d-flex'>
           <Button variant="danger">Danger</Button>
           <Marquee className='text-danger' speed={100}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
           </div>
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </Container>
       
    );
};

export default Header;