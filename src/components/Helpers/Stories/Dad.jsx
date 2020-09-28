import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../../LanguageConstant';
import Closing from './Closing';
import grandmaGrandpa from '../../../images/grandma-grandpa.png';
import mapOfSaigon from '../../../images/map-of-Saigon.png';
import fragments from '../../../images/fragments.png';
import boat from '../../../images/boat.png';
import immigrationMap from '../../../images/immigration-map.png';
import brotherBoat from '../../../images/brother-boat.png';
import bidong from '../../../images/bidong.png';
import nephew from '../../../images/nephew.png';
import friendlyPekingDuck from '../../../images/friendly-peking-duck.png';
import friendlyPekingDuckLocation from '../../../images/friendly-peking-duck-location.png';

const content = {
  intro: {},
  p1: {},
  p1ImageText1: {},
  p1ImageText2: {},
  p2: {},
  p2ImageText: {},
  p3: {},
  p3ImageText1: {},
  p3ImageText2: {},
  p4: {},
  p4ImageText: {},
  p5: {},
  p5ImageText1: {},
  p5ImageText2: {},
  p6: {},
  p6ImageText: {},
  p7: {},
  p7ImageText: {},
  p8: {},
  p8ImageText1: {},
  p8ImageText2: {},
  p9: {},
  p9ImageText1: {},
  p9ImageText2: {},
  p10: {},
  p10ImageText1: {},
  p10ImageText2: {},
  p11: {},
};

content["intro"][Language.English] = "The year 1959...";
content["intro"][Language.Spanish] = "El ano 1961...";
content["intro"][Language.Chinese] = "...";
content["intro"][Language.Vietnamese] = "...";

content["p1"][Language.English] = "I was born in a village near Saigon right as the Vietnam War was starting to escalate. Life was relatively normal much of my childhood, but everything changed in 1968- the worst year that I could remember. The Viet Cong and North Vietnamese Army attacked Saigon on Tết- Vietnamese New Years. The streets of Saigon were littered with destruction and bodies of my classmates. Counter attacks by the Americans spared no expense at bombing civilian villages. The whirring of helicopters was synonymous with evacuating my village home. My mother, father, two brothers, and four sisters would lower ourselves in nearby water well and hope we don't die. As the helicopter sounds fade away, we would emerge from our shelter only to see our house roof with fresh bullet holes. When staying at home was increasingly dangerous, my family and I would seek refuge at a nearby South Vietnamese army base and return to our home during the day to tend our vegetable farm.";
content["p1"][Language.Spanish] = "___";
content["p1"][Language.Chinese] = "___";
content["p1"][Language.Vietnamese] = "___";

content["p1ImageText1"][Language.English] = "Map of Saigon, Vietnam (now Ho Chi Minh City)";
content["p1ImageText1"][Language.Spanish] = "_";
content["p1ImageText1"][Language.Chinese] = "_";
content["p1ImageText1"][Language.Vietnamese] = "_";

content["p1ImageText2"][Language.English] = "My mother and father ()";
content["p1ImageText2"][Language.Spanish] = "_";
content["p1ImageText2"][Language.Chinese] = "_";
content["p1ImageText2"][Language.Vietnamese] = "_";

content["p2"][Language.English] = "South Vietnam eventually regained control of Saigon, but North Vietnam inevitably won the war in 1975. What followed was what many saw coming. A communist regime that prevented any type of economic mobility and discrimination against Chinese-Vietnamese citizens. My parents immigrated to Vietnam from China, so my family was Chinese. If I rode a nice bike in the city, police officers would stop me and ask for my identification. As soon as they realized I was Chinese, they would confiscate my bike or threaten my life.";
content["p2"][Language.Spanish] = "__";
content["p2"][Language.Chinese] = "__";
content["p2"][Language.Vietnamese] = "_";

