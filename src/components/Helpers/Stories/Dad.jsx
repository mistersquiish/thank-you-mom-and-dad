import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../../LanguageConstant';
import Closing from './Closing';
import arrowDown from '../../../images/arrow-down.png'

const content = {
  intro: {
    en: "The year 1959...",
    zh: "1959年...",
    es: "El año 1959...",
    vi: "Năm 1959", 
  },
  p1: {
    en: "I was born in a village near Saigon right as the Vietnam War was starting to escalate. Life was relatively normal much of my childhood, but everything changed in 1968— the worst year that I could remember. The Viet Cong and North Vietnamese Army attacked Saigon on Tết- Vietnamese New Years. The streets of Saigon were littered with destruction and bodies of my classmates. Counter attacks by the Americans spared no expense at bombing civilian villages. The whirring of helicopters was synonymous with evacuating my village home. My mother, father, two brothers, and four sisters would lower ourselves in nearby water well. Every time we were down there, I thought we were all going to die. As the helicopter sounds fade away, we would emerge from our shelter only to see our house roof with fresh bullet holes. When staying at home became increasingly dangerous, my family and I would seek refuge at a nearby South Vietnamese army base and return to our home during the day to tend our vegetable farm.",
    zh: "",
    es: "",
    vi: "", 
  },
  p2: {
    en: "South Vietnam eventually regained control of Saigon, but North Vietnam inevitably won the war in 1975. What followed was what many saw coming. A communist regime that prevented any type of economic mobility and discrimination against Chinese-Vietnamese citizens, also known as Hoa people. Hoa people are an ethnic minority group that are Chinese people living in/from Vietnam. Examples of discrimination include a simple bike ride in the city. If I biked in the city, police officers would stop me and ask for my identification. As soon as they realized I was Chinese, they would confiscate my bike or threaten my life.",
    zh: "",
    es: "",
    vi: "", 
  },
  p3: {
    en: "One day I went to the city at night to eat pho which was usually a dangerous idea going out at night. Next to me were two police officers. As I was plucking basil leaves off its stem to put in my soup, a familiar man without his left arm entered the restaurant. It was my neighbor who attempted to avoid military service, but was caught and taken from his home by the police and purposely sent to a front line combat division. He was eventually discharged due to losing his arm. Angry about his disfigurement, he revealed a hand grenade and tossed it in my direction near the police officers. I hit the ground and the grenade exploded. My face and head was covered in blood. Immediately, I ran to the nearest taxi and asked to go to the hospital. The doctor said if we didn't pay for a blood donor, then I was going to die. I seemed like a lost cause. Fortunately, an old classmate of my dad's was able to pay for my surgery, and I am still good friends with him today.",
    zh: "",
    es: "",
    vi: "", 
  },
  p4: {
    en: "When I returned to school after the war, I met a classmate who grew and sold coffee beans. I became interested in his business, and he taught me how to roast coffee beans. My family had a one acre plot of farmland growing watercress, bok choy, and other vegetables. The farm brought very little income, and I wanted to start roasting coffee beans to bring in more income. My older brother, two older sisters, and I put in money to purchase a coffee roaster and started a coffee business. We made a lot of money— about $500 a day ($2,145 today).",
    zh: "",
    es: "",
    vi: "", 
  },
  p5: {
    en: "We continued the business for about a year, but my family and I knew this was not sustainable. If caught, we would be sent to prison and re-education camps. My 2nd older sister's husband's family had been building a boat to escape Vietnam. They were charging $2,500 per person ($10,720 today) for a spot on the 400 person wooden boat. The end of the Vietnam War caused a mass exodus of people to board simple boats to escape Vietnam- colloquially these refugees were referred to as boat people. Between the years 1975 and 1995, over 800,000 refugees escaped Vietnam. However, death estimates vary between 100,000 to 400,000 due to storms, diseases, starvation, and pirates. The captain of the boats would pay off the Vietnamese Navy patrol for safe passage to international waters. The boats weren't intended for deep, open waters, and success usually meant being saved by a passing freighter; however, if rescue never comes, refugees could be stranded at sea for weeks having to endure the elements and pirates. It was a risky choice- flee communism for a better life or lose your life trying.",
    zh: "",
    es: "",
    vi: "", 
  },
  p6: {
    en: "Facing discrimination as Chinese-Vietnamese people and the communist system taking everything from us, the decision was easy for my family. 14 of us: My four sisters, two brothers, four nephews, my two brother-in-laws, my sister-in-law, and me would buy a spot on the boat and hopefully escape Vietnam. My mom and dad would stay in Vietnam, waiting for us if we need to return. In 1979, the 14 of us walked about an hour to get to our departure location: Rạch Giá, Kien Giang, Vietnam. We paid the captain $2,500 per person and boarded the ship. As we were approaching international waters, a Navy patrol boat intercepted us as expected. Unbeknownst to our boat captain, the Navy patrol boat had sold additional seats to others on our boat. 300 more people joined our 400 person boat for a total of 700 hopeful passengers. Everybody was tightly squeezed next to each other in a sitting position with barely any room. Our boat captain paid the Navy patrol for safe passage, and we gave them the rest of our Vietnamese currency as it was worthless elsewhere in the world. The patrol boat departed, and we continued our journey. Almost as soon as we started to move, the motor broke. We were stranded and surely going to die without even leaving Vietnam waters. I started to regret sending my siblings and me on the same boat. My mother would soon hear the news that all her children and grandchildren died on the same boat. The navy patrol boat that gave us safe passage had already turned back and almost out of view; however, it suddenly turned around and headed our way. The patrol boat's captain noticed we barely moved and came back to tow us. We stayed near Rạch Giá until the motor was fixed.",
    zh: "",
    es: "",
    vi: "", 
  },
  p7: {
    en: "Our second attempt wasn't met with mechanical failure but with pirates. We all had heard of the horrific stories and heinous acts by pirates: pillaging, abduction, rape. Soon after entering international waters, we were attacked by pirates— eight times. With each attack, we were stripped of more and more of our belongings and equipment. The 8th attack, however, was shown mercy. The pirate leader, who was Chinese, noticed most of us were Chinese-Vietnamese refugees. We begged him in Cantonese (a Chinese dialect) to spare our boat. The Chinese pirate felt pity and even gave us water and food. We continued our journey, eating dry bread and drinking what little water we had. It was a miserable time as many of us got seasick and high fever. Finally after four days, we could see land. In one of the most dramatic mood changes I have witnessed, the boat's passenger of despair and misery turned into joy and optimism. Families were hugging each other and crying. It was one of the happiest moments of my life.",
    zh: "",
    es: "",
    vi: "", 
  },
  p8: {
    en: "We landed on Pulau Bidong Island, Malaysia. It was already populated with other refugees and was converted into a temporary refugee camp by the United Nation. Finding another country to call home required a sponsor from that country. My family were simple farmer who knew nobody outside of Vietnam. During our escape, one of my young nephews had developed a high fever that permanently damaged his brain. Switzerland recently started a refugee program to help handicap individuals. My oldest sister then took her husband and both sons to Switzerland. My 2nd older sister's husband had family in Australia, so she headed there. The rest of my family had to wait 14 months before someone could sponsor us. My older brother had served in the South Vietnamese army, so the U.S was willing to accept my entire family. Our sponsor was a Catholic social service center in Utica, New York. As I got on the plane, I couldn't help but feel so lucky and blessed that I've been given a second chance at life. We arrived in America in 1980 without knowing any English and without a penny to our name. We enrolled in an English as a second language school and began our assimilation to America.",
    zh: "",
    es: "",
    vi: "", 
  },
  p9: {
    en: "After finishing English school, my brother and I moved to Philadelphia, Pennsylvania. Philly had a sizable Chinatown and presented a lot more opportunities for us. My first job was a dishwasher. I worked from 3:00pm to 2:00am at 'Joe's Peking Duck House'. The manager's wife eventually approached me and offered to train me to become a waiter which earned slightly more money. I obliged and ended up becoming the front house manager. During my stint, I became very good friends with three chefs at the restaurant who were also Chinese-Vietnamese refugees. We shared a lot of the same mentality and decided to quit and start our own restaurant. It opened two blocks down, and was called 'Friendly Peking Duck Restaurant'. The restaurant was very successful. Charles Barkley, NBA Hall of Fame player, was one of my most frequent patrons!",
    zh: "",
    es: "",
    vi: "", 
  },
  p10: {
    en: "September 11th is easily recognized as the September 11th attack on Manhattan. I remember the day for a different reason. On September 11th, 1991, I was on my way to pick up my younger brother at the airport. I had asked my brother if he could come back up to Philly to help with the restaurant. As I approached the airport, I received a call from my second oldest sister. \"The plane crashed\", she said as I could hear her crying. I turned the car around and headed for my mother's house to break the news to her. My grandma was completely heartbroken and cried for many months. This was probably my saddest moment in my life, knowing that if I just told him to not come up, he would still be alive. My stake in the restaurant was eventually sold to the other three co-founders as I had wanted to go to a small town in Texas due to business opportunities that my young sister mentioned.",
    zh: "",
    es: "",
    vi: "", 
  },
  p11: {
    en: "In 1991, my brother and I came to Laredo, Texas but were immediately bored. I returned to Philly; because business was still hard in Philly, I decided to give Laredo another chance. In 1993, I returned to Laredo and started a toy store downtown called K.V. Toys. While running the toy store, I met the most caring and thoughtful person- my wife. Unfortunately shortly after, the peso became seriously devalued and business was not good. I decided to open the first Vietnamese restaurant in Laredo on San Bernardo Avenue. The restaurant did fine, but we still didn't make much money. On a trip to Houston, I had stopped at a gas station and noticed gambling machines. I knew the potential of casinos as I was familiar with Jersey City and was quite surprised that they were legal in Texas. I asked a cop friend of mine if he could check, and he came back telling me it was perfectly legal. I immediately started looking for machines, but I couldn't afford them. Each machine cost roughly $5,000. I eventually met a vendor in Dallas, and he agreed to lease me the machine. With that, I opened up the first casino room or 'maquinita' in Laredo on San Bernardo Avenue. I closed the toy store and restaurant to focus on the game room. In 2003, Texas outlawed casinos, and I closed down the establishment. I found work as a technician and now happily reside in Laredo.",
    zh: "",
    es: "",
    vi: "", 
  },
  conclusion: {
    en: "I consider myself lucky in many regards. If not for my dad's classmate, I would have died from my grenade injuries. If not for the Navy patrol boat turning back to tow us back to safety, I would have been dead at sea. If not for the Catholic service organization sponsoring me and my brother serving in the army, I would have repatriated back to Vietnam. I have seen many horrible things in my life, but I have also seen the goodness in people's hearts. I try to be as friendly and empathetic as possible because that is what kept me alive. I want my children to be good people, and I want them to never limit themselves. Despite everything, I would do it all again just to see my beautiful wife and three children.",
    zh: "",
    es: "",
    vi: "", 
  },
  newspaperInstructions: {
    en: "Click to see article",
    zh: "点击查看文章",
    es: "Haga clic para ver el artículo",
    vi: "Bấm để xem bài viết", 
  },
};

