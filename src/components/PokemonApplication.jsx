import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const PokemonApplication = () => {
  // pokemons lagrar alla 151 pokemon från API:et
  const [pokemons, setPokemons] = useState([]);
  // selectPokemonUrl lagrar URL:en till den valda pokemon
  const [selectPokemonUrl, setSelectPokemonUrl] = useState('');
  // pokemonData lagrar information om den valda pokemon
  const [pokemonData, setPokemonData] = useState(null);

  // Hämtar alla pokemon från API
  useEffect(() => {
    const getPokemons = async () => {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let json = await response.json();
      setPokemons(json.results); // Spara alla pokemon här.
    };
    getPokemons();
  }, []);
 
  // Funktion för att hämta informaton på den valda pokemon
  const handlePokemonData = async () => {
    let response = await fetch(selectPokemonUrl);
    let json = await response.json();
    setPokemonData(json);
  }

  return (
    <div>
      <select value={selectPokemonUrl} onChange={(e) => setSelectPokemonUrl(e.target.value)}>
        <option value="">Select a pokemon</option>
        {/* .map() loopar igenom pokemon-arrayen och skapa <option> för varje pokemon */}
        {pokemons.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.url}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={handlePokemonData}>Select Pokemon</button>
      {/* Visar Pokemon-komponent medan pokemonData är sant */}
      {pokemonData && <Pokemon pokemon={pokemonData} />}
    </div>
  );
};

export default PokemonApplication;
