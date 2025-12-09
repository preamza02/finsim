import type { Financial } from "./financial";
import type { DatedObject, UniqueObject } from "./base";

export interface Wealth {
    wealthObjects: WealthObject[];
}

/**
 * Compute the total net worth by summing net income of every wealth object.
 *
 * @param wealth - The wealth container whose `wealthObjects` will be aggregated
 * @returns The sum of net incomes of all wealth objects
 */
export function NetWorth(wealth: Wealth): number {
    return wealth.wealthObjects.reduce((a, b) => a + NetIncome(b), 0);
}

/**
 * Compute total net income for wealth objects up to a given liquidity tier.
 *
 * @param liquidityTier - Include wealth objects whose `liquidityTier` is less than or equal to this threshold
 * @returns The sum of net income for wealth objects whose liquidity tier is less than or equal to `liquidityTier`
 */
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

/**
 * Calculates the total net income for a wealth object by summing the `amount` of each financial entry.
 *
 * @param wealthObject - The wealth object whose financial entries will be totaled
 * @returns The sum of `amount` values from `wealthObject.financials`
 */
export function NetIncome(wealthObject: WealthObject): number {
    return wealthObject.financials.reduce((a, b) => a + b.amount, 0);
}

/**
 * Determine whether a wealth object represents an asset.
 *
 * @returns `true` if the wealth object's net income is greater than zero, `false` otherwise.
 */
export function IsAsset(wealthObject: WealthObject): boolean {
    return NetIncome(wealthObject) > 0;
}