import pb from '$lib/services/pb';
import type Container from '$lib/types/Container';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	let collection = params.container;
	if (params.container === 'designations') {
		collection = 'locations';
	}
	const container: Container = await pb.collection(collection).getOne(params.slug);
	// TODO: Request all relevant stuff items from db
	const items = [];
	return {
		container: container,
		items: items
	};
};
