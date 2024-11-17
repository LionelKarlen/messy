import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string): param is 'locations' | 'categories' | 'designations' => {
	return param === 'locations' || param === 'categories' || param === 'designations';
}) satisfies ParamMatcher;
