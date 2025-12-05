<script lang="ts">
    import { plan } from "$lib/stores/plan";
    import { goto } from "$app/navigation";

    let relationship = $plan.personal.relationship;
    let people = $plan.personal.people;

    // Ensure people array matches relationship status
    $: if (relationship === "single" && people.length > 1) {
        people = [people[0]];
    } else if (relationship === "couple" && people.length === 1) {
        people = [...people, { name: "Partner", age: 30 }];
    }

    function handleSubmit() {
        plan.update((p) => ({
            ...p,
            personal: {
                relationship,
                people,
            },
        }));
        goto("/wizard/location");
    }
</script>

<h2 class="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>

<form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"
            >Relationship Status</label
        >
        <div class="flex gap-4">
            <label class="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    bind:group={relationship}
                    value="single"
                    class="text-primary-600 focus:ring-primary-500"
                />
                <span>Single</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    bind:group={relationship}
                    value="couple"
                    class="text-primary-600 focus:ring-primary-500"
                />
                <span>Couple</span>
            </label>
        </div>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
        {#each people as person, i}
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 class="font-medium text-gray-900 mb-4">
                    {i === 0 ? "You" : "Partner"}
                </h3>
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700"
                            >Name</label
                        >
                        <input
                            type="text"
                            bind:value={person.name}
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700"
                            >Age</label
                        >
                        <input
                            type="number"
                            bind:value={person.age}
                            min="1"
                            max="120"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            required
                        />
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <div class="flex justify-end pt-6">
        <button type="submit" class="btn-primary"> Next: Location </button>
    </div>
</form>
