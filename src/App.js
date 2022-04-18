import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState();
  console.log({ characters });
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://hp-api.herokuapp.com/api/characters")
        .then((response) => {
          setCharacters(response.data);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {characters &&
        characters.map((result) => {
          return (
            <div className="characters">
              <div className="spacer">
                <div className="fw-bold">Name: </div>
                <div>{result.name}</div>
              </div>
              <div className="spacer">
                <div>House: </div>
                <div>{result.house}</div>
              </div>
              <div className="spacer">
                <div>Gender: </div>
                <div>{result.gender}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
