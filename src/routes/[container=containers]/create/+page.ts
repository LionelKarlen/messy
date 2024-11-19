import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	let collection = params.container;
	if (params.container === 'designations') {
		collection = 'locations';
	}
	return {
		collection: collection
	};
};
