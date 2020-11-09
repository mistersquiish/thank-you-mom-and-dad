import React, { useContext, useState, useEffect } from 'react';
import { Container, Card, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Dad from '../Helpers/Stories/Dad';
import Mom from '../Helpers/Stories/Mom';
import StoryCard from '../Helpers/StoryCard';
import { picturesMom } from '../Pictures-Mom';
import { picturesDad } from '../Pictures-Dad';
import Picture from '../Helpers/Picture';

export const Parent = Object.freeze({"Mom":"mom", "Dad":"dad"});

const content = {
  title: {
    en: "Their Story",
    zh: "前言",
    es: "Su Historia",
    vi: "Câu chuyện của họ", 
  },
  momLabel: {
    en: "Mom",
    zh: "妈妈",
    es: "Mamá",
    vi: "Mẹ", 
  },
  dadLabel: {
    en: "Dad",
    zh: "爸爸",
    es: "Papá",
    vi: "Cha", 
  },
  disclaimer: {
    en: "(Their story is written by me but from their perspective. Their story has been recited back to them to ensure authenticity)",
    zh: "(他们的故事是我写的，但从他们的角度看. 为了确保真实性，他们的故事被引用给他们)",
    es: "(Su historia está escrita por mí, pero desde su perspectiva. Su historia les ha sido recitada para asegurar su autenticidad)",
    vi: "(Câu chuyện của họ do tôi viết nhưng dưới góc nhìn của họ. Câu chuyện của họ đã được kể lại cho họ để đảm bảo tính xác thực)", 
  },
};

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
      return <Dad lang={lang} pictures={picturesDad}/>;
    } else if (parent == Parent.Mom) {
      return <Mom lang={lang} pictures={picturesMom}/>;
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
          {currentStory()}
        </Fade>

      </Container>
    </section>
  );
};

export default Story;
