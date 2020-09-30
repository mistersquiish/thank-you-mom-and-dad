import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import useSound from 'use-sound';
import Header from '../Helpers/Header';
import { Language } from '../LanguageConstant';
import { pictures } from '../Pictures';
import soundIcon from '../../images/sound-icon.png';
import deMp3 from '../../audio/de.mp3';
import maMp3 from '../../audio/ma.mp3';

const content = {
  title: {},
  pictureInfo: {},
  translationMa: {},
  translationDe: {},
};

content["title"][Language.English] = "Ma and De";
content["title"][Language.Spanish] = "Ma y De";
content["title"][Language.Chinese] = "妈 和 爸";
content["title"][Language.Vietnamese] = "...";

content["translationMa"][Language.English] = "mom; mother";
content["translationMa"][Language.Spanish] = "mamá; madre";
content["translationMa"][Language.Chinese] = "妈; 母亲";
content["translationMa"][Language.Vietnamese] = "...";

content["translationDe"][Language.English] = "dad; father";
content["translationDe"][Language.Spanish] = "papá; padre";
content["translationDe"][Language.Chinese] = "爸; 父亲";
content["translationDe"][Language.Vietnamese] = "...";

function Title({lang}) {
  
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

  const volume = .1
  const [playMa] = useSound(maMp3, { volume: volume });
  const [playDe] = useSound(deMp3, { volume: volume });

  return (
    <section id="title">
      
      <div className="content-container">
        <Header />
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="title-container">
            <h1>{content.title[lang]}</h1>
            <div className="image-container">
                <img id="title-picture" src={pictures.titlePicture.img}  alt={'title-picture'}/>
                <p>{pictures.titlePicture.caption[lang]}</p>
              </div>
            <div className="definition-container">
              <div className="definition">
                <p>
                  Maa₁
                </p>
                <button className="audio-button" onClick={() => playMa()} >
                  <img src={soundIcon} className="sound-icon" />
                </button>

                <p>
                   - {content.translationMa[lang]}
                </p>
              </div>

              <div className="definition">
                <p>
                  De₁
                </p>
                <button className="audio-button" onClick={() => playDe()} >
                  <img src={soundIcon} className="sound-icon" />
                </button>
                <p>
                   - {content.translationDe[lang]}
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
