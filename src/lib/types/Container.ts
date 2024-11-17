import type { id } from '$lib/types/Container';

export default interface Container {
	name: string;
	id: id;
}

export interface DbContainer extends Container {
	owner: id;
}