const Dad = ({lang, pictures}) => {
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
                  <img src={pictures.mapOfSaigon.img}/>
                  <p>{pictures.mapOfSaigon.caption[lang]}</p>
                </div>
                <div class="image-double-top">
                  <p>{pictures.grandmaGrandpa.caption[lang]}</p>
                  <img src={pictures.grandmaGrandpa.img}/>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p2[lang]}
                </p>
              </div>

              <div class="image-single-container">
                <img src={pictures.familyVietnam.img} className="img-large"/>
                <p>{pictures.familyVietnam.caption[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p3[lang]}
                </p>
              </div>

              <div class="image-double-container">
                 <div class="image-double-top">
                  <p>{pictures.fragments.caption[lang]}</p>
                  <img src={pictures.fragments.img}/>
                </div>
                <div class="image-double-bottom">
                  <img src={pictures.dadVietnam.img}/>
                  <p>{pictures.dadVietnam.caption[lang]}</p>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p4[lang]}
                </p>
              </div>

              <div class="image-single-container">
                <img src={pictures.dadMalaysia.img} className="img-mid"/>
                <p>{pictures.dadMalaysia.caption[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p5[lang]}
                </p>
              </div>

              <div class="image-double-container">
                <div class="image-double-bottom">
                  <img src={pictures.boat.img}/>
                  <p>{pictures.boat.caption[lang]}</p>
                </div>
                <div class="image-double-top">
                  <p>{pictures.immigrationMap.caption[lang]}</p>
                  <img src={pictures.immigrationMap.img}/>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p6[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <img src={pictures.brotherBoat.img} className="img-mid"/>
                <p>{pictures.brotherBoat.caption[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p7[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <img src={pictures.journey.img} className="img-mid"/>
                <p>{pictures.journey.caption[lang]}</p>
              </div>
              <div class="image-single-container">
                <img src={pictures.familyBidong.img} className="img-large"/>
                <p>{pictures.familyBidong.caption[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p8[lang]}
                </p>
              </div>
              <div class="image-double-container">
                <div class="image-double-bottom">
                  <p>{pictures.bidong.caption[lang]}</p>
                  <img src={pictures.bidong.img}/>
                </div>
                <div class="image-double-top">
                  <img src={pictures.nephew.img}/>
                  <p>{pictures.nephew.caption[lang]}</p>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p9[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <img src={pictures.friendlyPekingDuck.img} className="img-large"/>
                <p>{pictures.friendlyPekingDuck.caption[lang]}</p>
              </div>
              <div class="image-single-container">
                <img src={pictures.friendlyPekingDuckLocation.img} className="img-mid"/>
                <p>{pictures.friendlyPekingDuckLocation.caption[lang]}</p>
              </div>
              <div class="image-double-container" style={{marginTop: 50}}>
                <div class="image-double-top">
                  <a href="https://drive.google.com/file/d/1jgbeLzGvm91fD3SrMfRjHlVGyTbyhQz4/view?usp=sharing" target="_blank"><img src={pictures.friendlyPekingDuckNewspaper1.img}/></a>
                  <p>{pictures.friendlyPekingDuckNewspaper1.caption[lang]}</p>
                </div>
                <div class="image-double-top">
                  <div className="newspaper-instructions no-select">
                    <img src={arrowDown} className="arrow" />
                    <h5>{content.newspaperInstructions[lang]}</h5>
                  </div>
                  <a href="https://drive.google.com/file/d/1vTRoXBKQsD2OtIkL1i_MDcO2eFSD3pIQ/view?usp=sharing" target="_blank"><img src={pictures.friendlyPekingDuckNewspaper2.img}/></a>
                  <p>{pictures.friendlyPekingDuckNewspaper2.caption[lang]}</p>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p10[lang]}
                </p>
              </div>
              <div class="image-double-container">
                <div class="image-double-bottom">
                  <p>{pictures.crashNewspaper.caption[lang]}</p>
                  <img src={pictures.crashNewspaper.img}/>
                </div>
                <div class="image-double-top">
                  <img src={pictures.crashPraying.img}/>
                  <p>{pictures.crashPraying.caption[lang]}</p>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p11[lang]}
                </p>
              </div>
              <div class="image-double-container">
                <div class="image-double-top">
                  <img src={pictures.restaurantMenu.img}/>
                  <p>{pictures.restaurantMenu.caption[lang]}</p>
                </div>
                <div class="image-double-bottom">
                  <p>{pictures.restaurantLaredo.caption[lang]}</p>
                  <img src={pictures.restaurantLaredo.img}/>
                </div>
              </div>
              <div class="image-single-container">
                <img src={pictures.dadToyStore.img} className="img-large"/>
                <p>{pictures.dadToyStore.caption[lang]}</p>
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

export default Dad;
