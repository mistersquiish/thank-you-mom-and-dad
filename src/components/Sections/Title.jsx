import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import useSound from 'use-sound';
import Header from '../Helpers/Header';
import { pictures } from '../Pictures';
import soundIcon from '../../images/sound-icon.png';
import deMp3 from '../../audio/de.mp3';
import maMp3 from '../../audio/ma.mp3';
import Picture from '../Helpers/Picture';

const content = {
  title: {
    en: "Maa and De",
    zh: "妈 和 爸",
    es: "Maa y De",
    vi: "Maa và De", 
  },
  translationMa: {
    en: "mom; mother",
    zh: "妈; 母亲",
    es: "mamá; madre",
    vi: "mẹ", 
  },
  translationDe: {
    en: "dad; father",
    zh: "爸; 父亲",
    es: "papá; padre",
    vi: "cha", 
  },
};

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
                <div id="title-picture">
                  <Picture picture={pictures.titlePicture} />
                </div>
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
