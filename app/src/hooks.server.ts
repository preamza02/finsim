import { auth } from '$lib/server/auth';
import { AUTH_ENABLED } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { parseEnvBoolean } from '$lib/utils/env';

// Auth middleware - can be disabled for self-hosting
const authMiddleware: Handle = async ({ event, resolve }) => {
	// If authentication is disabled, skip auth handling
	if (!parseEnvBoolean(AUTH_ENABLED)) {
		event.locals.session = null;
		event.locals.user = null;
		return resolve(event);
	}
	
	// Get session from Better Auth
	const session = await auth.api.getSession({
		headers: event.request.headers,
	});
	
	event.locals.session = session;
	event.locals.user = session?.user ?? null;
	
	return resolve(event);
};

// Combine all middleware in sequence
export const handle = authMiddleware;
