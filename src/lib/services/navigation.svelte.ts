import type NavigationItem from '$lib/types/NavigationItem';

export function getNavigationItems(isLoggedIn: boolean, isWeb: boolean = true): NavigationItem[] {
	const commonItems: NavigationItem[] = [
		{
			name: 'Scan',
			href: '/scan',
			icon: '',
			platform: 'tauri',
			isPriviledged: true,
			isCore: true
		},
		{
			name: 'Home',
			href: '/',
			icon: '',
			platform: 'tauri',
			isPriviledged: true,
			isCore: true
		},
		{
			name: 'Locations',
			href: '/locations',
			icon: '',
			platform: 'both',
			isPriviledged: true,
			isCore: true
		},
		{
			name: 'Categories',
			href: '/categories',
			icon: '',
			platform: 'both',
			isPriviledged: true,
			isCore: true
		},
		{
			name: 'Designations',
			href: '/designations',
			icon: '',
			platform: 'both',
			isPriviledged: true,
			isCore: false
		},
		{
			name: 'Log out',
			href: '/logout',
			icon: '',
			platform: 'both',
			isPriviledged: true,
			preload: 'off',
			isCore: false
		},
		{
			name: 'About',
			href: '/about',
			icon: '',
			platform: 'web',
			isPriviledged: false,
			isCore: false
		}
	];
	let platformIcons: NavigationItem[] = [];
	if (isLoggedIn) {
		platformIcons = commonItems.filter((v) => v.isPriviledged);
	} else {
		platformIcons = commonItems.filter((v) => !v.isPriviledged);
	}

	if (isWeb) {
		return platformIcons.filter((v) => v.platform != 'tauri');
	}
	return platformIcons.filter((v) => v.platform != 'web');
}

export function getCoreNavigationItems(isLoggedIn: boolean): NavigationItem[] {
	return getNavigationItems(isLoggedIn, false).filter((v) => v.isCore);
}

export function getExtraNavigationItems(isLoggedIn: boolean): NavigationItem[] {
	return getNavigationItems(isLoggedIn, false).filter((v) => !v.isCore);
}
