import { AUTH_ENABLED } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import { parseEnvBoolean } from '$lib/utils/env';

// Auth middleware - can be disabled for self-hosting
const authMiddleware: Handle = async ({ event, resolve }) => {
	// If authentication is disabled, skip auth handling
	if (!parseEnvBoolean(AUTH_ENABLED)) {
		event.locals.session = null;
		event.locals.user = null;
		return resolve(event);
	}
	
	// Dynamically import auth only when needed to avoid initialization errors
	try {
		const { auth } = await import('$lib/server/auth');
		
		// Get session from Better Auth
		const session = await auth.api.getSession({
			headers: event.request.headers,
		});
		
		event.locals.session = session;
		event.locals.user = session?.user ?? null;
	} catch (error) {
		// If auth fails to initialize (e.g., missing env vars), log error and continue without auth
		console.error('\n⚠️  Authentication Error:');
		console.error('Authentication is enabled (AUTH_ENABLED=true) but failed to initialize.');
		if (error instanceof Error) {
			console.error(error.message);
		}
		console.error('\nTo fix this:');
		console.error('1. Copy .env.example to .env');
		console.error('2. Configure OAuth credentials (see docs/QUICK_START_CREDENTIALS.md)');
		console.error('3. Or set AUTH_ENABLED=false to disable authentication\n');
		
		event.locals.session = null;
		event.locals.user = null;
	}
	
	return resolve(event);
};

// Combine all middleware in sequence
export const handle = authMiddleware;
