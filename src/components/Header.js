import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = (props) => {
  const { title } = props;
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>);
};


export default Header;
