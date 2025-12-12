import { createAuthClient } from 'better-auth/client';
import { goto } from '$app/navigation';

export const authClient = createAuthClient({
baseURL: typeof window !== 'undefined' ? window.location.origin : '',
});

// Helper functions for easier use
export const signIn = {
github: async (callbackURL?: string) => {
const redirectTo = callbackURL || '/';
await authClient.signIn.social({
provider: 'github',
callbackURL: redirectTo,
});
},
google: async (callbackURL?: string) => {
const redirectTo = callbackURL || '/';
await authClient.signIn.social({
provider: 'google',
callbackURL: redirectTo,
});
},
};

export const signOut = async () => {
await authClient.signOut();
await goto('/');
};

export { authClient as auth };
