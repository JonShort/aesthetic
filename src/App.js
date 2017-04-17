// @flow
import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import Title from './components/title/Title';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Parallax ref='parallax' pages={3}>
          <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#ff69b4' }} />
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
          <Parallax.Layer offset={0} speed={0.25}>
            <Title onClick={() => this.refs.parallax.scrollTo(1)} />
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

export default App;
