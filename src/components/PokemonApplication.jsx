import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const PokemonApplication = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectPokemonUrl, setSelectPokemonUrl] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let json = await response.json();
      setPokemons(json.results); // Spara alla pokemon här.
    };
    getPokemons();
  }, []);

  const handlePokemonData = async () => {
    let response = await fetch(selectPokemonUrl);
    let json = await response.json();
    setPokemonData(json);
  }

  return (
    <div>
      <select value={selectPokemonUrl} onChange={(e) => setSelectPokemonUrl(e.target.value)}>
        {pokemons.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.url}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={handlePokemonData}>Select Pokemon</button>
      {pokemonData && <Pokemon pokemon={pokemonData} />}
    </div>
  );
};

export default PokemonApplication;
