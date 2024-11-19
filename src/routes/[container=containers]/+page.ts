import pb from '$lib/services/pb';
import type Container from '$lib/types/Container';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	let collection = params.container;
	if (params.container === 'designations') {
		collection = 'locations';
	}

	const containers: Container[] = await pb.collection(collection).getFullList();
	return {
		collection: collection,
		containers: containers
	};
};
