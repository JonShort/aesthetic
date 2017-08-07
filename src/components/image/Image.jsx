// @flow
import React from 'react';

const Image = (
  props: {
    alt: string,
    height: string,
    src: string,
    width: string
  }
  ) => (
  <img
    alt={props.alt}
    src={props.src}
    style={{
      maxHeight: props.height,
      maxWidth: props.width
    }}
  />
);

export default Image;