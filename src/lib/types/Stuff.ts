import type { Category } from './Category';
import type { Location } from './Location';
import type Container from './Container';
import type { Status } from './Status';

export interface Stuff {
	id: string;
	name?: string;
	categories?: Category[];
	location?: Location;
	designation?: Location;
	image?: string;
	status: Status;
}

export interface StuffModel {
	id: string;
	name?: string;
	expand?: Expand;
	image?: string;
}

export interface Expand {
	categories?: Container[];
	location?: Container;
	designation?: Container;
}

export interface StuffBody {
	id: string;
	name?: string;
	categories?: Category[];
	location?: Location;
	designation?: Location;
	image?: string;
}
