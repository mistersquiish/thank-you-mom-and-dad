import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../../LanguageConstant';
import Closing from './Closing';

const content = {
  intro: {
    en: "The year 1966...",
    zh: "1966年...",
    es: "El año 1961...",
    vi: "Năm 1966", 
  },
  p1: {
    en: "I was born in Zhaoqing, China. Under the communist labor system, workers were given a strict wage of about 420 Yuan a year (about $18,000 in US dollars today). Property ownership was virtually non-existent and economic mobility was all but unattainable. Individual rights taken for granted in the US were sparse under party rule. Speaking out of line would yield the consequence of public shaming on the streets and moreover the possibility of being taken to re-education camps, an experience my grandmother knew all too well.",
    zh: "",
    es: "",
    vi: "", 
  },
  p2: {
    en: "In 1978, China opened its borders and allowed its citizens to immigrate to Hong Kong. I was 12 at the time and didn't really understand why my parents were so adamant on moving. After all, leaving China meant leaving behind government provided benefits like public housing and food stamps and a great deal of familiarity with the community around us. It wasn’t until later in life that I realized the difficulties my parents had to endure at the hands of the state. The expropriation of their hard-earned wealth was but an example epitomizing the hardship they had to go through.",
    zh: "",
    es: "",
    vi: "", 
  },
  p3: {
    en: "Even in retrospect, the decision my parents had to make continues to feel like an impossible quandary. I’m still unsure I would have the resolve to take the leap of faith they took. To them the dichotomy was clear: stay in China forever stagnant with no chance of economic mobility or struggle to live in Hong Kong.",
    zh: "",
    es: "",
    vi: "", 
  },
  p4: {
    en: "The move to Hong Kong was abrupt, but familiar. School was largely the same with the major distinction of no longer having to study the Little Red Book: 'Quotations from Chairman Mao Tse-tung'. Nevertheless, everyday life in Hong Kong brought some major changes. In China, the government heavily regulated everything. Every family would be allocated a voucher giving them permission to purchase essential items (meat, oil). Meanwhile Hong Kong brought a wider degree of freedom. There one could simply walk to the market and purchase a meal.",
    zh: "",
    es: "",
    vi: "", 
  },
  p5: {
    en: "Perhaps most importantly, immigrating to Hong Kong meant starting over with little money. We couldn't afford daycare for my baby brother, so I had to raise and feed him for most of my teenage years. A typical day began by cooking steamed buns at 4:00am for my parent's food stall, attending school, and later in the evenings returning to help my parents. Financial hardship meant I couldn’t afford end of school year field trips. When explaining my absence, I would often find myself hiding a sense of embarrassment while telling my classmates I was busy that day. My living arrangements consisted of a simple room, no larger than an average bedroom, that accommodated me and six other family members. I eventually dropped out of secondary school and moved to working with my parents and later at a factory. I was too poor to go to school, but I also never had the time. Money was especially tight and raising my younger brother was a responsibility I had. It still hurts me to this day to have been told I was too poor to study and not have been given a chance.",
    zh: "",
    es: "",
    vi: "", 
  },
  p6: {
    en: "During my time in China, I remember my father being a sweet and kind person to my family and me. He would take me out to the ___. This all changed when we moved to Hong Kong. He became increasingly cold and isolated from my family and me. This shift became more apparent in his everyday actions. Although we had enough money to purchase normal food, my father would deliberately wait until the market closed to purchase scraps and leftovers at a discount. He would pocket the savings, never once giving back to the family. When I asked for help buying a textbook, my father was quick to scold me for even daring to raise the matter. I took these interactions to heart, it was like he didn't care about me and wished I’d just go away. To feel completely forgotten and unwanted by a parent was so demoralizing that I often wished we’d never left communist China.",
    zh: "",
    es: "",
    vi: "", 
  },
  p7: {
    en: "On June 4th 1989 the Tiananmen Square massacre happened in Beijing. Chinese troops shot and killed many (estimates vary from several hundred to several thousand) student protestors who were protesting the slow pace of reform. Although  China had made great strides in economic reform, many democratic issues lagged behind. Reducing corruption, freedom of speech, and freedom of press were some of the demands that the protestors wanted.",
    zh: "",
    es: "",
    vi: "", 
  },
  p8: {
    en: "On June 4th 1989 the Tiananmen Square massacre happened in Beijing. Chinese troops shot and killed many (estimates vary from several hundred to several thousand) student protestors who were protesting the slow pace of reform. Although  China had made great strides in economic reform, many democratic issues lagged behind. Reducing corruption, freedom of speech, and freedom of press were some of the demands that the protestors wanted. Hong Kong acts as an autonomous region within China and therefore lacked any type of censorship by the Chinese Communist Party.",
    zh: "",
    es: "",
    vi: "", 
  },
  p9: {
    en: "In 1988, my mother told me there were more opportunities and freedoms beyond China and Hong Kong. In 1990, I booked a round trip ticket to Seattle, Washington mainly to visit family. After contemplating returning back to China, I decided to apply to immigrate and stay. A friend of mine told me about the city of Laredo. I was told it was a fast growing city with many business opportunities thanks to its proximity to Mexico. In 1991, I came to Laredo. I enrolled in a course in Laredo Community College to learn English and began work at a toy store downtown. I eventually met the most hardworking, caring, and easygoing person in the world— my husband.",
    zh: "",
    es: "",
    vi: "", 
  },
  conclusion: {
    en: "As I think back to my upbringing, I can't help but be tearful for the struggle and poverty that I had to endure. The experience of having a mostly unloving father made me vow to never let those feelings of unhappiness reach my children. The only thing I’ve ever wanted is for my children to have a better life than mine. I don't want my children to ever let their future be decided by anybody other than themselves. Despite everything I’ve gone through, I would do it all again for my amazing husband and beautiful children.",
    zh: "",
    es: "",
    vi: "", 
  },
};

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
                    {content.p3[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.uncle.img} className="img-large"/>
                  <p>{pictures.uncle.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p4[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.schoolPicture.img} className="img-mid"/>
                  <p>{pictures.schoolPicture.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p5[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.momWork.img} className="img-mid"/>
                  <p>{pictures.momWork.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p6[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.momCool.img} className="img-mid"/>
                  <p>{pictures.momCool.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p7[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.tiananmenSquare.img} className="img-mid"/>
                  <p>{pictures.tiananmenSquare.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p8[lang]}
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
                    {content.p9[lang]}
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
        <Closing lang={lang}/>
      </section>
    </div>
  );
};

export default Mom;
