import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type RelationshipStatus = 'single' | 'couple';

export interface Person {
    name: string;
    age: number;
}

export interface Financials {
    income: {
        salary: number;
        sideHustle: number;
    };
    expenses: {
        living: number;
        rent: number;
        utilities: number;
    };
    assets: {
        cash: number;
        brokerage: number;
        realEstate: number;
    };
    liabilities: {
        mortgage: number;
        loans: number;
    };
}

export interface PlanConfig {
    currency: string;
    locale: string;
}

export interface Plan {
    personal: {
        relationship: RelationshipStatus;
        people: Person[];
    };
    location: {
        country: string;
        state: string;
    };
    config: PlanConfig;
    financials: Financials;
    goals: {
        retirementAge: number;
        targetCorpus: number;
    };
}

const defaultPlan: Plan = {
    personal: {
        relationship: 'single',
        people: [{ name: 'Me', age: 30 }]
    },
    location: {
        country: 'US',
        state: ''
    },
    config: {
        currency: 'USD',
        locale: 'en-US'
    },
    financials: {
        income: { salary: 0, sideHustle: 0 },
        expenses: { living: 0, rent: 0, utilities: 0 },
        assets: { cash: 0, brokerage: 0, realEstate: 0 },
        liabilities: { mortgage: 0, loans: 0 }
    },
    goals: {
        retirementAge: 60,
        targetCorpus: 1000000
    }
};

const createPlanStore = () => {
    const { subscribe, set, update } = writable<Plan>(defaultPlan);

    if (browser) {
        const stored = localStorage.getItem('finsim_plan');
        if (stored) {
            try {
                set(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse stored plan', e);
            }
        }

        subscribe((val) => {
            localStorage.setItem('finsim_plan', JSON.stringify(val));
        });
    }

    return {
        subscribe,
        set,
        update,
        reset: () => set(defaultPlan)
    };
};

export const plan = createPlanStore();
