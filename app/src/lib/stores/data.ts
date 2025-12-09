import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { Family, Person } from './simulation/domain/person';
import { type Location, DEFAULT_LOCATION } from './simulation/domain/location';
import { GenerateId } from './simulation/domain/base';
import { LiquidityTier, type WealthObject } from './simulation/domain/wealth';
import { Currency, type Financial } from './simulation/domain/financial';
import type { Career } from './simulation/domain/career';
import type { Milestone } from './simulation/domain/milestone';

export interface Data {
    mainPersonId: string;
    family: Family;
    location: Location;
}

const defaultData: Data = {
    mainPersonId: "",
    family: {
        members: [],
        relations: []
    },
    location: DEFAULT_LOCATION,
}

const createPlanStore = () => {
    const { subscribe, set, update } = writable<Data>(defaultData);

    if (browser) {
        const stored = localStorage.getItem('finsim_plan');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                // Hydrate dates if necessary (JSON.parse makes dates strings)
                // For now, we'll just load it. A proper hydration strategy might be needed later.
                set(parsed);
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
        reset: () => set(defaultData),

        // Helper Actions
        addMember: (name: string, age: number, isMain: boolean = false) => update(data => {
            const birthYear = new Date().getFullYear() - age;
            const startDate = new Date(birthYear, 0, 1);
            // Estimate end date (e.g., 90 years old)
            const endDate = new Date(birthYear + 90, 0, 1);

            const newPerson: Person = {
                id: GenerateId(),
                name,
                startDate,
                endDate,
                careers: [],
                financials: [],
                wealth: { wealthObjects: [] },
                milestones: []
            };

            const newData = {
                ...data,
                family: {
                    ...data.family,
                    members: [...data.family.members, newPerson]
                }
            };

            if (isMain) {
                newData.mainPersonId = newPerson.id;
            }

            return newData;
        }),

        updateMember: (id: string, updates: Partial<Person>) => update(data => {
            return {
                ...data,
                family: {
                    ...data.family,
                    members: data.family.members.map(m => m.id === id ? { ...m, ...updates } : m)
                }
            };
        }),

        addCareer: (personId: string, title: string, salary: number) => update(data => {
            return {
                ...data,
                family: {
                    ...data.family,
                    members: data.family.members.map(m => {
                        if (m.id !== personId) return m;

                        const careerEndDate = new Date(new Date().getFullYear() + 30, 0, 1); // Default retirement?

                        const salaryFinancial: Financial = {
                            id: GenerateId(),
                            name: "Salary",
                            amount: salary,
                            currency: Currency.THB,
                            startDate: new Date(), // Starts now
                            endDate: careerEndDate
                        };

                        const newCareer: Career = {
                            id: GenerateId(),
                            name: title,
                            startDate: new Date(),
                            endDate: careerEndDate,
                            financials: [salaryFinancial]
                        };

                        return {
                            ...m,
                            careers: [...m.careers, newCareer],
                            // Also add salary to person's financials for easier access if needed, 
                            // though strictly it belongs to the career. 
                            // Let's keep it in career for now as per domain model.
                        };
                    })
                }
            };
        }),

        addAsset: (personId: string, name: string, value: number, type: 'cash' | 'investment') => update(data => {
            return {
                ...data,
                family: {
                    ...data.family,
                    members: data.family.members.map(m => {
                        if (m.id !== personId) return m;

                        const asset: WealthObject = {
                            id: GenerateId(),
                            name,
                            initialValue: value,
                            finalValue: value, // Assuming static for now
                            startDate: new Date(),
                            endDate: new Date(new Date().getFullYear() + 50, 0, 1),
                            financials: [],
                            liquidityTier: type === 'cash' ? LiquidityTier.CASH : LiquidityTier.LONG_TERM
                        };

                        return {
                            ...m,
                            wealth: {
                                ...m.wealth,
                                wealthObjects: [...m.wealth.wealthObjects, asset]
                            }
                        };
                    })
                }
            };
        }),

        addMilestone: (personId: string, milestone: Milestone) => update(data => {
            return {
                ...data,
                family: {
                    ...data.family,
                    members: data.family.members.map(m => {
                        if (m.id !== personId) return m;
                        return {
                            ...m,
                            milestones: [...m.milestones, milestone]
                        };
                    })
                }
            };
        }),

        addExpense: (personId: string, name: string, amount: number) => update(data => {
            return {
                ...data,
                family: {
                    ...data.family,
                    members: data.family.members.map(m => {
                        if (m.id !== personId) return m;

                        const expense: Financial = {
                            id: GenerateId(),
                            name,
                            amount: -Math.abs(amount), // Ensure negative
                            currency: Currency.THB,
                            startDate: new Date(),
                            endDate: new Date(new Date().getFullYear() + 50, 0, 1) // Long term
                        };

                        return {
                            ...m,
                            financials: [...m.financials, expense]
                        };
                    })
                }
            };
        })
    };
};

export const plan = createPlanStore();
