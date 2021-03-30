import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = () => {
  const [counries, setCounries] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    (async () => {
      const data = await axios.get("https://restcountries.eu/rest/v2/all");
      setCounries(data.data);
    })();
  }, []);

  const filterCountries = (e) => {
    const input = e.target.value;
    setInput(input);
  };

  return (
    <>
      <div>
        <label>Search</label>
        <input type="text" value={input} onChange={filterCountries} />
        <ul>
          {counries.filter((country) => country.name.toLowerCase().startsWith(input)).map((country) => {
              return <li>{country.name}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

export default Countries;
