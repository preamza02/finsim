import type { Financial } from "./financial";
import type { Wealth, WealthObject } from "./wealth";
import type { Milestone } from "./milestone";
import type { Career } from "./career";
import { intervalToDuration } from "date-fns";
import type { DatedObject, UniqueObject } from "./base";
import type { Id } from "./base";

export enum RelationType {
    SPOUSE,
    FATHER,
    MOTHER,
    Childern,
}

export interface Person extends DatedObject, UniqueObject {
    name: string;
    careers: Career[];
    financials: Financial[];
    wealth: Wealth;
    milestones: Milestone[];
}

export function PersonGetLifeSpan(person: Person): string {
    const duration = intervalToDuration({
        start: person.startDate,
        end: person.endDate
    });

    const years = duration.years ?? 0;
    const months = duration.months ?? 0;
    const days = duration.days ?? 0;
    return `${years} years, ${months} months, ${days} days`;
}

export interface Relation {
    RightPersonId: string
    LeftPersonId: string
    is: RelationType
    milestones: Milestone[]
}

export interface Family {
    members: Person[];
    relations: Relation[];
}

export function GetPersonById(family: Family, id: Id): Person | undefined {
    return family.members.find((person) => person.id === id);
}