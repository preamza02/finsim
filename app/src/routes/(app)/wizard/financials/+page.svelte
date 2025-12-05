<script lang="ts">
    import { plan } from "$lib/stores/plan";
    import { goto } from "$app/navigation";

    let financials = $plan.financials;
    let currency = $plan.config.currency;

    function handleSubmit() {
        plan.update((p) => ({
            ...p,
            financials,
        }));
        goto("/wizard/goals");
    }
</script>

<h2 class="text-2xl font-bold text-gray-900 mb-6">Financial Snapshot</h2>
<p class="text-gray-600 mb-8">
    Enter your current annual numbers. Estimates are fine.
</p>

<form on:submit|preventDefault={handleSubmit} class="space-y-8">
    <!-- Income -->
    <div class="bg-green-50 p-6 rounded-lg border border-green-100">
        <h3 class="text-lg font-medium text-green-900 mb-4">Annual Income</h3>
        <div class="grid gap-4 md:grid-cols-2">
            <div>
                <label class="block text-sm font-medium text-gray-700"
                    >Salary (Pre-tax)</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                        <span class="text-gray-500 sm:text-sm">{currency}</span>
                    </div>
                    <input
                        type="number"
                        bind:value={financials.income.salary}
                        class="pl-12 block w-full rounded-md border-gray-300 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700"
                    >Side Hustle / Other</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                        <span class="text-gray-500 sm:text-sm">{currency}</span>
                    </div>
                    <input
                        type="number"
                        bind:value={financials.income.sideHustle}
                        class="pl-12 block w-full rounded-md border-gray-300 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- Expenses -->
    <div class="bg-red-50 p-6 rounded-lg border border-red-100">
        <h3 class="text-lg font-medium text-red-900 mb-4">Annual Expenses</h3>
        <div class="grid gap-4 md:grid-cols-3">
            <div>
                <label class="block text-sm font-medium text-gray-700"
                    >Living (Food, Transport)</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                        <span class="text-gray-500 sm:text-sm">{currency}</span>
                    </div>
                    <input
                        type="number"
                        bind:value={financials.expenses.living}
                        class="pl-12 block w-full rounded-md border-gray-300 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700"
                    >Rent / Housing</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                        <span class="text-gray-500 sm:text-sm">{currency}</span>
                    </div>
                    <input
                        type="number"
                        bind:value={financials.expenses.rent}
                        class="pl-12 block w-full rounded-md border-gray-300 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700"
                    >Utilities & Bills</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                        <span class="text-gray-500 sm:text-sm">{currency}</span>
                    </div>
                    <input
                        type="number"
                        bind:value={financials.expenses.utilities}
                        class="pl-12 block w-full rounded-md border-gray-300 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- Assets -->
    <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 class="text-lg font-medium text-blue-900 mb-4">Current Assets</h3>
        <div class="grid gap-4 md:grid-cols-3">
            <div>
                <label class="block text-sm font-medium text-gray-700"
                    >Cash / Savings</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                        <span class="text-gray-500 sm:text-sm">{currency}</span>
                    </div>
                    <input
                        type="number"
                        bind:value={financials.assets.cash}
                        class="pl-12 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700"
                    >Investments / Brokerage</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                        <span class="text-gray-500 sm:text-sm">{currency}</span>
                    </div>
                    <input
                        type="number"
                        bind:value={financials.assets.brokerage}
                        class="pl-12 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700"
                    >Real Estate Equity</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                        <span class="text-gray-500 sm:text-sm">{currency}</span>
                    </div>
                    <input
                        type="number"
                        bind:value={financials.assets.realEstate}
                        class="pl-12 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- Liabilities -->
    <div class="bg-gray-100 p-6 rounded-lg border border-gray-200">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Liabilities</h3>
        <div class="grid gap-4 md:grid-cols-2">
            <div>
                <label class="block text-sm font-medium text-gray-700"
                    >Mortgage Balance</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                        <span class="text-gray-500 sm:text-sm">{currency}</span>
                    </div>
                    <input
                        type="number"
                        bind:value={financials.liabilities.mortgage}
                        class="pl-12 block w-full rounded-md border-gray-300 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700"
                    >Other Loans</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                        <span class="text-gray-500 sm:text-sm">{currency}</span>
                    </div>
                    <input
                        type="number"
                        bind:value={financials.liabilities.loans}
                        class="pl-12 block w-full rounded-md border-gray-300 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-between pt-6">
        <a href="/wizard/location" class="btn-secondary">Back</a>
        <button type="submit" class="btn-primary"> Next: Goals </button>
    </div>
</form>
