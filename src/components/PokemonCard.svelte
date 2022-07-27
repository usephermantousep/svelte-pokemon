<script>
	// @ts-nocheck
	import { blur } from 'svelte/transition';
	export let pokemon;
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${pokemon.id}`}
	transition:blur
>
	<img class="w-40 h-40" src={pokemon.url} alt={pokemon.name} />
	<h2 class="uppercase text-xl">{pokemon.id}. {pokemon.name}</h2>
</a>
