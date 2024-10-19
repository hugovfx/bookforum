import NavBar from '../components/navbar';

export default async function PokemonPage() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await res.json();
  
    const pokemonList = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const pokemonData = await res.json();
  
        return {
          name: pokemon.name,
          image: pokemonData.sprites.front_default,
        };
      })
    );
  
    return (
      <div>
        <NavBar/>
        <h1>Pokémon List</h1>
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>
              <h2>{pokemon.name}</h2>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  