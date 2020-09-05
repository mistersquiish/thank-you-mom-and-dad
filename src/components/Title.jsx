import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import { Language } from './LanguageConstant';

const content = {
  line1: {},
  line2: {},
  line3: {}
};
content["line1"][Language.English] = "To my incredible parents who overcame poverty, adversity, and uncertainty";
content["line1"][Language.Spanish] = "Para mis padres increibles quien superaban pobreza, adversidad y incertidumbre";
content["line1"][Language.Chinese] = "对于那些克服贫困，逆境和不确定性为孩子";

content["line2"][Language.English] = "to give a better life for their children";
content["line2"][Language.Spanish] = "para les dan una vida mejor para a sus hijos";
content["line2"][Language.Chinese] = "们过上更好生活的不可思议的父母";

content["line3"][Language.English] = "―Thank you";
content["line3"][Language.Spanish] = "―Gracias mucho";
content["line3"][Language.Chinese] = "―谢谢";

const Title = (p) => {
  
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
      <Header />
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div>
            <h1 className='message-wrapper'>
              {content.line1[p.lang]}
              <br />
              {content.line2[p.lang]}
              <br/>
              {content.line3[p.lang]}
            </h1>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Title;
