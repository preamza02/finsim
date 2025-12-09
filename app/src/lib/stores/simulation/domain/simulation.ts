import type { Action, ActionInput } from "./action";
import type { Id } from "./base";
import type { Family } from "./person";
import type { UniqueObject } from "./base";

export interface Plan extends UniqueObject {
    name: string;
    steps: Step<any>[];
}

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
