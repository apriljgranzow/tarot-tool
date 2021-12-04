import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = function () {
  return (
    <form>
    <fieldset>
      <label>
        Email:
        <input name="email" type="email" required />
      </label>
      <label>
        Password
        <input type="password" name="password" minLength="8" id="password" required />
      </label>
      </fieldset>
      <input type="submit" value="Register" />
    </form>
  );
};

export default Signup;
