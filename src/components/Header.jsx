import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../images/logoHeader.png'

const Header = () => {

  return (
    <header className="header">
      <Container>
        <Row className="justify-content-center">
          <hr />
          <img src={logo}  alt={'logo'}/>
          <hr />
        </Row>
        
        

        
      </Container>
    </header>
  );
};

export default Header;
