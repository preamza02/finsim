import type { DatedObject, UniqueObject } from "./base";

export enum Currency {
    THB = "Thai Bath",
    USD = "US Dollar",
    SAT = "SATOSHI (BTC)",
}

export type ExchangeRateToSAT = Map<Currency, number>;

// at the close of the day
export const HistoricalExchangeRateToSAT: Map<Date, ExchangeRateToSAT>[] = [];

// Default Value as of 2025-12-06
export const CurrentExchangeRateToSAT: ExchangeRateToSAT = new Map([
    [Currency.THB, 34.817],
    [Currency.USD, 1114.505],
    [Currency.SAT, 1],
])



/**
 * Compute the multiplicative exchange rate to convert an amount from one currency to another.
 *
 * @param from - Source currency
 * @param to - Target currency
 * @returns The exchange rate such that (amount in `from`) × (returned value) = (equivalent amount in `to`)
 */
export function ExchangeRate(from: Currency, to: Currency): number {
    if (from === to) {
        return 1;
    }
    return CurrentExchangeRateToSAT.get(from)! / CurrentExchangeRateToSAT.get(to)!;
}

export interface Financial extends DatedObject, UniqueObject {
    name: string;
    amount: number;
    currency: Currency;
}

/**
 * Determine whether a financial record represents income.
 *
 * @param financial - The financial record to evaluate
 * @returns `true` if `financial.amount` is greater than zero, `false` otherwise.
 */
export function isIncome(financial: Financial): boolean {
    return financial.amount > 0;
}