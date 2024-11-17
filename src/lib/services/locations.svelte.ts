import pb from './pb';
import type { Location } from '$lib/types/Location';
import StateWrapper from './stateWrapper.svelte';

export const locations: StateWrapper<Location[]> = $state(
	new StateWrapper(await pb.collection('locations').getFullList())
);
