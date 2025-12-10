import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
// Redirect to signin if not authenticated
if (!locals.session?.user) {
throw redirect(303, '/auth/signin');
}

return {
user: locals.session.user
};
};
