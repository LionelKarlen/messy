<script lang="ts">
	import { currentUser } from '$lib/services/auth.svelte';
	import '../app.css';
	let { children } = $props();
</script>

{#if currentUser.model != null}
	{@render children()}
{:else}
	<!-- TODO: Login -->
{/if}
