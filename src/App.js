// @flow
import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import {
  EnterSubject,
  Title,
} from './components';

class App extends Component {
  state = {
    subject: ""
  };

  setSubject(e: string) {
    if (e !== this.state.subject) {
      this.setState({subject: e});
    }
  }

  render() {
    if (this.state.subject !== "") {
      return (
        <div>
          <Parallax className="test" ref='parallax' pages={3}>
            <Parallax.Layer offset={0} speed={1} style={{ background: 'linear-gradient(to bottom, #ff69b4 0%,#FF1D8E 100%)' }} />
            <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
            <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
            <Parallax.Layer offset={0} speed={0.25}>
              <Title title={this.state.subject} onClick={() => this.refs.parallax.scrollTo(1)} />
            </Parallax.Layer>
          </Parallax>
        </div>
      )
    }

    return (
      <EnterSubject onSubmit={this.setSubject.bind(this)} />
    )
  }
}

export default App;
