<script lang="ts">
	import ContainerForm from '$lib/components/container/ContainerForm.svelte';

	let { data } = $props();
</script>

<div class="flex flex-row justify-between">
	<h1 class="text-2xl content-center">
		Create new {data.collection}
	</h1>
</div>

<div class="divider"></div>
<ContainerForm container={{ name: '', id: '' }} collection={data.collection} isEdit={false} />
