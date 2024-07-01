import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "../utils/customAxios.js";
import logo from "../logo.svg";

/** Don't forget to JS-Doc all your components to know what you're doing! */
export default function Hello() {
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    async function fetchGreeting() {
      const resGreeting = await axios.get("hello").catch((err) => err);
      if (resGreeting instanceof Error) {
        alert(resGreeting.response?.data.msg || "Default error message");
        return;
      }

      setGreeting(resGreeting.data);
    }
    fetchGreeting();
  }, []);

  if (!greeting) {
    return (
      <div>
        <p>Waiting for fetching the greeting</p>
      </div>
    );
  }

  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="mt-4">{greeting}</p>

        <Link to="/pokemons">
          <button className="btn-primary btn-lg">Go to Pokemon list</button>
        </Link>
      </header>
    </main>
  );
}
