import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Spread = function (props) {
  const { cards } = props;
  const cardComponents = cards.map((card) => <Card name={card.name} key={card.name} />);
  return (
    <section className="spread horizontal-spread">
      {cardComponents}
    </section>
  );
};

Spread.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Spread;
