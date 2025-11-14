import { useState } from "react";

const PokemonApplication = ({data}) => {
    const [showPokemons, setShowPokemons] = useState(true);
  return (
      <div>
        <h2>Name: {data.name}</h2>
      </div>
  ) 
}
export default PokemonApplication;
