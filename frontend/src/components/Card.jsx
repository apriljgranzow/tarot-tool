import React from 'react';
import * as data from '../../../dataset/tarot-images.json';

const Card = function (props) {
  const { name } = props;

  if (name === '') {
    return (<div className="card card-back">.</div>);
  }
  return (<div className="card card-front"><p>{name}</p></div>);
};

export default Card;
