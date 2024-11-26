import pb from '$lib/services/pb';
import { convertStuff } from '$lib/services/stuff.svelte';
import type { Stuff, StuffModel } from '$lib/types/Stuff';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const stuffModels: StuffModel[] = await pb
		.collection('stuff')
		.getFullList({ expand: 'categories,location,designation' });
	const stuff: Stuff[] = convertStuff(stuffModels);
	return {
		stuff: stuff
	};
};
