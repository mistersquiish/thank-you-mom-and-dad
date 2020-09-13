import React, { useState, useEffect } from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { Language } from '../LanguageConstant';
import arrow from '../../images/arrow.png'

const content = {
  message: {},
  thankyou: {}
};
content["message"][Language.English] = "To my incredible parents who overcame poverty, adversity, and uncertainty to give a better life for their children";
content["message"][Language.Spanish] = "Para mis padres increibles quien superaban pobreza, adversidad y incertidumbre para les dan una vida mejor para a sus hijos";
content["message"][Language.Chinese] = "对于那些克服贫困，逆境和不确定性为孩子们过上更好生活的不可思议的父母";

content["thankyou"][Language.English] = "―Thank you";
content["thankyou"][Language.Spanish] = "―Gracias mucho";
content["thankyou"][Language.Chinese] = "―谢谢";


function Paper({isOpened, setIsOpened, lang}) {
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
    if (x > -100 && x < 100 && y > -34 && !didSetDown) {
      newXValue = 0;
    }

    // prevent dragging outside window
    if (x < -225) {
      newXValue = -225;
    } else if (x > 225) {
      newXValue = 225;
    }

    // prevent dragging below envelope
    if (y > 50) {
      newYValue = 50;
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
        <h1 className='message-wrapper'>
          {content.message[lang]}
          <br/>
          {content.thankyou[lang]}
        </h1>
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

function Envelope({lang}) {
  const [isOpened, setIsOpened] = useState(false);

  const {y} = useSpring({
    loop: { reverse: true},
    from: { y: 0 },
    to: { y: isOpened ? 0 : -10 },
    config: { duration: 1000 } 
  })


  return (
    <animated.div style={{transform: y.interpolate(y => `translateY(${ y}px`)}}>
        <div className="envelope" >
          <div className="envelope-bottom" />
          <div className="envelope-lining" />
          <div className="envelope-symbol" />
          <div className="envelope-instructions">
            <h5>pull</h5>
            <img src={arrow} className="arrow" />
          </div>
          
          <Paper isOpened={isOpened} setIsOpened={setIsOpened} lang={lang}/>
        </div>
    </animated.div>
  )
}

export default Envelope;