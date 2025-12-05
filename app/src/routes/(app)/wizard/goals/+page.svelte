<script lang="ts">
    import { plan } from "$lib/stores/plan";
    import { goto } from "$app/navigation";

    let goals = $plan.goals;
    let currency = $plan.config.currency;

    function handleSubmit() {
        plan.update((p) => ({
            ...p,
            goals,
        }));
        goto("/dashboard");
    }
</script>

<h2 class="text-2xl font-bold text-gray-900 mb-6">Financial Goals</h2>

<form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div>
        <label class="block text-sm font-medium text-gray-700"
            >Target Retirement Age</label
        >
        <input
            type="number"
            bind:value={goals.retirementAge}
            min="1"
            max="100"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        />
        <p class="mt-2 text-sm text-gray-500">
            At what age do you want to stop working for money?
        </p>
    </div>

    <div>
        <label class="block text-sm font-medium text-gray-700"
            >Target Corpus (Net Worth)</label
        >
        <div class="mt-1 relative rounded-md shadow-sm">
            <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
                <span class="text-gray-500 sm:text-sm">{currency}</span>
            </div>
            <input
                type="number"
                bind:value={goals.targetCorpus}
                class="pl-12 block w-full rounded-md border-gray-300 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
        </div>
        <p class="mt-2 text-sm text-gray-500">
            How much money do you think you need to be financially free?
        </p>
    </div>

    <div class="flex justify-between pt-6">
        <a href="/wizard/financials" class="btn-secondary">Back</a>
        <button type="submit" class="btn-primary"> Finish & View Plan </button>
    </div>
</form>
