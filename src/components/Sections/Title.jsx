import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Helpers/Header';
import { Language } from '../LanguageConstant';
import titlePicture from '../../images/foreword-picture.jpg'

const content = {
  title: {},
  pictureInfo: {},
};

content["title"][Language.English] = "Ma and Ba";
content["title"][Language.Spanish] = "Ma y Ba";
content["title"][Language.Chinese] = "妈 和 爸";

content["pictureInfo"][Language.English] = "Ma and Ba (1929)";
content["pictureInfo"][Language.Spanish] = "Ma y Ba (1929)";
content["pictureInfo"][Language.Chinese] = "妈和爸 (1929)";

const Title = ({lang}) => {
  
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
      
      <div className="content-container">
        <Header />
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="title-container">
            <h1>{content.title[lang]}</h1>
            <div className="image-container">
                <img id="title-picture" src={titlePicture}  alt={'title-picture'}/>
                <p>{content.pictureInfo[lang]}</p>
              </div>
          </div>
        </Fade>

      </div>

    </section>
  );
};

export default Title;
