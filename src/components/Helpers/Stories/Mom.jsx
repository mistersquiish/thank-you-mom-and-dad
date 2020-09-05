import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../../LanguageConstant';

const content = {
  title: {},
  message: {}
};
content["title"][Language.English] = "Foreword";
content["title"][Language.Spanish] = "Prefacio";
content["title"][Language.Chinese] = "前言";

content["message"][Language.English] = "A story about";
content["message"][Language.Spanish] = "Una cuenta sobre";
content["message"][Language.Chinese] = "关于一个故事";

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
    <Container>
      <div className="foreword-wrapper">
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="section-title">
            {content.title[p.lang]}
          </h2>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          {content.message[p.lang]}
        </Fade>
      </div>
    </Container>
  );
};

export default Mom;
