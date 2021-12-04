import React from 'react';
import imageMap from '../imageMap';

const Card = function (props) {
  const { name } = props;
  const fileName = imageMap.get(name);
  if (name === '') {
    return (<div className="card card-back">.</div>);
  }
  return (<div className="card card-front"><img src={`/assets/cards/${fileName}`} alt={name} /></div>);
};

export default Card;
