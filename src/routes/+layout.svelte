<script lang="ts">
	import { isWeb } from '$lib/services/meta';
	import WebLayout from '$lib/components/layouts/WebLayout.svelte';
	import AppLayout from '$lib/components/layouts/AppLayout.svelte';
	import '../app.css';
	let { children } = $props();
</script>

{#if !isWeb}
	<WebLayout>
		{@render children()}
	</WebLayout>
{:else}
	<AppLayout>
		{@render children()}
	</AppLayout>
{/if}
