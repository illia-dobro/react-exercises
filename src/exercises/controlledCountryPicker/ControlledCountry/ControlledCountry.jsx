import React from 'react';

import { COUNTRIES } from '../data';

/*
  “COUNTRIES” is a dictionary-like object
  with the following shape:

  {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
  }
*/

function App() {
  const [country, setCountry] = React.useState('');

  const countries = Object.values(COUNTRIES);

  const handleSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option selected disabled>
            Select country
          </option>
          {countries.map((el) => (
            <option>{el}</option>
          ))}
        </select>
      </fieldset>

      <p className="country-display">Selected country: {country}</p>

      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}

export default App;
