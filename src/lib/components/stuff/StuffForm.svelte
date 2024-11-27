<script lang="ts">
	import pb from '$lib/services/pb';
	import type { Stuff } from '$lib/types/Stuff';
	import type { Container } from '$lib/types/Container';
	import type { Category } from '$lib/types/Category';
	import SelectOne from '$lib/components/stuff/SelectOne.svelte';
	import { goto } from '$app/navigation';
	import { currentUser } from '$lib/services/auth.svelte';
	import SelectMany from './SelectMany.svelte';

	let {
		stuff,
		isEdit,
		locations,
		categories
	}: { stuff: Stuff; isEdit: boolean; locations: Container[]; categories: Container[] } = $props();

	let name = $state(stuff.name);
	let files: FileList = $state();
	let image = $state(stuff.image);
	let location = $state(stuff.location.id);
	let designation = $state(stuff.designation.id);
	let tmpCategories = $state(stuff.categories.map((v: Category) => v.id));

	async function handleSubmit() {
		if (isEdit) {
			await pb.collection('stuff').update(stuff.id, {
				name: name,
				image: (files ?? [undefined])[0],
				location: location,
				designation: designation,
				categories: tmpCategories,
				owner: currentUser.model!.id ?? ''
			});
		} else {
			await pb.collection('stuff').create({
				name: name,
				image: (files ?? [undefined])[0],
				location: location,
				designation: designation,
				categories: tmpCategories,
				owner: currentUser.model!.id ?? ''
			});
		}

		// TODO: error handle and show feedback toast
		goto('/');
	}
</script>

<form onsubmit={async () => await handleSubmit()} class="flex flex-col gap-2">
	<label class="input input-bordered flex items-center gap-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
			/>
		</svg>

		<input type="text" class="grow" bind:value={name} placeholder="Name" />
	</label>
	<label class="input input-bordered flex items-center gap-2">
		{#if image}
			<img
				src={pb.files.getUrl({ collectionName: 'stuff', id: stuff.id }, image, {
					thumb: '100x100'
				})}
				height="50"
				width="50"
				alt=""
			/>
		{/if}
		<input type="file" class="file-input file-input-ghost w-full" bind:files />
	</label>
	<SelectMany options={categories} placeholder="Categories" bind:value={tmpCategories} />
	<SelectOne options={locations} placeholder="Location" bind:value={location} />
	<SelectOne options={locations} placeholder="Designation" bind:value={designation} />
	<div class="flex flex-row grow justify-end mt-3">
		<button class="btn btn-primary btn-wide">Submit</button>
	</div>
</form>
