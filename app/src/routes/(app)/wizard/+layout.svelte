<script>
    import { page } from "$app/stores";
</script>

<div class="min-h-screen bg-gray-50 flex flex-col">
    <header class="bg-white shadow-sm">
        <div
            class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        >
            <a href="/" class="font-bold text-xl text-primary-600">FinSim</a>
            <div class="text-sm text-gray-500">
                Step {$page.url.pathname.split("/").pop()}
            </div>
        </div>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <div class="bg-white shadow rounded-lg p-6 sm:p-8">
            <slot />
        </div>
    </main>
</div>
