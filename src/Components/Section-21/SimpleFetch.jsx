import React, { useState, useEffect } from "react";
import axios from "axios";

const Fetch = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");

  useEffect(() => {
    const data = async () => {
      const result = await axios.get("https://swapi.dev/api/films/1/");
      console.log(result.data.title);
      setTitle(result.data.title);
      setDirector(result.data.director);
    };

    data();
  }, []);

  return (
    <>
      <div>
        <div>
          Title: <span>{title}</span>
          <div>
            Director: <span>{director}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fetch;
