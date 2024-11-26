import pb from '$lib/services/pb';
import { convertStuff } from '$lib/services/stuff.svelte';
import type { Stuff, StuffModel } from '$lib/types/Stuff';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const stuffModel: StuffModel = await pb
		.collection('stuff')
		.getOne(params.slug, { expand: 'categories,location,designation' });
	console.log(stuffModel);
	const stuff: Stuff = convertStuff([stuffModel])[0];
	console.log(stuff);
	return {
		stuff: stuff
	};
};
