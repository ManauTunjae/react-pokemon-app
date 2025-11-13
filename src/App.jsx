import { useEffect, useState } from 'react'
import './App.css'
import PokemonApplication from './components/PokemonApplication';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let json = await response.json();
      setPokemons(json.results);
    }
    getPokemons();
  }, [])

  return (
    <div>
      <h1>Pokemon Application</h1>
      {pokemons.map(pokemon => <PokemonApplication key={pokemon.id} data={pokemon}/> )}
      <button>Click!</button>
    </div>
  )
}

export default App
