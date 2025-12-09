import type { TaxSystem } from "./tax";
import type { UniqueObject } from "./base";

export interface Location extends UniqueObject {
    country: string;
    state: string;
    taxSystem: TaxSystem;
}

export const DEFAULT_LOCATION: Location = {
    id: "thailand",
    country: "Thailand",
    state: "Bangkok",
    taxSystem: {}
}