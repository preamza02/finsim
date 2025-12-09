import type { Id } from "./base";
import type { Career } from "./career";
import type { Person } from "./person";
import type { WealthObject } from "./wealth";

export interface ActionInput {
    name: string;
}

export type Action<T extends ActionInput> = (time: Date, person: Person, action: T) => void;

export interface EndCareerActionInput extends ActionInput {
    careerId: Id;
}

export const EndCareerAction: Action<EndCareerActionInput> = (time: Date, person: Person, action: EndCareerActionInput) => {
    const career = person.careers.find((career) => career.id === action.careerId);
    if (!career) {
        throw new Error("Career not found");
    }
    career.endDate = time;
}

export interface NewCareerActionInput extends ActionInput {
    career: Career;
}

export const NewCareerAction: Action<NewCareerActionInput> = (_: Date, person: Person, action: NewCareerActionInput) => {
    person.careers.push(action.career);
}

export interface ChangeCareerActionInput extends ActionInput {
    fromCareerId: Id;
    toCareer: Career;
}

export const ChangeCareerAction: Action<ChangeCareerActionInput> = (time: Date, person: Person, action: ChangeCareerActionInput) => {
    EndCareerAction(time, person, {
        careerId: action.fromCareerId,
        name: action.name
    });
    NewCareerAction(time, person, {
        career: action.toCareer,
        name: action.name
    });
}

export interface BuyWealthObjectActionInput extends ActionInput {
    wealthObject: WealthObject;
}

export const BuyWealthObjectAction: Action<BuyWealthObjectActionInput> = (time: Date, person: Person, action: BuyWealthObjectActionInput) => {
    // add expense
    if (action.wealthObject.financialTransaction) {
        person.financials.push(action.wealthObject.financialTransaction)
    }
    // add WealthObject
    person.wealth.wealthObjects.push(action.wealthObject)
}

export interface SellWealthObjectActionInput extends ActionInput {
    wealthObjectId: Id;
}

export const SellWealthObjectAction: Action<SellWealthObjectActionInput> = (time: Date, person: Person, action: SellWealthObjectActionInput): void => {
    // remove WealthObject
    const wealthObject = person.wealth.wealthObjects.find((wealthObject) => wealthObject.id === action.wealthObjectId);
    if (!wealthObject) {
        throw new Error("WealthObject not found");
    }
    person.wealth.wealthObjects = person.wealth.wealthObjects.filter((wealthObject) => wealthObject.id !== action.wealthObjectId);
    // add income
    if (wealthObject.financialTransaction) {
        person.financials.push(wealthObject.financialTransaction)
    }
}