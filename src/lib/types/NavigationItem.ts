export default interface NavigationItem {
	name: string;
	href: string;
	icon: string;
	platform: 'tauri' | 'web' | 'both';
	isPriviledged: boolean;
	preload?: 'hover' | 'tap' | 'off';
	isCore: boolean;
}
