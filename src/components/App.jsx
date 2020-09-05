import React, { useState, useEffect } from 'react';
import { Fab, Action } from 'react-tiny-fab';
import Title from './Sections/Title';
import Foreword from './Sections/Foreword';
import Story from './Sections/Story';
import 'react-tiny-fab/dist/styles.css';
import { Language } from './LanguageConstant';

const components = [
  {
    position: {
      bottom: 0,
      right: 0,
    },
    event: 'click',
    mainButtonStyles: {
      backgroundColor: '#3E721D',
      fontFamily: 'Bad Script'
    },
    actionButtonStyles: {
      backgroundColor: '#ffffff',
      color: '#34495e',
    },
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lang: Language.English};

    this.onLanguageChange = this.onLanguageChange.bind(this)
  }

  onLanguageChange(lang)  {
    this.setState({lang: lang});
  }

  renderComponents = (c) =>
  c.map(({ mainButtonStyles, actionButtonStyles, position, event }, i) => (
    <Fab
      mainButtonStyles={mainButtonStyles}
      position={position}
      icon={this.state.lang}
      event={event}
      key={i}
    >
      <Action
        style={actionButtonStyles}
        text="English"
        onClick={() => this.onLanguageChange(Language.English)}>
        🇺🇸
      </Action>
      <Action style={actionButtonStyles}
        text="Chinese"
        onClick={() => this.onLanguageChange(Language.Chinese)}>
        🇭🇰
      </Action>
      <Action style={actionButtonStyles}
      text="Spanish"
      onClick={() => this.onLanguageChange(Language.Spanish)}>
        🇲🇽
      </Action>
    </Fab>
  ));

  render() {
    return (
      
      <React.Fragment>
        <Title lang={this.state.lang}/>
        <Foreword lang={this.state.lang}/>
        <Story lang={this.state.lang}/>
        {this.renderComponents(components, this.onLanguageChange)}
      </React.Fragment>
      
    );
  }
}

export default App;