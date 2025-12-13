<script lang="ts">
import { page } from '$app/stores';
import { Button } from '$lib/components/ui';

$: error = $page.url.searchParams.get('error') || 'An unknown error occurred';
</script>

<svelte:head>
<title>Authentication Error - FinSim</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
<div class="max-w-md w-full">
<div class="bg-white rounded-lg shadow-lg p-8">
<div class="text-center mb-6">
<div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
<svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
</svg>
</div>
<h1 class="text-2xl font-bold text-gray-900 mb-2">Authentication Error</h1>
<p class="text-gray-600 mb-4">
{error}
</p>
</div>

<div class="space-y-3">
<Button 
href="/auth/signin"
class="w-full bg-primary-600 hover:bg-primary-700 text-white"
>
Try Again
</Button>
<Button 
href="/"
variant="outline"
class="w-full"
>
Back to Home
</Button>
</div>
</div>
</div>
</div>
