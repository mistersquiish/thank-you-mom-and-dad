import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../../LanguageConstant';

const content = {
  story: {}
};

content["story"][Language.English] = "It was around the year 1961...";
content["story"][Language.Spanish] = "Es el ano sobre 1961...";
content["story"][Language.Chinese] = "关于一个故事...";

const Mom = (p) => {
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
    <section id="mom">
      <Container>

          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            {content.story[p.lang]}
          </Fade>
      </Container>
    </section>
  );
};

export default Mom;
