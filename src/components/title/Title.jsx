// @flow
import React from 'react';

import './title.css';

const Title = (
  props: {
    title?: string,
    onClick: () => mixed,
  }) => {

  return (
    <div className="wrapper">
      <div className="container" onClick={props.onClick}>
        <span className="small white">the</span>
        <h1 className="title white">
          {props.title ? props.title : "Aesthetic"}
        </h1>
        {props.title && <span className="small white right">aesthetic</span>}
      </div>
    </div>
  );
}

export default Title;
