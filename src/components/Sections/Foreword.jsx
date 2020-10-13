import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../LanguageConstant';
import { pictures } from '../Pictures';

const content = {
  title: {
    en: "Foreword",
    zh: "前言",
    es: "Prefacio",
    vi: "", 
  },
  message1: {
    en: "Ma and De. It's what I call the two people who inspire me most. They're the ones who taught me to always aim higher. They're the ones who would make sure my siblings and I were never hungry by bringing us a tray of fruit or a bowl of fried rice. They're the ones who would stay up late helping me finish a school project or homework. They're the ones who would volunteer to sleep on the hotel room floor if there weren't enough bed. They're the ones who would support me for everything I did. The word \"love\" isn't really a word my family used, but love manifests in nearly everything my parents do. I love you Ma and De as much as De loves Heineken.",
    zh: "",
    es: "",
    vi: "", 
  },
  message2: {
    en: "This website is dedicated not just to my two amazing parents, but two immigrants who courageously left everything behind in search of better opportunity. Immigrants like my parents shouldn't be demonized as criminals or freeloaders. They are the hard-working, ambitious, and good people that truly embody the American dream. From escaping communism in Vietnam and the authoritarian regime in China, my parent's journey to America was not without hardship and uncertainty. I wanted to document their story and honor their sacrifice.",
    zh: "",
    es: "",
    vi: "", 
  },
  message3: {
    en: "I found my parent's story extremely moving and captivating, so I have translated their story to reach a wider audience (simply click on the bottom right icon to change languages).",
    zh: "",
    es: "",
    vi: "", 
  },
};

const Foreword = ({lang}) => {
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
    <section id="foreword">
      <Container>
          <Fade bottom duration={1000} delay={300} distance="0px">
            <h2 className="section-title">
              {content.title[lang]}
            </h2>
          </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <p>
                {content.message1[lang]}
                <br /><br />
                {content.message2[lang]}
                <br /><br />
                {content.message3[lang]}
              </p>
              <div className="image-container">
                <img id="foreword-picture" src={pictures.forewordPicture.img}/>
                <p>{pictures.forewordPicture.caption[lang]}</p>
              </div>
              
              
            </Fade>
      </Container>
    </section>
  );
};

export default Foreword;
