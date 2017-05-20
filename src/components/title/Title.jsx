// @flow
import React from 'react';

import '../../styles/containers.css'
import './title.css';

const Title = (
  props: {
    title: string,
    onClick: () => mixed,
  }) => {

  return (
    <div className="wrapper">
      <div className="click-area" onClick={props.onClick}>
        <span className="small white">the</span>
        <h1 className="title white">
          {props.title}
        </h1>
        <span className="small white right">aesthetic</span>
      </div>
    </div>
  );
}

export default Title;