content["p2ImageText"][Language.English] = "__";
content["p2ImageText"][Language.Spanish] = "__";
content["p2ImageText"][Language.Chinese] = "__";
content["p2ImageText"][Language.Vietnamese] = "_";

content["p3"][Language.English] = "One day I went to the city at night to eat pho which was usually a dangerous idea going out at night. Next to me were two police officers. As I was plucking basil leaves off its stem to put in my soup, a familiar man without his left arm entered the restaurant. It was my neighbor who tried to avoid  military service, but was taken from his home by the police and purposely sent to a front line combat division. He was eventually discharged due to losing his arm. Angry about his disfigurement, he revealed a hand grenade and tossed it in my direction near the police officers. I hit the ground and the grenade exploded. My face and head was covered in blood. Fortunately, I ran to the nearest taxi and asked to go to the hospital. The doctor said if we didn't pay for a blood donor, then I was going to die. I seemed like a lost cause. Fortunately, an old classmate of my dad's was able to pay for my surgery, and I am still very good friends with him today.";
content["p3"][Language.Spanish] = "___";
content["p3"][Language.Chinese] = "___";
content["p3"][Language.Vietnamese] = "___";

content["p3ImageText1"][Language.English] = "Grenade fragment still lodged in my knuckle";
content["p3ImageText1"][Language.Spanish] = "_";
content["p3ImageText1"][Language.Chinese] = "_";
content["p3ImageText1"][Language.Vietnamese] = "_";

content["p3ImageText2"][Language.English] = "My dad's classmate who paid for my surgery ()";
content["p3ImageText2"][Language.Spanish] = "_";
content["p3ImageText2"][Language.Chinese] = "_";
content["p3ImageText2"][Language.Vietnamese] = "_";

content["p4"][Language.English] = "When I returned to school after the war, I met a classmate who grew and sold coffee beans. I became interested in his business, and he taught me how to roast coffee beans. My family had a one acre plot of farmland growing watercress, bok choy, and other vegetables. The farm brought very little income, and I wanted to start roasting coffee beans to sell. My older brother, two older sisters, and I put in money to purchase a coffee roaster and started a coffee business. We made a lot of money— about $500 a day ($2,145 today).";
content["p4"][Language.Spanish] = "___";
content["p4"][Language.Chinese] = "___";
content["p4"][Language.Vietnamese] = "___";

content["p4ImageText"][Language.English] = "_";
content["p4ImageText"][Language.Spanish] = "_";
content["p4ImageText"][Language.Chinese] = "_";
content["p4ImageText"][Language.Vietnamese] = "_";

content["p5"][Language.English] = "We continued the business for about a year, but my family and I knew this was not sustainable. If caught, we would be sent to prison and re-education camps. My 2nd older sister's boyfriend's family had been building a boat to escape Vietnam. They were charging $2,500 per person ($10,720 today) for a spot on the 400 person wooden boat. The end of the Vietnam War caused a mass exodus of people to board simple boats to escape Vietnam- colloquially these refugees were referred to as boat people. Between the years 1975 and 1995, over 800,000 refugees escaped Vietnam. However, death estimates vary between 100,000 to 400,000 due to storms, diseases, starvation, and pirates. The captain of the boats would pay off the Vietnamese Navy patrol for safe passage to international waters. The boats weren't intended for deep, open waters, and success usually meant being saved by a passing freighter; however, if rescue never comes, refugees could be stranded at sea for weeks having to endure the elements and pirates. It was a risky choice- flee communism for a better life or lose your life trying.";
content["p5"][Language.Spanish] = "___";
content["p5"][Language.Chinese] = "___";
content["p5"][Language.Vietnamese] = "___";

content["p5ImageText1"][Language.English] = "A boat similiar to what my family and I used to escape Vietnam";
content["p5ImageText1"][Language.Spanish] = "_";
content["p5ImageText1"][Language.Chinese] = "_";
content["p5ImageText1"][Language.Vietnamese] = "_";

