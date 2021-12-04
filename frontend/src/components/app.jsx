import React, { useState } from 'react';
import axios from 'axios';
import Spread from './Spread';
import Results from './Results';
import Card from './Card';

const App = function () {
  const [isLoaded, setLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const [spread, setSpread] = useState('Past Present Future');
  const dealCards = () => {
    axios({
      method: 'get',
      url: '/cards/random?n=3',
    }).then((result) => { setCards(result.data.cards); setLoaded(true); });
  };

  return (
    <div>
      <h1>Tarot Tool</h1>
      <button type="button" onClick={dealCards}>Tell my fortune</button>
      {isLoaded === true ? <Spread cards={cards} /> : (
        <section id="three-card-spread">
          <Card name="" />
          <Card name="" />
          <Card name="" />
        </section>
      )}
      {isLoaded === true ? <Results cards={cards} /> : ''}
    </div>
  );
};

export default App;
