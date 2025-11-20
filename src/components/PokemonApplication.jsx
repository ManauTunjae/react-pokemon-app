import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import pokemonball from "../assets/pokemonball.svg";
import person from "../assets/person.svg";

const PokemonApplication = () => {
  // pokemons lagrar alla 151 pokemon från API:et
  const [pokemons, setPokemons] = useState([]);
  // selectPokemonUrl lagrar URL:en till den valda pokemon
  const [selectPokemonUrl, setSelectPokemonUrl] = useState("");
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
  };

  return (
    <div className="pokemonSection">
      <div className="selectSection">
        <select
          value={selectPokemonUrl}
          onChange={(e) => setSelectPokemonUrl(e.target.value)}
        >
          <option value="">Select a pokemon</option>
          {/* .map() loopar igenom pokemon-arrayen och skapa <option> för varje pokemon */}
          {pokemons.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.url}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <button onClick={handlePokemonData}>Select your Pokemon</button>
        <img style={{width: "350px"}} src={person} alt="person" />
      </div>
      {/* Den här secktionen försvinner när Pokemon.jsx renderar */}
      {!pokemonData && (
        <div className="pokemonContainer">
          <h3><strong>Select a pokemon you like!</strong></h3>
          <img style={{width: '150px'}} src={pokemonball} alt="pokemonBall" />
          <p><strong>Type of selected pokemon.</strong></p>
          <p><strong>Weight of selected pokemon.</strong></p>
          <p><strong>Height of selected pokemon.</strong></p>
        </div>
      )}
      {/* Visar Pokemon-komponent medan pokemonData är sant */}
      {pokemonData && <Pokemon pokemon={pokemonData} />}
    </div>
  );
};

export default PokemonApplication;