content["p5ImageText2"][Language.English] = "Map of country of asylums during 1975-1996";
content["p5ImageText2"][Language.Spanish] = "_";
content["p5ImageText2"][Language.Chinese] = "_";
content["p5ImageText2"][Language.Vietnamese] = "_";

content["p6"][Language.English] = "The decision was quite easy for our family. 14 of us: My four sisters, two brothers, four nephews, my two brother-in-laws, my sister-in-law, and me would buy a spot on the boat and hopefully escape Vietnam. My mom and dad would stay in Vietnam, waiting for us if we need to return. In 1979, the 14 of us walked about an hour to get to our departure location: Rạch Giá, Kien Giang, Vietnam. We paid the captain $2,500 per person and boarded the ship. As we were approaching international waters, a Navy patrol boat intercepted us as expected. Unbeknownst to our boat captain, the Navy patrol boat had sold additional seats to others on our boat. 300 more people joined our 400 person boat for a total of 700 hopeful passengers. Everybody was tightly squeezed next to each other in a sitting position with barely any room. Our boat captain paid the Navy patrol for safe passage, and we gave them the rest of our Vietnamese currency given that it was worthless elsewhere in the world. The patrol boat departed, and we continued our journey. Almost as soon as we started to move, the motor broke. We were stranded and surely going to die without even leaving Vietnam waters. The navy patrol boat that gave us safe passage had already turned back and almost out of view; however, it suddenly turned around and headed our way. The patrol boat's captain noticed we barely moved and came back to tow us. We stayed near Rạch Giá until the motor was fixed.";
content["p6"][Language.Spanish] = "___";
content["p6"][Language.Chinese] = "___";
content["p6"][Language.Vietnamese] = "___";

content["p6ImageText"][Language.English] = "My younger brother holding our boat designation KG 0370 after landing at Pulau Bidong Island, Malaysia (May 11th, 1979)";
content["p6ImageText"][Language.Spanish] = "_";
content["p6ImageText"][Language.Chinese] = "_";
content["p6ImageText"][Language.Vietnamese] = "_";

content["p7"][Language.English] = "Our second attempt wasn't met with mechanical failure but with pirates. Soon after entering international waters, we were attacked by pirates— eight times. With each attack, we were stripped of more and more of our belongings and equipment. The 8th attack, however, was shown mercy. The pirate leader, who was Chinese, noticed most of us were Chinese-Vietnamese refugees. We begged him in Cantonese (a Chinese dialect) to spare our boat. The Chinese pirate felt pity and even gave us water and food. We continued our journey, eating dry bread and drinking what little water we had. It was a miserable time as many of us got seasick and fever. Finally after four days, we could see land. In one of the most dramatic atmosphere changes I have witnessed, the boat's passenger of despair and misery turned into joy and optimism. Families were hugging each other and crying.";
content["p7"][Language.Spanish] = "__";
content["p7"][Language.Chinese] = "__";
content["p7"][Language.Vietnamese] = "_";

content["p7ImageText"][Language.English] = "Map of our journey to Malyasia";
content["p7ImageText"][Language.Spanish] = "__";
content["p7ImageText"][Language.Chinese] = "__";
content["p7ImageText"][Language.Vietnamese] = "_";

content["p8"][Language.English] = "We landed on Pulau Bidong Island, Malaysia. It was already populated with other refugees and was converted into a temporary refugee camp by the United Nation. Finding another country to call home required a sponsor from that country. Our family knew nobody outside of Vietnam. During our escape, one of my young nephews had developed a fever that permanently damaged his brain. Switzerland recently started a refugee program to help handicap individuals. My oldest sister then took her family to Switzerland. My 2nd older sister's husband had family in Australia, so she headed there. The rest of my family had to wait 14 months before someone could sponsor us. My older brother had served in the South Vietnamese army, so the U.S was willing to accept my entire family. Our sponsor was a Catholic social service center in Utica, New York. We arrived in America in 1980 without knowing any English. We enrolled in an English as a second language school and began our assimilation to America.";
content["p8"][Language.Spanish] = "__";
content["p8"][Language.Chinese] = "__";
content["p8"][Language.Vietnamese] = "_";

