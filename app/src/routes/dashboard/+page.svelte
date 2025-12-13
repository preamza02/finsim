<script lang="ts">
import { Button } from '$lib/components/ui';
import { User } from 'lucide-svelte';
import type { PageData } from './$types';

export let data: PageData;
</script>

<svelte:head>
<title>Dashboard - FinSim</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
<!-- Header spacing -->
<div class="h-16"></div>

<div class="container-custom py-12">
<div class="max-w-4xl mx-auto">
<!-- Welcome Section -->
<div class="bg-white rounded-lg shadow-lg p-8 mb-8">
<div class="flex items-center gap-4 mb-6">
{#if data.user?.image}
<img src={data.user.image} alt={data.user.name || 'User'} class="w-16 h-16 rounded-full" />
{:else}
<div class="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center">
<User class="w-8 h-8 text-white" />
</div>
{/if}
<div>
<h1 class="text-3xl font-bold text-gray-900">Welcome back, {data.user?.name || 'User'}!</h1>
<p class="text-gray-600">{data.user?.email}</p>
</div>
</div>

<div class="border-t border-gray-200 pt-6">
<h2 class="text-xl font-semibold text-gray-900 mb-4">Quick Start</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<Button 
href="/wizard/intro"
class="bg-primary-600 hover:bg-primary-700 text-white h-auto py-6 flex-col items-start"
>
<span class="text-lg font-semibold mb-1">Start Planning</span>
<span class="text-sm opacity-90">Create your first financial plan</span>
</Button>
<Button 
href="/sandbox"
variant="outline"
class="h-auto py-6 flex-col items-start"
>
<span class="text-lg font-semibold mb-1">Try Demo</span>
<span class="text-sm">Explore features in sandbox mode</span>
</Button>
</div>
</div>
</div>

<!-- Coming Soon -->
<div class="bg-white rounded-lg shadow-lg p-8">
<h2 class="text-2xl font-bold text-gray-900 mb-4">Your Dashboard</h2>
<p class="text-gray-600">
Your personalized financial dashboard is coming soon! This will include:
</p>
<ul class="mt-4 space-y-2 text-gray-600">
<li class="flex items-center gap-2">
<span class="text-primary-600">✓</span> Financial projections overview
</li>
<li class="flex items-center gap-2">
<span class="text-primary-600">✓</span> Saved simulations
</li>
<li class="flex items-center gap-2">
<span class="text-primary-600">✓</span> Portfolio analysis
</li>
<li class="flex items-center gap-2">
<span class="text-primary-600">✓</span> Goal tracking
</li>
</ul>
</div>
</div>
</div>
</div>
