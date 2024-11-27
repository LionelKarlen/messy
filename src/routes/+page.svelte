<script lang="ts">
	import type { PageData } from './$types';
	import RenderCategories from '$lib/components/stuff/RenderCategories.svelte';
	import { Status } from '$lib/types/Status';
	import pb from '$lib/services/pb';

	let { data }: { data: PageData } = $props();
</script>

<div class="overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Image</th>
				<th>Categories</th>
				<th>Location</th>
				<th>Designation</th>
				<th class="flex justify-end">Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each data.stuff as item}
				<tr
					class="hover border-l"
					class:border-l-error={item.status == Status.INCOMPLETE}
					class:border-l-success={item.status == Status.DONE}
					class:border-l-warning={item.status == Status.TRANSIT}
				>
					<th><a href={`/stuff/${item.id}`}>{item.name}</a></th>
					<td>
						{#if item.image}
							<img
								src={pb.buildUrl(`api/files/stuff/${item.id}/${item.image}?thumb=50x50`)}
								alt={`Image of ${item.name}`}
								height="50px"
								width="50px"
							/>
						{/if}
					</td>
					<td class="overflow-x-scroll flex gap-2 max-w-sm"
						><RenderCategories categories={item.categories} /></td
					>
					<td><a href={`/locations/${item.location.id ?? ''}`}>{item.location.name ?? ''}</a></td>
					<td
						><a href={`/locations/${item.designation.id ?? ''}`}>{item.designation.name ?? ''}</a
						></td
					>
					<td class="justify-end flex">
						<a
							href={`/stuff/${item.id}/code`}
							class="btn btn-square btn-ghost"
							aria-label={`Generate code for ${item.name}`}
						>
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
									d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
								/>
							</svg>
						</a>

						<a
							class="btn btn-square btn-ghost"
							href={`/stuff/${item.id}/edit`}
							aria-label={`Edit ${item.name}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
								/>
							</svg>
						</a></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
