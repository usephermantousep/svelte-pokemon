// @ts-nocheck
/** @type {import('@sveltejs/kit').Load} */
export async function GET(page) {
    const id = page.params.id;
    console.log(id);
    const url =
        `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok) {
        return {
            body: {
                pokemon: data
            }
        };
    }

    return {
        body: {
            pokemons: [],
            error: 'error'
        }
    };
}