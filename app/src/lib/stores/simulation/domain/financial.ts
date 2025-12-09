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

export function isIncome(financial: Financial): boolean {
    return financial.amount > 0;
}