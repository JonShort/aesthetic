// @flow
import React from 'react';
import Parallax from 'react-springy-parallax';

const Title = (
  props: {
    children?: (React$Element<*> | string),
    offset: number,
    onClick?: () => mixed,
    speed: number,
  }) => {

  return (
    <Parallax.Layer
      offset={props.offset}
      speed={props.speed}
      style={props.style}
      onClick={props.onClick}
      >
      {props.children}
    </Parallax.Layer>
  );
}

export default Title;
