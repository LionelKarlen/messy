import { goto } from '$app/navigation';
import { currentUser } from '$lib/services/auth.svelte';
import pb from '$lib/services/pb';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	pb.authStore.clear();
	currentUser.model = null;
	goto('/');
};
