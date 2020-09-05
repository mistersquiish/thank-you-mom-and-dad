import React from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';

function Paper() {
  const [props, set] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1
  }))
  const bind = useDrag(({ down, movement: [x, y] }) => {
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
  })


  return (

    <animated.div {...bind()} style={{ transform: interpolate([props.x, props.y, props.scale], (x, y, s) => `translate3d(${x}px,${y}px,0) scale(${s})`) }}>
      <div className="paper" />
    </animated.div>
  )
}

function Envelope() {
  const {y} = useSpring({
    loop: { reverse: true},
    from: { y: 0 },
    to: { y: -10 },
    config: { duration: 1000 } 

    
  })




  return (
    <div className="envelope-container">
      <animated.div style={{touchAction: 'none', transform: y.interpolate(y => `translateY(${ y}px`)}}>
          <div className="envelope">
            <Paper />
          </div>
      </animated.div>
    </div>
  )
}

export default Envelope;