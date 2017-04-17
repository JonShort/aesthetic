// @flow
import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import Title from './components/Title';
import './App.css';

class App extends Component {
  render() {
    const styles = {
        fontFamily: 'Menlo-Regular, Menlo, monospace',
        fontSize: 14,
        lineHeight: '10px',
        color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
    }
    return (
      <div className="App">
        <Parallax ref='parallax' pages={3}>
          <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }} />
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
          <Title
            offset={0}
            speed={0.5}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(1)}>
              Click!
          </Title>
        </Parallax>
      </div>
    );
  }
}

export default App;
