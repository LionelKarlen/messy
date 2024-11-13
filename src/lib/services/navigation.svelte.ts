import type NavigationItem from '$lib/types/NavigationItem';

export function getNavigationItems(isLoggedIn: boolean): NavigationItem[] {
	const commonItems: NavigationItem[] = [
		{
			name: 'Locations',
			href: 'locations',
			icon: '',
			platform: 'both',
			isPriviledged: true
		},
		{
			name: 'Categories',
			href: 'categories',
			icon: '',
			platform: 'both',
			isPriviledged: true
		},
		{
			name: 'Log out',
			href: 'logout',
			icon: '',
			platform: 'both',
			isPriviledged: true,
			preload: 'off'
		},
		{
			name: 'About',
			href: 'about',
			icon: '',
			platform: 'desktop',
			isPriviledged: false
		}
	];
	if (isLoggedIn) {
		return commonItems.filter((v) => v.isPriviledged);
	}
	return commonItems.filter((v) => !v.isPriviledged);
}
