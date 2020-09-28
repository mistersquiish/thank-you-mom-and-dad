import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../../LanguageConstant';
import closingPicture from '../../../images/closing-picture.png'

const content = {
  thankYou: {},
  pictureInfo: {},
};
content["thankYou"][Language.English] = "Thank you for taking the time to read my parent's story.";
content["thankYou"][Language.Spanish] = "__";
content["thankYou"][Language.Chinese] = "__";
content["thankYou"][Language.Vietnamese] = "...";

content["pictureInfo"][Language.English] = "My sister's graduation (May, 2019)";
content["pictureInfo"][Language.Spanish] = "__";
content["pictureInfo"][Language.Chinese] = "__";
content["pictureInfo"][Language.Vietnamese] = "...";

const Closing = ({lang}) => {
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
    <section id="closing">
      <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <p>
              {content.thankYou[lang]}
            </p>
            <div className="image-container">
              <img id="closing-picture" src={closingPicture}/>
              <p>{content.pictureInfo[lang]}</p>
            </div>
            
            
          </Fade>
      </Container>
    </section>
  );
};

export default Closing;
