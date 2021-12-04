/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

const SelectReading = function (props) {
  return (
    <>
      <label htmlFor="reading-select">My Saved Readings</label>
      <select name="readings" id="reading-select">
        <option value="" />
      </select>
    </>
  );
};

export default SelectReading;
