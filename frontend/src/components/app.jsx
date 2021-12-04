import React, { useState } from 'react';
import axios from 'axios';
import Spread from './Spread';
import Results from './Results';
import Signup from './Signup';

const themes = {
  'Past Present Future': ['Past', 'Present', 'Future'],
};

const App = function () {
  const [isLoaded, setLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const [spread, setSpread] = useState('Past Present Future');
  const [showForm, setShowForm] = useState(false);
  const [n, setN] = useState(2);
  const dealCards = () => {
    axios({
      method: 'get',
      url: `/cards/random?n=${n}`,
    }).then((result) => { setCards(result.data.cards); setLoaded(true); });
  };

  return (
    <div>
      <button type="button" id="sign-in" onClick={() => { setShowForm(true); }}>Sign in</button>
      <h1>Tarot Tool</h1>
      {showForm === true ? <Signup /> : ''}
      <section id="button-container">
        <button type="button" onClick={dealCards}>Tell my fortune</button>
      </section>
      {isLoaded === true ? <Spread cards={cards} /> : <Spread cards={Array(n).fill('')} />}
      {isLoaded === true ? <Results cards={cards} themes={themes[spread]} /> : ''}
    </div>
  );
};

export default App;
