/* eslint-disable camelcase */
import React from 'react';

const Description = function (props) {
  const { card, position, theme } = props;
  const { name, meaning_up, desc } = card;
  return (
    <article className="description">
      <h3 className="spread-item-theme">{`Card ${position}: ${theme}`}</h3>
      <h4>{name}</h4>
      <p className="card-meaning">{meaning_up}</p>
      <p className="card-description">{desc}</p>
    </article>
  );
};

export default Description;
