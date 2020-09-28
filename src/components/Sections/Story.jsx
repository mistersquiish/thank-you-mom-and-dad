import React, { useContext, useState, useEffect } from 'react';
import { Container, Card, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../LanguageConstant';
import Dad from '../Helpers/Stories/Dad';
import Mom from '../Helpers/Stories/Mom';
import StoryCard from '../Helpers/StoryCard';

export const Parent = Object.freeze({"Mom":"mom", "Dad":"dad"});

const content = {
  title: {},
  momLabel: {},
  dadLabel: {},
  disclaimer: {},
};
content["title"][Language.English] = "Their Story";
content["title"][Language.Spanish] = "Sus Cuenta";
content["title"][Language.Chinese] = "前言";
content["title"][Language.Vietnamese] = "...";

content["momLabel"][Language.English] = "Mom";
content["momLabel"][Language.Spanish] = "Mamá";
content["momLabel"][Language.Chinese] = "妈妈";
content["momLabel"][Language.Vietnamese] = "...";

content["dadLabel"][Language.English] = "Dad";
content["dadLabel"][Language.Spanish] = "Papá";
content["dadLabel"][Language.Chinese] = "爸爸";
content["dadLabel"][Language.Vietnamese] = "...";

content["disclaimer"][Language.English] = "(Their stories are told are written from their perspective but have been recited back to my parents to ensure authenticity)";
content["disclaimer"][Language.Spanish] = "__";
content["disclaimer"][Language.Chinese] = "__";
content["disclaimer"][Language.Vietnamese] = "...";

const unselectedStyle = {
  opacity: .2,
}

const selectedStyle = {
  opacity: 1
}

const Story = ({lang}) => {
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

  function currentStory() {
    if (parent == Parent.Dad) {
      return <Dad lang={lang}/>;
    } else if (parent == Parent.Mom) {
      return <Mom lang={lang}/>;
    } else {
      return <div>{undefined}</div>;
    }
  }

  return (
    <section id="story">
      <Container>
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="section-title">
            {content.title[lang]}
          </h2>
        </Fade>
        <div className="story-card-container">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            
            <Row className="justify-content-center">
              <StoryCard style={momCardStyle} isMom={true} lang={lang} onClick={() => setParent(Parent.Mom)} instructions={false}/>
              <StoryCard style={dadCardStyle} isDad={true} lang={lang} onClick={() => setParent(Parent.Dad)} instructions={true}/>
              
              
            </Row>
            
          </Fade>
        </div>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">

          <div id="disclaimer-container">
            <p>
              <b>{content.disclaimer[lang]}</b>
            </p>
          </div>
          {/* Story */}
          {currentStory()}
        </Fade>

      </Container>
    </section>
  );
};

export default Story;
