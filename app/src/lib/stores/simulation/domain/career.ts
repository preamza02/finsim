import type { Financial } from "./financial";
import type { DatedObject, UniqueObject } from "./base";

export interface Career extends DatedObject, UniqueObject {
    name: string;
    financials: Financial[];
}

