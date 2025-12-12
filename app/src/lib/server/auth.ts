import { betterAuth } from 'better-auth';
import { 
	AUTH_SECRET, 
	AUTH_TRUST_HOST,
	GITHUB_ID, 
	GITHUB_SECRET,
	GOOGLE_ID,
	GOOGLE_SECRET,
	AUTH_URL
} from '$env/static/private';
import { validateRequiredEnvVars, parseEnvBoolean } from '$lib/utils/env';

// Validate required environment variables at startup
validateRequiredEnvVars({
	AUTH_SECRET,
	AUTH_TRUST_HOST,
	GITHUB_ID,
	GITHUB_SECRET,
	GOOGLE_ID,
	GOOGLE_SECRET,
	AUTH_URL
});

let _auth: ReturnType<typeof betterAuth> | null = null;

function getAuth() {
	if (!_auth) {
		_auth = betterAuth({
			baseURL: AUTH_URL,
			secret: AUTH_SECRET,
			trustedOrigins: parseEnvBoolean(AUTH_TRUST_HOST) ? [AUTH_URL] : undefined,
			database: {
				// Use in-memory SQLite database (no external DB required)
				// In production, configure a persistent database
				type: 'sqlite',
				url: ':memory:',
			},
			socialProviders: {
				github: {
					clientId: GITHUB_ID,
					clientSecret: GITHUB_SECRET,
				},
				google: {
					clientId: GOOGLE_ID,
					clientSecret: GOOGLE_SECRET,
				},
			},
			session: {
				cookieCache: {
					enabled: true,
					maxAge: 5 * 60, // 5 minutes
				},
			},
		});
	}
	return _auth;
}

export const auth = new Proxy({} as ReturnType<typeof betterAuth>, {
	get: (_, prop) => {
		const authInstance = getAuth();
		return authInstance[prop as keyof typeof authInstance];
	}
});
