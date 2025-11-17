function Pokemon ({pokemon}) {
    return (
        <div className='pokemonContainer'>
            <h3><strong>Pokemon name:</strong> {pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p><strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p><strong>Weight:</strong> {pokemon.weight}</p>
            <p><strong>Height:</strong> {pokemon.height}</p>
        </div>
    );
};

export default Pokemon