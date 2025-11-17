import { useState } from "react";
import "./App.css";
import PokemonApplication from "./components/PokemonApplication";

function App() {
  // useState show och setShow för Start Pokemon App knappen.
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Pokemon Application</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Start Pokemon App" : "End Pokemon App"}
      </button>
      {show && <PokemonApplication />}
    </div>
  );
}

export default App;
