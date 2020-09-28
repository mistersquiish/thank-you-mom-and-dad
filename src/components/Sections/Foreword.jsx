import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../LanguageConstant';
import forewordPicture from '../../images/foreword-picture.jpg'

const content = {
  title: {},
  message1: {},
  message2: {},
  message3: {},
  pictureInfo: {},
};
content["title"][Language.English] = "Foreword";
content["title"][Language.Spanish] = "Prefacio";
content["title"][Language.Chinese] = "前言";
content["title"][Language.Vietnamese] = "...";

content["message1"][Language.English] = "Ma and De. It's what I call the two people who inspire me most. They're the ones who taught me to always aim higher. They're the ones who would bring a tray of fruit when my brother and I played video games. They're the ones who brought me Chick-fil-A nuggets (12 count) whenever I was having a bad day in middle school. They're the ones who would give me their salmon sashimi because it was my favorite. They're the ones who would volunteer to sleep on the hotel room floor if there weren't enough bed. The word \"love\" isn't really a word my family used, but love manifests in nearly everything my parents do. I love you Ma and De as much as De loves Heineken.";
content["message1"][Language.Spanish] = "Desde que tengo uso de razón, volvía a casa de la escuela a la comida casera de mi madre, y hacia la noche era recibida por mi padre, que acababa de llegar a casa después de un largo día de trabajo. Yo miraba la televisión o hacía la tarea y mi mamá me regalaba una bandeja con manzanas o peras. Cuando tenía amigos, mi papá, sin dudarlo, ponía carbón en la parrilla y nos preparaba una barbacoa. La cantidad de amor y cuidado que recibí de mis padres es algo que aprecio mucho.";
content["message1"][Language.Chinese] = "因为只要我记得，我就会放学回家，回到妈妈家做的饭，直到傍晚，父亲会在漫长的一天后回家，向我打招呼. 我会看电视或做作业，而妈妈会给我一盘苹果或梨. 当我有朋友过来时，我父亲会毫不犹豫地将煤放在烤架上，然后为我们开始烧烤. 我对父母的爱与关怀是我所珍惜的.";
content["message1"][Language.Vietnamese] = "...";

content["message2"][Language.English] = "This website is dedicated not just to my two amazing parents, but two immigrants who courageously left everything behind in search of better opportunity. Immigrants like my parents shouldn't be demonized as criminals or freeloaders. They are the hard-working, ambitious, and good people that truly embody the American dream. From escaping communism in Vietnam and the authoritarian regime in China, my parent's journey to America was not without hardship and uncertainty. I wanted to document their story and honor their sacrifice.";
content["message2"][Language.Spanish] = "Había estado pensando en este proyecto durante al menos un año, pero no fue hasta Covid-19 cuando realmente tuve tiempo de sentarme y entrevistar a mis padres. Sé que el viaje de mis padres a Estados Unidos estuvo lleno de dificultades e incertidumbre, y quiero documentar y honrar su sacrificio.";
content["message2"][Language.Chinese] = "我一直在考虑这个项目至少一年，但是直到Covid-19才真正有时间坐下来采访我的父母. 我知道我父母的美国之旅充满了艰辛和不确定性，我想记录下来并兑现他们的牺牲.";
content["message2"][Language.Vietnamese] = "...";

content["message3"][Language.English] = "I found my parent's story extremely moving and captivating, so, with the help of friends and family, I have translated their story to reach a wider audience (simply click on the bottom right icon to change languages).";
content["message3"][Language.Spanish] = "Encontré la historia de mis padres extremadamente conmovedora y cautivadora de verdadera perseverancia, así que, con la ayuda de amigos y familiares, he traducido su historia para llegar a una audiencia más amplia (simplemente haga clic en el ícono de abajo a la derecha para cambiar de idioma).";
content["message3"][Language.Chinese] = "我发现我父母的故事非常动人，并充满了真正的毅力，因此，在朋友和家人的帮助下，我已经翻译了他们的故事，以扩大受众范围（只需单击右下角的图标即可更改语言).";
content["message3"][Language.Vietnamese] = "...";

content["pictureInfo"][Language.English] = "Outside the garden of Las Vegas (1959)";
content["pictureInfo"][Language.Spanish] = "Afuera el jardin del Las vegas (1959)";
content["pictureInfo"][Language.Chinese] = "asdf";
content["pictureInfo"][Language.Vietnamese] = "...";

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
                <img id="foreword-picture" src={forewordPicture}  alt={'family-picture'}/>
                <p>{content.pictureInfo[lang]}</p>
              </div>
              
              
            </Fade>
      </Container>
    </section>
  );
};

export default Foreword;
