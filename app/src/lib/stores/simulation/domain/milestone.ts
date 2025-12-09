import type { UniqueObject } from "./base";

export interface AchievingMethod {
}

export interface ByDateAchievingMethod extends AchievingMethod {
    date: Date;
}

export interface ByAmountAchievingMethod extends AchievingMethod {
    amount: number;
}

export interface ByWealthAchievingMethod extends AchievingMethod {

}

export interface Milestone extends UniqueObject {
    name: string;
    achievingMethod: AchievingMethod;
}