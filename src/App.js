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
            <div>
              <div>
                {result.name} {result.house && "- " + result.house}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
