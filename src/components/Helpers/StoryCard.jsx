import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Card, Row, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'
import logo from '../../images/logoHeader.png'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function StoryCard({onClick, style, label}) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div id="story-card">
        <button onClick={onClick}>
          <div className="card" style={style}>
            
              <img src={logo} />
              <p>
                {label}
              </p>
            
          </div>
        </button>
      </div>
    </animated.div>
  )
}

export default StoryCard;