content["p8ImageText1"][Language.English] = "Pulau Bidong Island, Malaysia (around 1977)";
content["p8ImageText1"][Language.Spanish] = "__";
content["p8ImageText1"][Language.Chinese] = "__";
content["p8ImageText1"][Language.Vietnamese] = "_";

content["p8ImageText2"][Language.English] = "My two nephews who immigrated to Switzerland (1980)";
content["p8ImageText2"][Language.Spanish] = "__";
content["p8ImageText2"][Language.Chinese] = "__";
content["p8ImageText2"][Language.Vietnamese] = "_";

content["p9"][Language.English] = "After finishing English school, my brother and I moved to Philadelphia, Pennsylvania. Philadelphia had a sizable Chinatown and presented much more opportunities for us. My first job was a dishwasher. I worked from 3:00pm to 2:00am at 'Joe's Peking Duck House'. The manager's wife eventually approached me and offered to train me to become a waiter which earned slightly more money. I obliged and ended up becoming the front house manager. During my stint, I became very good friends with three chefs at the restaurant who were also Chinese-Vietnamese refugees. We shared a lot of the same mentality and decided to quit and start our own restaurant. It opened two blocks down, and was called 'Friendly Peking Duck Restaurant'. The restaurant was very successful. Charles Barkley, NBA Hall of Farm player, was one of my most frequent patrons! My stake in the restaurant was eventually sold to the other three co-founders as I had wanted to go to a small town in Texas due to business opportunities that my young sister mentioned.";
content["p9"][Language.Spanish] = "__";
content["p9"][Language.Chinese] = "__";
content["p9"][Language.Vietnamese] = "_";

content["p9ImageText1"][Language.English] = "My restaurant partners, my brother, and me at 'Friendly Peking Duck' restaurant ()";
content["p9ImageText1"][Language.Spanish] = "__";
content["p9ImageText1"][Language.Chinese] = "__";
content["p9ImageText1"][Language.Vietnamese] = "_";

content["p9ImageText2"][Language.English] = "The 2nd floor of my restaurant was the campaign headquarters for Michael Dukakis, govenor of Massachusetts (he said he would frame my restaurant picture if he won the presidency in 1988)";
content["p9ImageText2"][Language.Spanish] = "__";
content["p9ImageText2"][Language.Chinese] = "__";
content["p9ImageText2"][Language.Vietnamese] = "_";

content["p10"][Language.English] = "In 1991, my brother and I came to Laredo, Texas but were immediately bored. I returned to Philly; because business was still hard in Philly, I decided to give Laredo another chance. In 1993, I returned to Laredo and started a toy store downtown called K.V. Toys. While running the toy store, I met the most caring and thoughtful person- my wife. Unfortunately shortly after, the peso became seriously devalued and business was not good. I decided to open the first Vietnamese restaurant in Laredo on San Bernardo Avenue. The restaurant did fine, but we still didn't make much money. On a trip to Houston, I had stopped at a gas station and noticed gambling machines. I knew the potential of casinos as I was familiar with Jersey City and was quite surprised that they were legal in Texas. I asked a cop friend of mine if he could check, and he came back telling me it was perfectly legal. I immediately started looking for machines, but I couldn't afford them. Each machine cost roughly $5,000. I eventually met a vendor in Dallas, and he agreed to lease me the machine. With that, I opened up the first casino room or 'maquinita' in Laredo on San Bernardo Avenue. I closed the toy store and restaurant to focus on the game room. In 2003, Texas outlawed casinos, and I closed down the establishment. I found work as a technician and now happily reside in Laredo.";
content["p10"][Language.Spanish] = "__";
content["p10"][Language.Chinese] = "__";
content["p10"][Language.Vietnamese] = "_";

