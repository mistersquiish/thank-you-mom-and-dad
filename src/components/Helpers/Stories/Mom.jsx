import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../../LanguageConstant';
import Closing from './Closing';
import mapOfZhaoqing from '../../../images/map-of-Zhaoqing.png';
import littleRedBook from '../../../images/little-red-book.png';
import poachedChicken from '../../../images/poached-chicken.png';
import uncle from '../../../images/uncle.png';
import tiananmenSquare from '../../../images/tiananmen-square.png';
import vancouver from '../../../images/vancouver.png';

const content = {
  intro: {},
  p1: {},
  p1ImageText: {},
  p2: {},
  p2ImageText1: {},
  p2ImageText2: {},
  p3: {},
  p3ImageText: {},
  p4: {},
  p4ImageText: {},
  p5: {},
  p5ImageText: {},
  conclusion: {},
};

content["intro"][Language.English] = "The year 1966...";
content["intro"][Language.Spanish] = "El ano 1961...";
content["intro"][Language.Chinese] = "...";

content["p1"][Language.English] = "I was born in Guangdong, China. Under the communist system, workers were given a strict wage of about 420 Yuan a year (about $18,000 in US dollars today) as was the typical communist labor system. Property ownership was essentially non-existent, and there was no economic mobility. I even witnessed my mother taken into a correction camp for brainwashing. In 1978, China opened its borders and allowed its citizens to immigrate to Hong Kong. I was 12 at the time and didn't really understand why my parents were so persistent on moving. It wasn't until later that I realized my parent's hard-earned wealth had been taken by the Chinese government. Alas, Hong Kong became my new home.";
content["p1"][Language.Spanish] = "___";
content["p1"][Language.Chinese] = "___";

content["p1ImageText"][Language.English] = "Map of the Guangdong region, China";
content["p1ImageText"][Language.Spanish] = "__";
content["p1ImageText"][Language.Chinese] = "___";

content["p2"][Language.English] = "The move to Hong Kong was abrupt, but familiar. School was largely the same except I no longer had to study the Little Red Book: 'Quotations from Chairman Mao Tse-tung'. In China, the government heavily regulated everything. Every person would be allocated a voucher giving them permission to purchase essential items (meat, oil). Meanwhile in Hong Kong, I could just walk to the market and get my favorite meal- steamed chicken with ginger scallion oil.";
content["p2"][Language.Spanish] = "__";
content["p2"][Language.Chinese] = "___";

content["p2ImageText1"][Language.English] = "Infamous 'Little Red Book'";
content["p2ImageText1"][Language.Spanish] = "__";
content["p2ImageText1"][Language.Chinese] = "___";

content["p2ImageText2"][Language.English] = "Cantonese Poached Chicken";
content["p2ImageText2"][Language.Spanish] = "__";
content["p2ImageText2"][Language.Chinese] = "___";

content["p3"][Language.English] = "Immigrating to Hong Kong meant starting over with little money. We couldn't afford daycare for my baby brother, so I had to raise and feed him for most of my teenage years. I cooked steamed buns at 4:00 in the morning for my parent's food stall, attended school after, and in the evenings would help my parents again. I couldn't even afford the end of school year field trips and would tell my classmates I was busy that day to my embarrassment. My habitual consisted of a simple room no larger than an average bedroom that slept me and six other family members. I dropped out of secondary school, and worked with my parents and eventually at a factory. I would have loved to stay in school, but I couldn't. Money was especially tight and raising my younger brother was a responsibility I had.";
content["p3"][Language.Spanish] = "___";
content["p3"][Language.Chinese] = "___";

content["p3ImageText"][Language.English] = "Picture of my brother (passed away in 1990 at the young age of 13)";
content["p3ImageText"][Language.Spanish] = "__";
content["p3ImageText"][Language.Chinese] = "___";

content["p4"][Language.English] = "In 1988, my father told me there were more opportunities and freedoms than in China and Hong Kong. On June 4th 1989 Tiananmen Square in Beijing, Chinese troops shot and killed many (estimates vary from several hundred to several thousand) student protestors who were protesting the slow pace of reform. Hong Kong acts as an autonomous region within China and therefore lacked any type of censorship by the Chinese Communist Party. I learned about the events immediately on the news. I was shocked by the events and the very next day my friends, and I went to protest the CCP on Hennessy Road.";
content["p4"][Language.Spanish] = "___";
content["p4"][Language.Chinese] = "___";

content["p4ImageText"][Language.English] = "\'Tank Man\' taken at Tiananmen Square";
content["p4ImageText"][Language.Spanish] = "__";
content["p4ImageText"][Language.Chinese] = "___";

content["p5"][Language.English] = "I booked a round trip ticket to Seattle, Washington in 1990, mainly to visit family. As I contemplated returning back to China, I decided to apply for my papers and stay. A friend of mine told me of the city of Laredo. It was a city that was growing fast, and the proximity to Mexico made for many business opportunities. In 1991, I came to Laredo. I enrolled in a course in Laredo Community College to learn English and began work at a toy store downtown. I eventually met the most hardworking, thoughtful, and entertaining person in the world- my husband.";
content["p5"][Language.Spanish] = "___";
content["p5"][Language.Chinese] = "___";

content["p5ImageText"][Language.English] = "Vancouver (May 5th, 1993)";
content["p5ImageText"][Language.Spanish] = "__";
content["p5ImageText"][Language.Chinese] = "___";

content["conclusion"][Language.English] = "As I think back to my upbringing, I can't help but be tearful for the struggle and poverty that I had to endure. I had a mostly unloving father, and I vowed to never let those feelings of unhappiness reach my children. The only thing I ever wanted was for my children to have a better life than mine. I've done the best I can to instill love and encouragement to my children, and I know they can see that.";
content["conclusion"][Language.Spanish] = "__";
content["conclusion"][Language.Chinese] = "___";

const Mom = ({lang}) => {
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
    <div>
      <section id="mom">
        <Container>

            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <div class="story-section">
                <div class="text-section">
                  <p>
                    {content.intro[lang]}
                  </p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p1[lang]}
                  </p>
                </div>

                <div class="image-single-container">
                  <img src={mapOfZhaoqing} className="img-large"/>
                  <p>{content.p1ImageText[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p2[lang]}
                  </p>
                </div>

                <div class="image-double-container">
                  <div class="image-double-bottom">
                    <img src={littleRedBook}/>
                    <p>{content.p2ImageText1[lang]}</p>
                  </div>
                  <div class="image-double-top">
                    <p>{content.p2ImageText2[lang]}</p>
                    <img src={poachedChicken}/>
                  </div>
                </div>

                <div class="text-section">
                  <p>
                    {content.p3[lang]}
                  </p>
                </div>

                <div class="image-single-container">
                  <img src={uncle} className="img-mid"/>
                  <p>{content.p3ImageText[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p4[lang]}
                  </p>
                </div>

                <div class="image-single-container">
                  <img src={tiananmenSquare} className="img-large"/>
                  <p>{content.p4ImageText[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p5[lang]}
                  </p>
                </div>

                <div class="image-single-container">
                  <img src={vancouver} className="img-large"/>
                  <p>{content.p5ImageText[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.conclusion[lang]}
                  </p>
                </div>

              </div>
            </Fade>
        </Container>
      </section>
      <Closing lang={lang}/>
    </div>
  );
};

export default Mom;
