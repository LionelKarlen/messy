<script lang="ts">
	import RenderCategories from '$lib/components/stuff/RenderCategories.svelte';
	import pb from '$lib/services/pb';
	import { Status } from '$lib/types/Status';
	import type { Stuff } from '$lib/types/Stuff';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let stuff: Stuff = data.stuff;
</script>

<div class="flex flex-row justify-between">
	<div class="flex flex-row content-center">
		<h1 class="text-2xl content-center">
			{stuff.name} -
			<span
				class:text-error={stuff.status == Status.INCOMPLETE}
				class:text-success={stuff.status == Status.DONE}
				class:text-warning={stuff.status == Status.TRANSIT}>{stuff.status}</span
			>
		</h1>
	</div>
	<div class="flex flex-row">
		<a
			href={`${stuff.id}/code`}
			class="btn btn-square btn-ghost"
			aria-label={`Generate code for ${stuff.name}`}
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
		<a href={`${stuff.id}/edit`} class="btn btn-square btn-ghost" aria-label={`Edit ${stuff.name}`}>
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
					d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
				/>
			</svg>
		</a>
	</div>
</div>

<div class="divider"></div>
<div class="flex flex-row justify-center w-full">
	<div class="flex flex-col gap-4">
		<div class="flex flex-row">
			<a href={pb.buildUrl(`api/files/stuff/${stuff.id}/${stuff.image}`)} target="_blank">
				<img
					src={pb.buildUrl(`api/files/stuff/${stuff.id}/${stuff.image}`)}
					alt={'Image of ' + stuff.name}
					height="300"
					width="300"
				/>
			</a>
		</div>
		<div class="flex flex-row flex-wrap gap-4">
			<RenderCategories categories={stuff.categories ?? []} />
		</div>
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr>
						<th>Location</th>
						<th>Designation</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{stuff.location?.name}</td>
						<td>{stuff.designation?.name}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
