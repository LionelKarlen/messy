<script lang="ts">
	import type { Category } from '$lib/types/Category';

	let { categories }: { categories: Category[] } = $props();
</script>

{#each categories as category}
	<a class="badge badge-lg" href={`/categories/${category.id}`}>
		{category.name}
	</a>
{/each}
