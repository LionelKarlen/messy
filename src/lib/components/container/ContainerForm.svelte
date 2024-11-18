<script lang="ts">
	import type Container from '$lib/types/Container';
	import pb from '$lib/services/pb';
	import { goto } from '$app/navigation';
	import { currentUser } from '$lib/services/auth.svelte';

	let {
		container,
		collection,
		isEdit
	}: { container: Container; collection: string; isEdit: boolean } = $props();
	let containerName = $state(container.name);

	async function handleSubmit() {
		if (isEdit) {
			await pb
				.collection(collection)
				.update(container.id, { name: containerName, owner: currentUser.model!.id ?? '' });
		} else {
			await pb
				.collection(collection)
				.create({ name: containerName, owner: currentUser.model!.id ?? '' });
		}

		// TODO: error handle and show feedback toast
		goto(`/${collection}`);
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

		<input type="text" class="grow" bind:value={containerName} placeholder="Name" />
	</label>
	<div class="flex flex-row grow justify-end mt-3">
		<button class="btn btn-primary btn-wide">Submit</button>
	</div>
</form>
