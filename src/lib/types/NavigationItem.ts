export default interface NavigationItem {
	name: string;
	href: string;
	icon: string;
	platform: 'mobile' | 'desktop' | 'both';
	isPriviledged: boolean;
	preload?: 'hover' | 'tap' | 'off';
}
