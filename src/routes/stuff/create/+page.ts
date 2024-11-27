import pb from '$lib/services/pb';
import { convertStuff } from '$lib/services/stuff.svelte';
import type { Category } from '$lib/types/Category';
import type { Stuff, StuffModel } from '$lib/types/Stuff';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const stuffM: StuffModel = {
		id: ''
	};
	const stuff: Stuff = convertStuff([stuffM])[0];
	const categories: Category[] = await pb.collection('categories').getFullList();
	const locations: Location[] = await pb.collection('locations').getFullList();
	return {
		stuff: stuff,
		categories: categories,
		locations: locations
	};
};
