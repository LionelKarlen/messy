<script lang="ts">
	import { currentUser } from '$lib/services/auth.svelte';
	import Login from '$lib/components/Login.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="w-screen h-screen">
	{#if currentUser.model != null}
		{@render children()}
	{:else}
		<Login />
	{/if}
</div>
