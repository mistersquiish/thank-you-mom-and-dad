import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../../LanguageConstant';
import Closing from './Closing';

const content = {
  intro: {},
  p1: {},
  p2: {},
  p3: {},
  p4: {},
  p5: {},
  p6: {},
  p7: {},
  p8: {},
  p9: {},
  p10: {},
  conclusion: {},
};

content["intro"][Language.English] = "The year 1966...";
content["intro"][Language.Spanish] = "El ano 1961...";
content["intro"][Language.Chinese] = "...";
content["intro"][Language.Vietnamese] = "...";

content["p1"][Language.English] = "I was born in Zhaoquing, China. Under the communist system, workers were given a strict wage of about 420 Yuan a year (about $18,000 in US dollars today) as was the typical communist labor system. Property ownership was essentially non-existent, and there was no economic mobility. If spoken out of line, as my grandma had done, then they would be taken to re-education camps and publicly shamed on the streets.";
content["p1"][Language.Spanish] = "___";
content["p1"][Language.Chinese] = "___";
content["p1"][Language.Vietnamese] = "...";

content["p2"][Language.English] = "In 1978, China opened its borders and allowed its citizens to immigrate to Hong Kong. I was 12 at the time and didn't really understand why my parents were so persistent in moving. It wasn't until later that I realized my parent's hard-earned wealth had been taken by the Chinese government. However, leaving China meant leaving behind government housing and food stamps and starting completely new. The decision my parents made was a difficult one, and I'm not sure if I would have had the conviction to choose. Stay in China forever stagnant with no chance of economic mobility or struggle to live in Hong Kong. Alas, Hong Kong became my new home.";
content["p2"][Language.Spanish] = "__";
content["p2"][Language.Chinese] = "___";
content["p2"][Language.Vietnamese] = "...";

content["p4"][Language.English] = "The move to Hong Kong was abrupt, but familiar. School was largely the same except I no longer had to study the Little Red Book: 'Quotations from Chairman Mao Tse-tung'. In China, the government heavily regulated everything. Every family would be allocated a voucher giving them permission to purchase essential items (meat, oil). Meanwhile in Hong Kong, I could just walk to the market and get a meal.";
content["p4"][Language.Spanish] = "___";
content["p4"][Language.Chinese] = "___";
content["p4"][Language.Vietnamese] = "...";

content["p5"][Language.English] = "Immigrating to Hong Kong meant starting over with little money. We couldn't afford daycare for my baby brother, so I had to raise and feed him for most of my teenage years. I cooked steamed buns at 4:00am for my parent's food stall, attended school after, and in the evenings would help my parents again. I couldn't even afford the end of school year field trips and would tell my classmates I was simply busy that day to my embarrassment. My habitual consisted of a simple room no larger than an average bedroom that slept me and six other family members.";
content["p5"][Language.Spanish] = "___";
content["p5"][Language.Chinese] = "___";
content["p5"][Language.Vietnamese] = "...";

content["p6"][Language.English] = "During my time in China, I remember my father being a sweet and kind person to my family and me. He would take me out to the ___. However, everything changed when we moved to Hong Kong. He became cold and isolated from my family and me. Even though we had enough money to purchase normal food, my father would deliberately wait until the market closed, so he could purchase the scraps and leftovers at a discount. He pocketed the savings for his own use, never once giving it back to his family. When I wanted to buy an educational book, my father would scold me for just asking. It was like he didn't care about me and wished I would just go away. To be completely forgotten and unwanted by a parent is so demoralizing that I even wish I had stayed in communist China.";
content["p6"][Language.Spanish] = "___";
content["p6"][Language.Chinese] = "___";
content["p6"][Language.Vietnamese] = "...";

content["p7"][Language.English] = "I dropped out of secondary school, and worked with my parents and eventually at a factory. I was too poor to go to school, but I also never had the time. Money was especially tight and raising my younger brother was a responsibility I had. It hurts me even today to not be given a chance and simply told I was too poor to study.";
content["p7"][Language.Spanish] = "___";
content["p7"][Language.Chinese] = "___";
content["p7"][Language.Vietnamese] = "...";

