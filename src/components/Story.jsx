import React, { useContext, useState, useEffect } from 'react';
import { Container, Card, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from './LanguageConstant';
import logo from '../images/logoHeader.png'

export const Parent = Object.freeze({"Mom":"mom", "Dad":"dad"});

const content = {
  title: {},
  momLabel: {},
  dadLabel: {}
};
content["title"][Language.English] = "Their Story";
content["title"][Language.Spanish] = "Sus Cuenta";
content["title"][Language.Chinese] = "前言";

content["momLabel"][Language.English] = "Mom";
content["momLabel"][Language.Spanish] = "Mamá";
content["momLabel"][Language.Chinese] = "妈妈";

content["dadLabel"][Language.English] = "Dad";
content["dadLabel"][Language.Spanish] = "Papá";
content["dadLabel"][Language.Chinese] = "爸爸";

const unselectedStyle = {
  opacity: .2,
}

const selectedStyle = {
  opacity: 1
}

const Story = (p) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [parent, setParent] = useState("");

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const dadCardStyle = {
    opacity: (parent == Parent.Dad ? 1 : (.5))
  }

  const momCardStyle = {
    opacity: (parent == Parent.Mom ? 1 : (.5))
  }

  return (
    <section id="story">
      <Container>
        <div className="story-wrapper">
          <Fade bottom duration={1000} delay={300} distance="0px">
            <h2 className="section-title">
              {content.title[p.lang]}
            </h2>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">

            <Row className="justify-content-center">
                <Button variant="light" style={momCardStyle} className="story-card" onClick={() => setParent(Parent.Mom)}>
                  <Card>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                      <Card.Title>{content.momLabel[p.lang]}</Card.Title>
                    </Card.Body>
                    
                  </Card>
                </Button>
              
              <Button variant="light" style={dadCardStyle}className="story-card" onClick={() => setParent(Parent.Dad)}>
                <Card>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>{content.dadLabel[p.lang]}</Card.Title>
                  </Card.Body>
                </Card>
              </Button>
            </Row>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Story;
