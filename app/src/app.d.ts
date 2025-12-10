/// <reference types="@sveltejs/kit" />

declare global {
	namespace App {
		interface Locals {
			session: import('@auth/core/types').Session | null;
		}
		interface PageData {
			session: import('@auth/core/types').Session | null;
		}
	}
}

export {};
