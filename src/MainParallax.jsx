// @flow
import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import {
  Title,
} from './components';

class MainParallax extends Component {
  render() {
    let subject: string = '';
    const currentLocation: string = window.location.pathname;

    if (currentLocation !== '/') {
      const i: string[] = currentLocation.split('/');
      if (i[1] === 'aesthetic') {
        subject = i[2].replace(/-/g, ' ');
      } else {
        subject = i[1].replace(/-/g, ' ');
      }
    }

    return (
      <div>
        <Parallax className="test" ref='parallax' pages={3}>
          <Parallax.Layer offset={0} speed={1} style={{ background: 'linear-gradient(to bottom, #ff69b4 0%,#FF1D8E 100%)' }} />
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
          <Parallax.Layer offset={0} speed={0.25}>
            <Title title={subject} onClick={() => this.refs.parallax.scrollTo(1)} />
          </Parallax.Layer>
        </Parallax>
      </div>
    )
  }
}

export default MainParallax;
