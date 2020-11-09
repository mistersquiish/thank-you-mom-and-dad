import React, { useState, useEffect } from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import Fade from 'react-reveal/Fade';
import { useDrag } from 'react-use-gesture';
import { Language } from '../LanguageConstant';
import arrow from '../../images/arrow.png';
import chineseCoin from '../../images/chinese-coin.jpg';

const content = {
  definition: {
    en: "The red envelope is typically a monetary gift given during special occasions. This is my red envelope to my parents only it's filled with love instead of money.",
    zh: "红包通常是特殊情况下给予的金钱礼物. 这是我给父母的红包，只有它充满了爱而不是金钱.",
    es: "El sobre rojo suele ser un obsequio monetario que se da en ocasiones especiales. Este es mi sobre rojo para mis padres, solo que está lleno de amor en lugar de dinero.",
    vi: "Phong bì đỏ thường là một món quà tiền tệ được tặng trong những dịp đặc biệt. Đây là phong bì đỏ mà tôi gửi cho bố mẹ, nó chứa đầy tình yêu thương thay vì tiền bạc.",
  },
  message: {
    en: "To my incredible parents who overcame poverty, adversity, and uncertainty to give a better life for their children",
    zh: "对于那些克服贫困，逆境和不确定性为孩子们过上更好生活的不可思议的父母",
    es: "Para mis padres increibles quien superaban pobreza, adversidad y incertidumbre para les dan una vida mejor para a sus hijos",
    vi: "Gửi đến những bậc cha mẹ đáng kinh ngạc của tôi, những người đã vượt qua nghèo khó, nghịch cảnh và bất trắc để mang lại cuộc sống tốt đẹp hơn cho con cái của họ",
  },
  thankyou: {
    en: "―Thank you",
    zh: "―谢谢",
    es: "―Gracias mucho",
    vi: "―Cảm ơn bạn",
  },
  instructions: {
    en: "pull",
    zh: "拉",
    es: "hala",
    vi: "kéo",
  },
};

function Paper({isOpened, setIsOpened, lang}) {
  const [props, set] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
  }))

  const [didSetDown, setDidSetDown] = useState(false);

  const bind = useDrag(({ down, movement: [x, y] }) => {
    // if envelop is already opened, don't move
    if (isOpened === true && !down) {
      set({
        x: 0,
        y: -200,
      })
      setDidSetDown(true);
      return;
    }

    var newXValue = x;
    var newYValue = y;

    // prevent dragging into the side of envelope
    if (x > -100 && x < 100 && y > -70 && !didSetDown) {
      newXValue = 0;
    }

    // prevent dragging outside window
    if (x < -225) {
      newXValue = -225;
    } else if (x > 225) {
      newXValue = 225;
    }

    // prevent dragging below envelope
    if (y > (didSetDown ? 200 : 20)) {
      newYValue = didSetDown ? 200 : 20;
    }

    // prevent dragging too far up
    if (y < (didSetDown ? -200 : -500)) {
      newYValue = (didSetDown ? -200 : -500);
    }

    set({
      x: down ? newXValue : 0,
      y: down ? (didSetDown ? newYValue -200 : newYValue) : (didSetDown ? -200 : 0),
      scale: down ? 1.1 : 1,
      immediate: down
    })

    if (newYValue < -165) {
      setIsOpened(true);
    }
  })

  const paperStyle = {
    width: 87,
    height: 120,
    left: 6,
    top: -33,
  }
  
  const LetterContents = () => {
    if (isOpened && didSetDown) {
      return (
        <h2 className="message-wrapper noselect">
          {content.message[lang]}
          <br/>
          {content.thankyou[lang]}
        </h2>
      )
    } else {
      return <div>{undefined}</div>
    }
    
  }

  return (
    <animated.div {...bind()} style={{transform: interpolate([props.x, props.y, props.scale], (x, y, s) => `translate3d(${x}px,${y}px,0) scale(${s})`) }}>
        <div className="paper" style={(isOpened && didSetDown) ? {} : paperStyle}>
          <LetterContents />
        </div>
    </animated.div>
  )
}

const Envelope = ({lang}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpened, setIsOpened] = useState(false);


  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const {y} = useSpring({
    loop: { reverse: true},
    from: { y: 0 },
    to: { y: isOpened ? 0 : -10 },
    config: { duration: 1000 } 
  })

  return (
    <section id="envelope">
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <div className="envelope-separator noselect">
          <img src={chineseCoin} className="chinese-coin"/>
          <img src={chineseCoin} className="chinese-coin"/>
          <img src={chineseCoin} className="chinese-coin"/>
        </div>
      </Fade>
      
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <div className="envelope-definition-container">
          <p>{content.definition[lang]}</p>
        </div>
      </Fade>

      <div className="envelope-container">
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          
          {/* <animated.div style={{transform: y.to(y => `translateY(${ y}px`)}}> */}
              <div className="envelope" >
                <div className="envelope-bottom" />
                <div className="envelope-lining" />
                <div className="envelope-symbol" />
                <div className="envelope-instructions noselect">
                  <h5>{content.instructions[lang]}</h5>
                  <img src={arrow} className="arrow" />
                </div>
                <Paper isOpened={isOpened} setIsOpened={setIsOpened} lang={lang}/>
              </div>
          {/* </animated.div> */}
        </Fade>
      </div>
    </section>
  )
}

export default Envelope;