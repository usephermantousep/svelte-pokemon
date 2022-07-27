<script>
	// @ts-nocheck

	import PokemonCard from '../components/PokemonCard.svelte';
	export let pokemons = [];

	let searchTerm = '';
	let filteredPokemons = [];

	$: {
		if (searchTerm) {
			filteredPokemons = pokemons.filter((pokemon) => {
				return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
			});
		} else {
			filteredPokemons = pokemons;
		}
	}
</script>

<h1 class="text-4xl text-center my-8 uppercase">svelte kit pokemon</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search Pokemon"
	bind:value={searchTerm}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemons as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
