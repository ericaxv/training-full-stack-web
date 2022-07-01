import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
  backgroundColor: 'black',
  textAlign: 'center'

};

const Header = (props) => {
  const { title } = props;
  return (
    <Navbar style={navbarStyle} variant="dark">
      <Container >
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>);
};


export default Header;
