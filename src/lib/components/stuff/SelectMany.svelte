<script lang="ts">
	import type Container from '$lib/types/Container';
	import { SvelteSet } from 'svelte/reactivity';

	let {
		options,
		placeholder,
		value = $bindable()
	}: { options: Container[]; placeholder: string; value: string[] } = $props();

	$effect(() => {
		updateSelected(value);
	});

	let localOptions = options.map((v) => {
		return {
			name: v.name,
			value: v.id
		};
	});
	let selected: SvelteSet<Option> = $state(setSelected());

	function setSelected(): SvelteSet<Option> {
		const tmpSelected = new SvelteSet<Option>();
		const valueSet = new Set<string>(value);
		for (const entry of localOptions) {
			if (valueSet.has(entry.value)) {
				tmpSelected.add(entry);
			}
		}
		console.log(tmpSelected);
		console.log(value);
		return tmpSelected;
	}

	function updateValue(selected: Set<Option>) {
		const arr: string[] = [];
		selected.forEach((v) => arr.push(v.value));
		value = arr;
	}

	function updateSelected(value: string[]) {
		const valueSet = new Set<string>(value);
		for (const entry of localOptions) {
			if (valueSet.has(entry.value)) {
				selected.add(entry);
			}
		}
	}

	interface Option {
		name: string;
		value: string;
	}

	function selectionAdd(opt: Option) {
		selected.add(opt);
		selected = selected;
		updateValue(selected);
	}

	function selectionDelete(opt: Option) {
		selected.delete(opt);
		selected = selected;
		updateValue(selected);
	}

	function selectionClear() {
		selected.clear();
		selected = selected;
		updateValue(selected);
	}
</script>

<div class="input input-bordered flex items-center gap-2">
	<div class="dropdown w-full">
		<div
			tabindex="0"
			role="button"
			class="select select-ghost flex w-full grow flex-wrap items-center gap-2 px-0 focus:border-x-0 focus:outline-none"
		>
			{#if selected.size > 0}
				{#each selected as item}
					<div class="badge badge-secondary">
						{item.name}
						<button
							type="button"
							aria-label="Remove from selection"
							class="flex items-center justify-between"
							onclick={() => selectionDelete(item)}
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
					</div>
				{/each}
			{:else}
				<p class="text-inherit">{placeholder}</p>
			{/if}
		</div>
		<ul class="menu dropdown-content z-[1] w-full rounded-box bg-base-100 p-2 shadow">
			{#each localOptions as opt}
				<li><button type="button" onclick={() => selectionAdd(opt)}>{opt.name}</button></li>
			{/each}
		</ul>
	</div>
	<button
		type="button"
		aria-label="Clear selection"
		disabled={selected.size == 0}
		class="flex flex-col items-center justify-center"
		onclick={selectionClear}
		><svg
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
</div>
