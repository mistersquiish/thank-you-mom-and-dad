import React from 'react'
import { useSpring, animated } from 'react-spring'
import arrowDown from '../../images/arrow-down.png'
import storyCardMom from '../../images/story-card-mom.jpg'
import storyCardDad from '../../images/story-card-dad.jpg'
import { Language } from '../LanguageConstant';
import Picture from './Picture';
import { pictures } from '../Pictures';

const content = {
  instructions: {},
};

content["instructions"][Language.English] = "click";
content["instructions"][Language.Spanish] = "haga click";
content["instructions"][Language.Chinese] = "点击"
content["instructions"][Language.Vietnamese] = "nhấp chuột"

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function StoryCard({onClick, style, instructions, isMom, isDad, lang}) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  
  const StoryInstructions = () => {
    if (instructions) {
      return (
        <div className="story-instructions noselect">
          <img src={arrowDown} className="arrow" />
          <h5>{content.instructions[lang]}</h5>
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
        // style={{ transform: props.xys.to(trans) }}
      >
          
          <button onClick={onClick}>
            <div className="card" style={style}>
              <div className='img-container'>
                <Picture picture={isMom ? pictures.storyCardMom : pictures.storyCardDad} />
              </div>
            </div>
          </button>
          
        
      </animated.div>
    </div>
  )
}

export default StoryCard;