content["p10ImageText1"][Language.English] = "__";
content["p10ImageText1"][Language.Spanish] = "__";
content["p10ImageText1"][Language.Chinese] = "__";
content["p10ImageText1"][Language.Vietnamese] = "_";

content["p10ImageText2"][Language.English] = "__";
content["p10ImageText2"][Language.Spanish] = "__";
content["p10ImageText2"][Language.Chinese] = "__";
content["p10ImageText2"][Language.Vietnamese] = "_";

content["p11"][Language.English] = "I consider myself lucky in many regards. If not for my dad's classmate, I would have died from my grenade injuries. If not for the Navy patrol boat turning back to tow us back to safety, I would have been stranded at sea. If not for the Catholic service organization sponsoring me, I would have never made it to America. I have seen many horrible things in my life, but I have also seen the goodness in people's hearts. I try to be as friendly and empathetic as possible because that is what kept me alive. I want my children to be good people, and I want them to never limit themselves. Everything I've done is to give my family a better chance at life, and I know they can see that.";
content["p11"][Language.Spanish] = "__";
content["p11"][Language.Chinese] = "__";
content["p11"][Language.Vietnamese] = "_";

const Dad = ({lang}) => {
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
      <section id="dad">
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

              <div class="image-double-container">
                <div class="image-double-bottom">
                  <img src={mapOfSaigon}/>
                  <p>{content.p1ImageText1[lang]}</p>
                </div>
                <div class="image-double-top">
                  <p>{content.p1ImageText2[lang]}</p>
                  <img src={grandmaGrandpa}/>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p2[lang]}
                </p>
              </div>

              <div class="image-single-container">
                <img src={mapOfSaigon} className="img-large"/>
                <p>{content.p2ImageText[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p3[lang]}
                </p>
              </div>

              <div class="image-double-container">
                 <div class="image-double-top">
                  <p>{content.p3ImageText1[lang]}</p>
                  <img src={fragments}/>
                </div>
                <div class="image-double-bottom">
                  <img src={mapOfSaigon}/>
                  <p>{content.p3ImageText2[lang]}</p>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p4[lang]}
                </p>
              </div>

              <div class="image-single-container">
                <img src={mapOfSaigon} className="img-mid"/>
                <p>{content.p4ImageText[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p5[lang]}
                </p>
              </div>

              <div class="image-double-container">
                <div class="image-double-bottom">
                  <img src={boat}/>
                  <p>{content.p5ImageText1[lang]}</p>
                </div>
                <div class="image-double-top">
                  <p>{content.p5ImageText2[lang]}</p>
                  <img src={immigrationMap}/>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p6[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <img src={brotherBoat} className="img-mid"/>
                <p>{content.p6ImageText[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p7[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <img src={mapOfSaigon} className="img-mid"/>
                <p>{content.p7ImageText[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p8[lang]}
                </p>
              </div>
              <div class="image-double-container">
                <div class="image-double-bottom">
                  <p>{content.p8ImageText1[lang]}</p>
                  <img src={bidong}/>
                </div>
                <div class="image-double-top">
                  <img src={nephew}/>
                  <p>{content.p8ImageText2[lang]}</p>
                </div>
                
              </div>

              <div class="text-section">
                <p>
                  {content.p9[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <img src={friendlyPekingDuck} className="img-large"/>
                <p>{content.p9ImageText1[lang]}</p>
              </div>
              <div class="image-single-container">
                <img src={friendlyPekingDuckLocation} className="img-mid"/>
                <p>{content.p9ImageText2[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p10[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <img src={mapOfSaigon} className="img-mid"/>
                <p>{content.p10ImageText1[lang]}</p>
              </div>
              <div class="image-single-container">
                <img src={mapOfSaigon} className="img-mid"/>
                <p>{content.p10ImageText2[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p11[lang]}
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

export default Dad;
