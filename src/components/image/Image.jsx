import React from 'react';

const Image = ({alt, height, src, width}) => (
    <img alt={alt} src={src} style={{maxHeight: height, maxWidth: width}} />
);

export default Image;