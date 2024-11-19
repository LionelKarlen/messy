<script lang="ts">
	import { page } from '$app/stores';
	import { isLogin } from '$lib/services/auth.svelte';
	import { getCoreNavigationItems, getExtraNavigationItems } from '$lib/services/navigation.svelte';
	import Login from '../Login.svelte';
	import SpacingContainer from './SpacingContainer.svelte';
	let { children } = $props();
</script>

{#if isLogin()}
	<div class="drawer absolute">
		<input id="nav-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<!-- Navbar -->
			<div class="absolute navbar bg-base-200 w-full">
				<div class="flex-none">
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
				<div class="mx-2 flex-1 px-2"><a href="/" class="text-lg">messy</a></div>
			</div>
			<SpacingContainer>
				<!-- Page content here -->
				{@render children()}
			</SpacingContainer>
			<div class="btm-nav bg-base-200">
				{#each getCoreNavigationItems(isLogin()) as item}
					<a
						href={item.href}
						aria-label={item.name}
						class:active={($page.url.pathname.startsWith(item.href) && item.href.length > 1) ||
							$page.url.pathname.length == item.href.length}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
					</a>
				{/each}
			</div>
		</div>
		<div class="drawer-side">
			<label for="nav-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu bg-base-200 min-h-full w-80 p-4 flex flex-col">
				{#each getExtraNavigationItems(isLogin()) as item}
					<li class="justify-self-end">
						<a href={item.href} data-sveltekit-preload-data={item.preload ?? 'hover'}>{item.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{:else}
	<SpacingContainer>
		<Login />
	</SpacingContainer>
{/if}
