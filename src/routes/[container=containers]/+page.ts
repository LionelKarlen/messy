import pb from '$lib/services/pb';
import type Container from '$lib/types/Container';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const containers: Container[] = await pb.collection(params.container).getFullList();
	return {
		name: params.container,
		containers: containers
	};
};
