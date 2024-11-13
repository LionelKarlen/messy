import { currentUser } from '$lib/services/auth.svelte';
import pb from '$lib/services/pb';

// ref this
// https://github.com/jianyuan/pocketbase-sveltekit-auth/blob/main/src/hooks.client.ts
pb.authStore.loadFromCookie(document.cookie);
pb.authStore.onChange(() => {
	currentUser.model = pb.authStore.model;
	// document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
}, true);
