import React from "react";
import "./Country.css";

const country = (props) => {
  console.log(props);
  return (
    <div className="country">
      <h2>Country name: {props.name}</h2>
      <h4>Capital: {props.capital}</h4>
      <br />
      <span>Population: {props.population}</span>
      <p>Official: {props.official}</p>
    </div>
  );
};

export default country;
