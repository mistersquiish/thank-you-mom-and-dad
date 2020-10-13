import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../../LanguageConstant';
import { pictures } from '../../Pictures';

const content = {
  title: {
    en: "Closing",
    zh: "结论",
    es: "Conclusión",
    vi: "Phần kết luận", 
  },
  thankYou: {
    en: "Thank you for taking the time to read my parent's story. Special thanks to these awesome people who helped.",
    zh: "感谢您抽出宝贵的时间阅读我父母的故事.",
    es: "Gracias por tomarse el tiempo de leer la historia de mis padres.",
    vi: "Cảm ơn bạn đã dành thời gian đọc câu chuyện của bố mẹ tôi.", 
  },
  leo: {
    en: "Leo G. —— Helped improve the writing style and structure.",
    zh: "",
    es: "",
    vi: "",
  },
};

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
          <Fade bottom duration={1000} delay={300} distance="0px">
            <h2 className="section-title">
              {content.title[lang]}
            </h2>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <p>
              {content.thankYou[lang]}
            </p>
            <p>
              {content.leo[lang]}
            </p>
            <div className="image-container">
              <img id="closing-picture" src={pictures.closingPicture.img}/>
              <p>{pictures.closingPicture.caption[lang]}</p>
            </div>
            
            
          </Fade>
      </Container>
    </section>
  );
};

export default Closing;
