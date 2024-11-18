import pb from '$lib/services/pb';
import type Container from '$lib/types/Container';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const container: Container = await pb.collection(params.container).getOne(params.slug);
	// TODO: Request all relevant stuff items from db
	const items = [];
	return {
		container: container,
		items: items
	};
};
