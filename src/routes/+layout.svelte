<script lang="ts">
	import { currentUser } from '$lib/services/auth.svelte';
	import { getNavigationItems } from '$lib/services/navigation.svelte';
	import Login from '$lib/components/Login.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="navbar bg-base-100 absolute">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/"
			><img src="messy_tmp_icon.svg" alt="messy logo" height="25px" width="25px" /> messy</a
		>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			{#each getNavigationItems(currentUser.model != null) as item}
				<li>
					<a href={item.href} data-sveltekit-preload-data={item.preload ?? 'hover'}>{item.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
<div class="w-screen h-screen">
	{#if currentUser.model != null}
		{@render children()}
	{:else}
		<Login />
	{/if}
</div>
