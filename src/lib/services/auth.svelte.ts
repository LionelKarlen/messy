import pb from './pb';

export const currentUser = $state({ model: pb.authStore.model });

const loginState = $derived.by(() => {
	return currentUser.model != null;
});

export function isLogin(): boolean {
	return loginState;
}
