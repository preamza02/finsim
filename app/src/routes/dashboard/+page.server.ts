import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	// Redirect to signin if not authenticated, preserving the current URL
	if (!locals.session?.user) {
		const callbackUrl = encodeURIComponent(url.pathname + url.search);
		throw redirect(303, `/auth/signin?callbackUrl=${callbackUrl}`);
	}
	
	return {
		user: locals.session.user
	};
};
