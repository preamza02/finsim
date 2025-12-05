<script lang="ts">
    import { plan } from "$lib/stores/plan";
    import { goto } from "$app/navigation";

    let location = $plan.location;
    let config = $plan.config;

    function handleSubmit() {
        plan.update((p) => ({
            ...p,
            location,
            config,
        }));
        goto("/wizard/financials");
    }
</script>

<h2 class="text-2xl font-bold text-gray-900 mb-6">Location & Settings</h2>

<form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div class="grid gap-6 md:grid-cols-2">
        <div>
            <label class="block text-sm font-medium text-gray-700"
                >Country</label
            >
            <select
                bind:value={location.country}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            >
                <option value="US">United States</option>
                <option value="TH">Thailand</option>
                <option value="Other">Other</option>
            </select>
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700"
                >State / Province</label
            >
            <input
                type="text"
                bind:value={location.state}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700"
                >Currency</label
            >
            <select
                bind:value={config.currency}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            >
                <option value="USD">USD ($)</option>
                <option value="THB">THB (฿)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
            </select>
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700"
                >Date Format (Locale)</label
            >
            <select
                bind:value={config.locale}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            >
                <option value="en-US">English (US) - MM/DD/YYYY</option>
                <option value="th-TH">Thai - DD/MM/YYYY</option>
                <option value="en-GB">English (UK) - DD/MM/YYYY</option>
            </select>
        </div>
    </div>

    <div class="flex justify-between pt-6">
        <a href="/wizard/personal" class="btn-secondary">Back</a>
        <button type="submit" class="btn-primary"> Next: Financials </button>
    </div>
</form>
