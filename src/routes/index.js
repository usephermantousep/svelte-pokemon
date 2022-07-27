// @ts-nocheck
/** @type {import('@sveltejs/kit').Load} */
export async function GET() {
    const url =
        'https://pokeapi.co/api/v2/pokemon?limit=150';
    const res = await fetch(url);
    const data = await res.json();
    const laodedPokemon = data.results.map((data,index)=>({
        id: index + 1,
        name: data.name,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    }));
    if (res.ok) {
        return {
            body: {
                pokemons: laodedPokemon
            }
        };
    }

    return {
        body: {
            pokemons : [],
            error: 'error'
        }
    };
}