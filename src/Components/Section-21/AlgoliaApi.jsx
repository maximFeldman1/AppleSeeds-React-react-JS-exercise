import React, { useState, useEffect } from "react";
import axios from "axios";

function AlogoliaApi() {
  const [algoliaData, setAlgoliaData] = useState([]);
  const [input, setInput] = useState("hooks");
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${input}`
        );
        if (data) {
            console.log(data)
          setLoader(false);
        }
        setAlgoliaData(data.data.hits);
      } catch (err) {
        alert(err.message);
      }
    })();
  }, [search]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSearchBtn = (e) => {
    setLoader(true);
    setSearch(input);
  };

  return (
    <>
      <label>Search</label>
      <input type="text" name="search" onChange={inputHandler} />
      <input type="button" value="Search" onClick={handleSearchBtn} />
      {loader ? <span>Loading </span> : ""}
      {algoliaData.map((data) => {
        return (
          <div key={data.objectID}>
            {" "}
            <a href={data.url}>{data.title}</a>
          </div>
        );
      })}
    </>
  );
}

export default AlogoliaApi;
