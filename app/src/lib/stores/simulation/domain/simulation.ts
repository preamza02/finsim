import type { Action, ActionInput } from "./action";
import type { Id } from "./base";
import type { Family } from "./person";
import type { UniqueObject } from "./base";

export interface Plan extends UniqueObject {
    name: string;
    steps: Step<any>[];
}

/**
 * Executes each step in the given plan in order against the provided family.
 *
 * @param plan - The plan whose steps will be executed
 * @param family - The family whose members are targeted by the plan's steps
 */
export function Execute(plan: Plan, family: Family) {
    plan.steps.forEach((step) => {
        ExecuteStep(family, step);
    });
}

export interface Step<T extends ActionInput> {
    time: Date;
    personId: Id;
    action: Action<T>;
    input: T;
}

/**
 * Executes a single simulation step by resolving the target person and invoking the step's action.
 *
 * @param family - Family whose members are searched for the step's `personId`
 * @param step - Step containing the time, target `personId`, `action`, and `input` to run
 * @throws Error if no family member matches `step.personId`
 */
function ExecuteStep<T extends ActionInput>(family: Family, step: Step<T>) {
    const person = family.members.find((person) => person.id === step.personId);
    if (!person) {
        throw new Error("Person not found");
    }
    step.action(step.time, person, step.input);
}

export interface Simulation {
    plans: Plan[];
}