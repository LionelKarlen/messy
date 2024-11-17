<script lang="ts">
	let { children } = $props();
</script>

<div class="flex flex-row h-screen v-screen justify-center">
	<div
		class="flex flex-col justify-start px-4 pt-20 py-2 md:px-0 md:pb-0 h-full w-full md:w-3/4 2xl:w-1/2"
	>
		{@render children()}
	</div>
</div>
