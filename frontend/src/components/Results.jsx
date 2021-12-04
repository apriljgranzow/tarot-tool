import React from 'react';
import Description from './Description';

const Results = function (props) {
  const { cards, themes } = props;
  const descriptions = cards
    .map((card, index) => <Description card={card} position={index + 1} theme={themes[index]} />);
  return (
    <section id="results">
      <h2>About your results:</h2>
      {descriptions}
    </section>
  );
};

export default Results;
