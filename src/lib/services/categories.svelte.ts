import pb from './pb';
import type { Category } from '$lib/types/Category';
import StateWrapper from './stateWrapper.svelte';

export const categories: StateWrapper<Category[]> = $state(
	new StateWrapper(await pb.collection('categories').getFullList())
);
