<script lang="ts">
	import { getNavigationItems } from '$lib/services/navigation.svelte';
	import { currentUser, isLogin } from '$lib/services/auth.svelte';
	import SpacingContainer from '$lib/components/layouts/SpacingContainer.svelte';
	import Login from '$lib/components/Login.svelte';
	let { children } = $props();
</script>

<div class="drawer absolute">
	<input id="nav-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content bg-base-100 flex flex-col">
		<!-- Navbar -->
		<div class="navbar absolute w-full">
			<div class="flex-1">
				<a class="btn btn-ghost text-xl" href="/"
					><img src="messy_tmp_icon.svg" alt="messy logo" height="25px" width="25px" /> messy</a
				>
			</div>

			<!-- Mobile drawer button -->
			<div class="flex-none lg:hidden">
				<label for="nav-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>

			<!-- Desktop nav items -->
			<div class="hidden flex-none lg:block">
				<ul class="menu menu-horizontal px-1">
					{#each getNavigationItems(currentUser.model != null) as item}
						<li>
							<a href={item.href} data-sveltekit-preload-data={item.preload ?? 'hover'}
								>{item.name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<SpacingContainer>
			{#if isLogin()}
				{@render children()}
			{:else}
				<Login />
			{/if}
		</SpacingContainer>
	</div>
	<div class="drawer-side">
		<label for="nav-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 min-h-full w-80 p-4">
			{#each getNavigationItems(currentUser.model != null) as item}
				<li>
					<a href={item.href} data-sveltekit-preload-data={item.preload ?? 'hover'}>{item.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.drawer-side {
		overflow: hidden;
	}
	.drawer-overlay {
		overflow: hidden;
	}
</style>
