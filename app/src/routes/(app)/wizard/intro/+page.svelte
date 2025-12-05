<script>
    import { plan } from "$lib/stores/plan";
</script>

<div class="text-center">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">
        Welcome to Your Financial Plan
    </h1>
    <p class="text-lg text-gray-600 mb-8">
        Let's build a comprehensive financial model for your future. We'll ask
        you a few questions about your life, income, and goals.
        <br />
        Your data stays in your browser.
    </p>

    <div class="space-y-4">
        <div
            class="flex items-center justify-center gap-4 text-left max-w-md mx-auto"
        >
            <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold"
            >
                1
            </div>
            <div>
                <h3 class="font-medium text-gray-900">Personal Info</h3>
                <p class="text-sm text-gray-500">Who is this plan for?</p>
            </div>
        </div>
        <div
            class="flex items-center justify-center gap-4 text-left max-w-md mx-auto"
        >
            <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold"
            >
                2
            </div>
            <div>
                <h3 class="font-medium text-gray-900">Financials</h3>
                <p class="text-sm text-gray-500">
                    Income, expenses, assets, and debts.
                </p>
            </div>
        </div>
        <div
            class="flex items-center justify-center gap-4 text-left max-w-md mx-auto"
        >
            <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold"
            >
                3
            </div>
            <div>
                <h3 class="font-medium text-gray-900">Goals</h3>
                <p class="text-sm text-gray-500">When do you want to retire?</p>
            </div>
        </div>
    </div>

    <div class="mt-10">
        <a
            href="/wizard/personal"
            class="btn-primary inline-flex items-center px-6 py-3 text-lg"
            on:click={() => plan.reset()}
        >
            Let's Get Started
        </a>
    </div>
</div>
