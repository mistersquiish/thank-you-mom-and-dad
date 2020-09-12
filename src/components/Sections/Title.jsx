import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Header from '../Helpers/Header';
import Envelop from '../Helpers/Envelop';


const Title = ({lang}) => {
  
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="title">
      
      <Container className="content-container">
        <Header />
        
        <div className="envelope-container">
          {/* <div className="envelope-container"> */}
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <Envelop lang={lang}/>
          </Fade>
          {/* </div> */}
        </div>

      </Container>

    </section>
  );
};

export default Title;
