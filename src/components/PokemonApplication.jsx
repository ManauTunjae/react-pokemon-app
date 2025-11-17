import { useState, useEffect } from "react";

const PokemonApplication = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let json = await response.json();
      setPokemons(json.results); // Spara alla pokemon här.
    };
    getPokemons();
  }, []);

  console.log(pokemons);

  return (
    <div>
      <select name="" id="">
        {pokemons.map((pokemon) => {
          <option key={pokemon.name} value={pokemon.url}>
            {pokemon.name}
          </option>
        })}
      </select>
    </div>
  );
};
export default PokemonApplication;
