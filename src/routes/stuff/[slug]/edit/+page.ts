import pb from '$lib/services/pb';
import { convertStuff } from '$lib/services/stuff.svelte';
import type { Category } from '$lib/types/Category';
import type { Stuff, StuffModel } from '$lib/types/Stuff';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const stuffModel: StuffModel = await pb
		.collection('stuff')
		.getOne(params.slug, { expand: 'categories,location,designation' });
	const stuff: Stuff = convertStuff([stuffModel])[0];
	const categories: Category[] = await pb.collection('categories').getFullList();
	const locations: Location[] = await pb.collection('locations').getFullList();
	return {
		stuff: stuff,
		categories: categories,
		locations: locations
	};
};