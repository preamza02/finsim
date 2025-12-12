/// <reference types="@sveltejs/kit" />

// Better Auth session types
interface Session {
	user: {
		id: string;
		name?: string | null;
		email?: string | null;
		image?: string | null;
		emailVerified?: boolean;
	};
	session: {
		id: string;
		userId: string;
		expiresAt: Date;
		token: string;
		ipAddress?: string;
		userAgent?: string;
	};
}

declare global {
	namespace App {
		interface Locals {
			session: Session | null;
			user: Session['user'] | null;
		}
		interface PageData {
			session: Session | null;
			user: Session['user'] | null;
		}
	}
}

export {};
