import React, { use, useState } from "react";
import Country from '../country/Country'
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const countries = use(countriesPromise);

  const handleVisitedCountries = (country) => {
    console.log("country visited", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h1>traveling countries: {countries?.length}</h1>
      <h3>traveled so for:{visitedCountries?.length}</h3>
      <div className="visited-flag-container">
        {visitedFlags.map((flag) => (
          <img src={flag}></img>
        ))}
      </div>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country?.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
