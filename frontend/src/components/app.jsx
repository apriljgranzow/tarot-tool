import React, { useState } from 'react';
import axios from 'axios';
// import FirebaseProvider from '../firebase/firebase';
import Spread from './Spread';
import Results from './Results';
import Signup from './Signup';
// import SignIn from './Signin';
// import SavedReadings from './SavedReadings';

const themes = {
  'Past Present Future': ['Past', 'Present', 'Future'],
};

const App = function () {
  const [isLoaded, setLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const [spread, setSpread] = useState('Past Present Future');
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [n, setN] = useState(3);
  const dealCards = () => {
    axios({
      method: 'get',
      url: `/cards/random?n=${n}`,
    }).then((result) => { setCards(result.data.cards); setLoaded(true); });
  };

  return (
    // <FirebaseProvider>
      <div>
        <header id="authentication-buttons">
          <button type="button" id="signup" onClick={() => { setShowSignup(true); }}>Sign Up</button>
          <button type="button" id="signup" onClick={() => { setShowSignin(true); }}>Sign In</button>
        </header>
        <h1>Tarot Tool</h1>
        {showSignup === true ? <Signup /> : ''}
        {showSignin === true ? <Signup /> : ''}
        <section id="button-container">
          <button type="button" onClick={dealCards}>Tell my fortune</button>
          {/* <select id="my-readings">My Saved Readings</select> */}
          <button type="button" onClick={() => {}}>Save my fortune</button>
        </section>
        {isLoaded === true ? <Spread cards={cards} /> : <Spread cards={Array(n).fill('')} />}
        {isLoaded === true ? <Results cards={cards} themes={themes[spread]} /> : ''}
      </div>
    // </FirebaseProvider>
  );
};

export default App;
