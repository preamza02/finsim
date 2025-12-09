import type { Financial } from "./financial";
import type { DatedObject, UniqueObject } from "./base";

export interface Wealth {
    wealthObjects: WealthObject[];
}

export function NetWorth(wealth: Wealth): number {
    return wealth.wealthObjects.reduce((a, b) => a + NetIncome(b), 0);
}

export function LiquidityValue(wealth: Wealth, liquidityTier: LiquidityTier): number {
    return wealth.wealthObjects.filter((a) => a.liquidityTier <= liquidityTier).reduce((a, b) => a + NetIncome(b), 0);
}

export enum LiquidityTier {
    CASH = 0,
    SHORT_TERM = 7,
    LONG_TERM = 30,
    VERY_LONG_TERM = 365,
    ILLIQUID = 99999,
}

export interface WealthObject extends DatedObject, UniqueObject {
    name: string;
    initialValue: number;
    finalValue: number;
    financials: Financial[];
    liquidityTier: LiquidityTier;
    financialTransaction?: Financial;
}

export function NetIncome(wealthObject: WealthObject): number {
    return wealthObject.financials.reduce((a, b) => a + b.amount, 0);
}

export function IsAsset(wealthObject: WealthObject): boolean {
    return NetIncome(wealthObject) > 0;
}