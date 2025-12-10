import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import { 
	AUTH_SECRET, 
	AUTH_TRUST_HOST,
	GITHUB_ID, 
	GITHUB_SECRET,
	GOOGLE_ID,
	GOOGLE_SECRET
} from '$env/static/private';
import { validateRequiredEnvVars, parseEnvBoolean } from '$lib/utils/env';

// Validate required environment variables at startup
validateRequiredEnvVars({
	AUTH_SECRET,
	AUTH_TRUST_HOST,
	GITHUB_ID,
	GITHUB_SECRET,
	GOOGLE_ID,
	GOOGLE_SECRET
});

export const { handle, signIn, signOut } = SvelteKitAuth({
	trustHost: parseEnvBoolean(AUTH_TRUST_HOST),
	secret: AUTH_SECRET,
	providers: [
		GitHub({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET
		}),
		Google({
			clientId: GOOGLE_ID,
			clientSecret: GOOGLE_SECRET
		})
	],
	callbacks: {
		async session({ session, token }) {
			if (token && session.user) {
				session.user.id = token.sub as string;
			}
			return session;
		}
	},
	pages: {
		signIn: '/auth/signin',
		error: '/auth/error'
	}
});
