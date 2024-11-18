import pb from '$lib/services/pb';
import type Container from '$lib/types/Container';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const container: Container = await pb.collection(params.container).getOne(params.slug);
	return {
		container: container,
		collection: params.container
	};
};
