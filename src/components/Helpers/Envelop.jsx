import React, { useState, useEffect } from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { Language } from '../LanguageConstant';

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

  const [down, setIsDown] = useState(false);
  const [didSetDown, setDidSetDown] = useState(false);

  const bind = useDrag(({ down, movement: [x, y] }) => {
    setIsDown(down);
    if (didSetDown === true) {
      return;
    }

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
    if (x > -100 && x < 100 && y > -34) {
      newXValue = 0;
    }

    // prevent dragging below envelope
    if (y > 20) {
      newYValue = 0;
    }

    set({
      x: down ? newXValue : 0,
      y: down ? newYValue : 0,
      scale: down ? 1.1 : 1,
      immediate: down
    })

    if (newYValue < -175) {
      setIsOpened(true);
    }
  })

  const paperStyle = {
    height: (isOpened && didSetDown) ? (isDesktop ? 200 : 280) : 66,
    width: (isOpened && didSetDown) ? (isDesktop ? 450 : 310) : 87,
    left: (isOpened && didSetDown) ? (isDesktop ? -177 : -110) : 6,
    top: (isOpened && didSetDown) ? (isDesktop ? -150 : -200) : -33,
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
        <div className="paper" style={paperStyle}>
          <div className="letter">
            <LetterContents />
          </div>
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
    <div className="envelope-container">
      <animated.div style={{transform: y.interpolate(y => `translateY(${ y}px`)}}>
          <div className="envelope" >
            <Paper isOpened={isOpened} setIsOpened={setIsOpened} lang={lang}/>
          </div>
      </animated.div>
    </div>
  )
}

export default Envelope;