import { handle as authHandle } from '$lib/auth/config';
import { AUTH_ENABLED } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { parseEnvBoolean } from '$lib/utils/env';

// Auth middleware - can be disabled for self-hosting
const authMiddleware: Handle = async ({ event, resolve }) => {
	// If authentication is disabled, skip auth handling
	if (!parseEnvBoolean(AUTH_ENABLED)) {
		event.locals.session = null;
		return resolve(event);
	}
	
	// Otherwise, use the auth handler
	return authHandle({ event, resolve });
};

// Session data middleware - makes session available to all pages
const sessionMiddleware: Handle = async ({ event, resolve }) => {
	// Session is already set by authMiddleware
	return resolve(event);
};

// Combine all middleware in sequence
export const handle = sequence(authMiddleware, sessionMiddleware);
