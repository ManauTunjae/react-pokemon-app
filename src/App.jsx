import { useState } from "react";
import "./App.css";
import PokemonApplication from "./components/PokemonApplication";

function App() {
  // useState för att kontrollera om Pokemon-applikation ska visas.
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Pokemon Application</h1>
      {/* Toggle knapp för att starta och avsluta applikationen. */}
      <button onClick={() => setShow(!show)}>
        {!show ? "Start Pokemon App" : "End Pokemon App"}
      </button>
      {/* Visar PokemonApplication-komponent medan show är sant */}
      {show && <PokemonApplication />}
    </div>
  );
};
export default App;
