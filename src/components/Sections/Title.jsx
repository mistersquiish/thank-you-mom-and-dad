import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import useSound from 'use-sound';
import Header from '../Helpers/Header';
import { Language } from '../LanguageConstant';
import titlePicture from '../../images/foreword-picture.jpg';
import soundIcon from '../../images/sound-icon.png';
import deMp3 from '../../audio/de.mp3';
import maMp3 from '../../audio/ma.mp3';

const content = {
  title: {},
  pictureInfo: {},
};

content["title"][Language.English] = "Ma and De";
content["title"][Language.Spanish] = "Ma y De";
content["title"][Language.Chinese] = "妈 和 爸";

content["pictureInfo"][Language.English] = "Ma and De (1929)";
content["pictureInfo"][Language.Spanish] = "Ma y De (1929)";
content["pictureInfo"][Language.Chinese] = "妈和爸 (1929)";

function Title(lang) {
  
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

  const volume = .2
  const [playMa] = useSound(maMp3, { volume: volume });
  const [playDe] = useSound(deMp3, { volume: volume - .1 });

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
            <div className="definition-container">
              <div className="definition">
                <button className="audio-button" onClick={() => playMa()} >
                  <img src={soundIcon} className="sound-icon" />
                </button>

                <p>
                  Maa₁ - mom; mother
                </p>
              </div>

              <div className="definition">
                <button className="audio-button" onClick={() => playDe()} >
                  <img src={soundIcon} className="sound-icon" />
                </button>
                <p>
                  De₁ - dad; father
                </p>
              </div>
            </div>
          </div>
        </Fade>

      </div>

    </section>
  );
};

export default Title;
