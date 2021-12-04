import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const erorrCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <form onSubmit={handleSubmit}>
    <fieldset>
      <label>
        Email:
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          minLength="8"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      </fieldset>
      <input type="submit" value="Register" />
    </form>
  );
};

export default Signup;
