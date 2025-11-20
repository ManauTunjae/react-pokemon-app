import { useState } from "react";
import "./App.css";
import PokemonApplication from "./components/PokemonApplication";
import pokemon from "./assets/pokemon.svg";

function App() {
  // useState för att kontrollera om Pokemon-applikation ska visas.
  const [show, setShow] = useState(false);

  return (
    <div className='startPage'>
      {/* Toggle knapp för att starta och avsluta applikationen. */}
      <img style={{width: "400px"}} src={pokemon} alt="pokemon" />
      <br />
      <button className='startBtn' onClick={() => setShow(!show)}>
        {!show ? "Start Pokemon App" : "End Pokemon App"}
      </button>
      {/* Visar PokemonApplication-komponent medan show är sant */}
      {show && <PokemonApplication />}
    </div>
  );
};
export default App;