content["p8"][Language.English] = "On June 4th 1989 the Tiananmen Square massacre happened in Beijing. Chinese troops shot and killed many (estimates vary from several hundred to several thousand) student protestors who were protesting the slow pace of reform. Although  China had made great strides in economic reform, many democratic issues lagged behind. Reducing corruption, freedom of speech, and freedom of press were some of the demands that the protestors wanted. Hong Kong acts as an autonomous region within China and therefore lacked any type of censorship by the Chinese Communist Party.";
content["p8"][Language.Spanish] = "___";
content["p8"][Language.Chinese] = "___";
content["p8"][Language.Vietnamese] = "...";

content["p9"][Language.English] = "I learned about the events immediately on the news. I was furious and disgusted by the actions of the CCP, and I could only feel sorrow for the protestors. The next day, I went to protest the CCP on Hennessy Road, a busy road in Hong Kong.";
content["p9"][Language.Spanish] = "___";
content["p9"][Language.Chinese] = "___";
content["p9"][Language.Vietnamese] = "...";

content["p10"][Language.English] = "In 1988, my mother told me there were more opportunities and freedoms than in China and Hong Kong. In 1990, I booked a round trip ticket to Seattle, Washington mainly to visit family. As I contemplated returning back to China, I decided to apply for my papers and stay. A friend of mine told me about the city of Laredo. It was a city that was growing fast, and the proximity to Mexico made for many business opportunities. In 1991, I came to Laredo. I enrolled in a course in Laredo Community College to learn English and began work at a toy store downtown. I eventually met the most hardworking, thoughtful, and entertaining person in the world— my husband.";
content["p10"][Language.Spanish] = "___";
content["p10"][Language.Chinese] = "___";
content["p10"][Language.Vietnamese] = "...";

content["conclusion"][Language.English] = "As I think back to my upbringing, I can't help but be tearful for the struggle and poverty that I had to endure. I had a mostly unloving father, and I vowed to never let those feelings of unhappiness reach my children. The only thing I ever wanted was for my children to have a better life than mine. I don't want my children to ever let their future be decided by anybody other than themselves. I've done the best I can to instill love and encouragement to my children, and I know they can see that.";
content["conclusion"][Language.Spanish] = "__";
content["conclusion"][Language.Chinese] = "___";
content["conclusion"][Language.Vietnamese] = "...";

const Mom = ({lang, pictures}) => {
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
                  <img src={pictures.mapOfZhaoqing.img} className="img-large"/>
                  <p>{pictures.mapOfZhaoqing.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p2[lang]}
                  </p>
                </div>
                <div class="image-double-container">
                  <div class="image-double-bottom">
                    <img src={pictures.littleRedBook.img}/>
                    <p>{pictures.littleRedBook.caption[lang]}</p>
                  </div>
                  <div class="image-double-top">
                    <p>{pictures.momYoung.caption[lang]}</p>
                    <img src={pictures.momYoung.img}/>
                  </div>
                </div>

                <div class="text-section">
                  <p>
                    {content.p4[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.uncle.img} className="img-large"/>
                  <p>{pictures.uncle.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p5[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.schoolPicture.img} className="img-mid"/>
                  <p>{pictures.schoolPicture.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p6[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.momWork.img} className="img-mid"/>
                  <p>{pictures.momWork.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p7[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.momCool.img} className="img-mid"/>
                  <p>{pictures.momCool.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p8[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.tiananmenSquare.img} className="img-mid"/>
                  <p>{pictures.tiananmenSquare.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p9[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.momSunset.img} className="img-mid"/>
                  <p>{pictures.momSunset.caption[lang]}</p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.momSitting.img} className="img-mid"/>
                  <p>{pictures.momSitting.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p10[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.vancouver.img} className="img-mid"/>
                  <p>{pictures.vancouver.caption[lang]}</p>
                </div>
                <div class="image-double-container">
                  <div class="image-double-bottom">
                    <img src={pictures.momDadEating.img}/>
                    <p>{pictures.momDadEating.caption[lang]}</p>
                  </div>
                  <div class="image-double-top">
                    <p>{pictures.momDadHongKong.caption[lang]}</p>
                    <img src={pictures.momDadHongKong.img}/>
                  </div>
                </div>
                <div class="image-single-container">
                  <img src={pictures.familyToystore.img} className="img-large"/>
                  <p>{pictures.familyToystore.caption[lang]}</p>
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
