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
    en: "Leo G. —— Helped improve the writing style and structure",
    zh: "Leo G. —— 帮助改善了写作风格和结构",
    es: "Leo G. —— Ayudó a mejorar el estilo y la estructura de la escritura",
    vi: "Leo G. —— Giúp cải thiện cách viết và cấu trúc",
  },
  sister: {
    en: "Jackie —— Being the best sister",
    zh: "Jackie —— 做最好的姐姐",
    es: "Jackie —— Siendo la mejor hermana",
    vi: "Jackie —— Là người chị tốt nhất",
  },
  brother: {
    en: "Raymond —— Being the best brother",
    zh: "Raymond —— 做最好的小弟弟",
    es: "Raymond —— Siendo la mejor hermano",
    vi: "Raymond —— Là người anh tốt nhất",
  },
  josephine: {
    en: "Josephine —— Proofreading Vietnamese translation",
    zh: "Josephine —— 校对越南语翻译",
    es: "Josephine —— Revisión de la traducción al vietnamita",
    vi: "Josephine —— Hiệu đính bản dịch tiếng Việt",
  },
  huang: {
    en: "Dr. Huang —— Proofreading Chinese translation",
    zh: "Dr. Huang —— 校对中文翻译",
    es: "Dr. Huang —— Revisión de la traducción al china",
    vi: "Dr. Huang —— Hiệu đính bản dịch tiếng Trung",
  },
  scott: {
    en: "Scott T. —— Creating the logo",
    zh: "Scott T. —— 创建徽标",
    es: "Scott T. —— Creando el logo",
    vi: "Scott T. —— Tạo logo",
  }
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
            <p>
              {content.huang[lang]}
            </p>
            <p>
              {content.josephine[lang]}
            </p>
            <p>
              {content.scott[lang]}
            </p>
            <p>
              {content.sister[lang]}
            </p>
            <p>
              {content.brother[lang]}
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
