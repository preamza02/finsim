<script lang="ts">
    import { plan } from "$lib/stores/plan";
    import { onMount } from "svelte";

    let p = $plan;
    let currency = p.config.currency;

    // Derived calculations
    $: totalIncome =
        p.financials.income.salary + p.financials.income.sideHustle;
    $: totalExpenses =
        p.financials.expenses.living +
        p.financials.expenses.rent +
        p.financials.expenses.utilities;
    $: annualSavings = totalIncome - totalExpenses;
    $: savingsRate = totalIncome > 0 ? (annualSavings / totalIncome) * 100 : 0;

    $: totalAssets =
        p.financials.assets.cash +
        p.financials.assets.brokerage +
        p.financials.assets.realEstate;
    $: totalLiabilities =
        p.financials.liabilities.mortgage + p.financials.liabilities.loans;
    $: netWorth = totalAssets - totalLiabilities;

    $: progress =
        p.goals.targetCorpus > 0 ? (netWorth / p.goals.targetCorpus) * 100 : 0;

    // Simple projection
    $: yearsToGoal =
        annualSavings > 0
            ? (p.goals.targetCorpus - netWorth) / annualSavings
            : 999;

    $: freedomDate = new Date();
    $: freedomDate.setFullYear(freedomDate.getFullYear() + yearsToGoal);

    function formatMoney(amount: number) {
        return new Intl.NumberFormat(p.config.locale, {
            style: "currency",
            currency: p.config.currency,
            maximumFractionDigits: 0,
        }).format(amount);
    }
</script>

<div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
        <div
            class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center"
        >
            <h1 class="text-3xl font-bold text-gray-900">
                Financial Dashboard
            </h1>
            <div class="flex gap-4">
                <a
                    href="/wizard/intro"
                    class="text-primary-600 hover:text-primary-900">Edit Plan</a
                >
                <a href="/" class="text-gray-500 hover:text-gray-900">Exit</a>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
            <!-- Top Stats -->
            <div
                class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            >
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dt class="text-sm font-medium text-gray-500 truncate">
                            Net Worth
                        </dt>
                        <dd class="mt-1 text-3xl font-semibold text-gray-900">
                            {formatMoney(netWorth)}
                        </dd>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dt class="text-sm font-medium text-gray-500 truncate">
                            Annual Savings
                        </dt>
                        <dd class="mt-1 text-3xl font-semibold text-green-600">
                            {formatMoney(annualSavings)}
                        </dd>
                        <dd class="text-sm text-gray-500">
                            Savings Rate: {savingsRate.toFixed(1)}%
                        </dd>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dt class="text-sm font-medium text-gray-500 truncate">
                            Target Corpus
                        </dt>
                        <dd class="mt-1 text-3xl font-semibold text-gray-900">
                            {formatMoney(p.goals.targetCorpus)}
                        </dd>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dt class="text-sm font-medium text-gray-500 truncate">
                            Freedom Date
                        </dt>
                        <dd
                            class="mt-1 text-3xl font-semibold text-primary-600"
                        >
                            {yearsToGoal < 100
                                ? freedomDate.getFullYear()
                                : "Never"}
                        </dd>
                        <dd class="text-sm text-gray-500">
                            {yearsToGoal < 100
                                ? `In ${yearsToGoal.toFixed(1)} years`
                                : "Increase savings"}
                        </dd>
                    </div>
                </div>
            </div>

            <!-- Progress Bar -->
            <div class="bg-white shadow rounded-lg p-6 mb-8">
                <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                    Progress to Goal
                </h3>
                <div class="relative pt-1">
                    <div class="flex mb-2 items-center justify-between">
                        <div>
                            <span
                                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200"
                            >
                                {progress.toFixed(1)}%
                            </span>
                        </div>
                    </div>
                    <div
                        class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200"
                    >
                        <div
                            style="width: {Math.min(progress, 100)}%"
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
                        ></div>
                    </div>
                </div>
            </div>

            <!-- Details Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Income/Expense Breakdown -->
                <div class="bg-white shadow rounded-lg p-6">
                    <h3
                        class="text-lg leading-6 font-medium text-gray-900 mb-4"
                    >
                        Cash Flow
                    </h3>
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Total Income
                            </dt>
                            <dd
                                class="mt-1 text-lg font-semibold text-gray-900"
                            >
                                {formatMoney(totalIncome)}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Total Expenses
                            </dt>
                            <dd
                                class="mt-1 text-lg font-semibold text-gray-900"
                            >
                                {formatMoney(totalExpenses)}
                            </dd>
                        </div>
                    </dl>
                </div>

                <!-- Asset/Liability Breakdown -->
                <div class="bg-white shadow rounded-lg p-6">
                    <h3
                        class="text-lg leading-6 font-medium text-gray-900 mb-4"
                    >
                        Balance Sheet
                    </h3>
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Total Assets
                            </dt>
                            <dd
                                class="mt-1 text-lg font-semibold text-gray-900"
                            >
                                {formatMoney(totalAssets)}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Total Liabilities
                            </dt>
                            <dd
                                class="mt-1 text-lg font-semibold text-gray-900"
                            >
                                {formatMoney(totalLiabilities)}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </main>
</div>
