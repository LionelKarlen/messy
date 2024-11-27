<script lang="ts">
	import type { Container } from '$lib/types/Container';
	let {
		options,
		placeholder,
		value = $bindable()
	}: { options: Container[]; placeholder: string; value: string } = $props();
</script>

<label class="input input-bordered flex items-center gap-2">
	<select
		bind:value
		class="select select-ghost grow bg-transparent pl-0 text-base text-current focus:border-none focus:outline-none"
	>
		<option disabled selected value="">{placeholder}</option>
		{#each options as item}
			<option value={item.id}>{item.name}</option>
		{/each}
	</select>
	<button
		type="button"
		aria-label="Clear"
		disabled={value == ''}
		class="flex flex-col items-center justify-center"
		onclick={() => (value = '')}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
		</svg>
	</button>
</label>
