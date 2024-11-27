<script lang="ts">
	import StuffForm from '$lib/components/stuff/StuffForm.svelte';
	import type PageData from './types';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-row justify-between">
	<h1 class="text-2xl content-center">Create new Item</h1>
	<div class="flex flex-row"></div>
</div>

<div class="divider"></div>
<StuffForm
	stuff={data.stuff}
	isEdit={false}
	locations={data.locations}
	categories={data.categories}
/>
