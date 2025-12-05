<script lang="ts">
    import { plan } from "$lib/stores/plan";
    import { goto } from "$app/navigation";

    const personas = [
        {
            id: "late-starter",
            name: "The Late Starter",
            description:
                "Starting to invest at 40 with aggressive catch-up goals.",
            data: {
                personal: {
                    relationship: "single",
                    people: [{ name: "Alex", age: 40 }],
                },
                location: { country: "US", state: "CA" },
                config: { currency: "USD", locale: "en-US" },
                financials: {
                    income: { salary: 120000, sideHustle: 0 },
                    expenses: { living: 40000, rent: 24000, utilities: 3000 },
                    assets: { cash: 20000, brokerage: 50000, realEstate: 0 },
                    liabilities: { mortgage: 0, loans: 0 },
                },
                goals: { retirementAge: 60, targetCorpus: 2000000 },
            },
        },
        {
            id: "coast-fi",
            name: "Coast FI",
            description:
                "Front-loaded savings early, now coasting with lower income.",
            data: {
                personal: {
                    relationship: "couple",
                    people: [
                        { name: "Sam", age: 32 },
                        { name: "Jo", age: 30 },
                    ],
                },
                location: { country: "TH", state: "Bangkok" },
                config: { currency: "THB", locale: "th-TH" },
                financials: {
                    income: { salary: 1200000, sideHustle: 300000 },
                    expenses: {
                        living: 600000,
                        rent: 240000,
                        utilities: 60000,
                    },
                    assets: { cash: 500000, brokerage: 5000000, realEstate: 0 },
                    liabilities: { mortgage: 0, loans: 0 },
                },
                goals: { retirementAge: 55, targetCorpus: 20000000 },
            },
        },
    ];

    function loadPersona(persona: any) {
        plan.set(persona.data);
        goto("/dashboard");
    }
</script>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
            <h1 class="text-3xl font-bold text-gray-900">Sandbox Mode</h1>
            <p class="mt-4 text-lg text-gray-600">
                Choose a persona to explore FinSim with pre-loaded data.
            </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
            {#each personas as persona}
                <button
                    class="block w-full text-left bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow border border-transparent hover:border-primary-500"
                    on:click={() => loadPersona(persona)}
                >
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">
                            {persona.name}
                        </h3>
                        <p class="mt-2 text-sm text-gray-500">
                            {persona.description}
                        </p>
                        <div class="mt-4 text-sm text-primary-600 font-medium">
                            Load this profile &rarr;
                        </div>
                    </div>
                </button>
            {/each}
        </div>

        <div class="mt-12 text-center">
            <a href="/" class="text-gray-500 hover:text-gray-900"
                >Back to Home</a
            >
        </div>
    </div>
</div>
