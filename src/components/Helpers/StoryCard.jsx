import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Card, Row, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'
import arrowDown from '../../images/arrow-down.png'
import storyCardMom from '../../images/story-card-mom.jpg'
import storyCardDad from '../../images/story-card-dad.jpg'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function StoryCard({onClick, style, label, instructions, isMom, isDad}) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  
  const StoryInstructions = () => {
    if (instructions) {
      return (
        <div className="story-instructions">
          <img src={arrowDown} className="arrow" />
          <h5>click</h5>
        </div>
      )
    } else {
      return (
        <div>{undefined}</div>
      )
    }
  }
  
  return (
    <div id="story-card">
      <StoryInstructions />
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
      >
          
          <button onClick={onClick}>
            <div className="card" style={style}>
              
                <img src={isMom ? storyCardMom : storyCardDad} />
                {/* <p>
                  {label}
                </p> */}

            </div>
          </button>
          
        
      </animated.div>
    </div>
  )
}

export default StoryCard;