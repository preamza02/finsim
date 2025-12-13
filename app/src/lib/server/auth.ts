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
import { parseEnvBoolean } from '$lib/utils/env';
import Database from "better-sqlite3";

let _auth: ReturnType<typeof betterAuth> | null = null;

function getAuth() {
	if (!_auth) {
		// Validate required environment variables
		const requiredVars = {
			AUTH_SECRET,
			AUTH_URL,
			GITHUB_ID,
			GITHUB_SECRET,
			GOOGLE_ID,
			GOOGLE_SECRET
		};
		
		const missingVars = Object.entries(requiredVars)
			.filter(([_, value]) => !value || value.includes('your-') || value.includes('here'))
			.map(([key]) => key);
		
		if (missingVars.length > 0) {
			throw new Error(
				`Missing or invalid authentication environment variables: ${missingVars.join(', ')}.\n` +
				`Please configure these in your .env file. See .env.example for reference.\n` +
				`To disable authentication entirely, set AUTH_ENABLED=false in your .env file.`
			);
		}
		
		_auth = betterAuth({
			baseURL: AUTH_URL,
			secret: AUTH_SECRET,
			trustedOrigins: parseEnvBoolean(AUTH_TRUST_HOST) ? [AUTH_URL] : undefined,
			database: {
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
