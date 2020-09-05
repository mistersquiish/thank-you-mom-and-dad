import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Header from '../Helpers/Header';
import Envelop from '../Helpers/Envelop';
import { Language } from '../LanguageConstant';

const content = {
  message: {},
  thankyou: {}
};
content["message"][Language.English] = "To my incredible parents who overcame poverty, adversity, and uncertainty to give a better life for their children";
content["message"][Language.Spanish] = "Para mis padres increibles quien superaban pobreza, adversidad y incertidumbre para les dan una vida mejor para a sus hijos";
content["message"][Language.Chinese] = "对于那些克服贫困，逆境和不确定性为孩子们过上更好生活的不可思议的父母";

content["thankyou"][Language.English] = "―Thank you";
content["thankyou"][Language.Spanish] = "―Gracias mucho";
content["thankyou"][Language.Chinese] = "―谢谢";

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
      
      <Container className="justify-content-center content-container">
        <Header />
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="letter">
            <h1 className='message-wrapper'>
              {content.message[p.lang]}
              <br/>
              {content.thankyou[p.lang]}
            </h1>
          </div>
          <Envelop />
        </Fade>
      </Container>

    </section>
  );
};

export default Title;
