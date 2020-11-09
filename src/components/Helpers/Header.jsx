import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { pictures } from '../Pictures';
import Picture from './Picture';

const Header = () => {

  return (
    <header className="header">
      <Container>
        <Row className="justify-content-center">
          <hr />
          <div id="logo-container">
            <Picture picture={pictures.logo} />
          </div>
          <hr />
        </Row>
        
        

        
      </Container>
    </header>
  );
};

export default Header;
