import { v4 as uuidv4 } from 'uuid';

export interface DatedObject {
    startDate: Date;
    endDate: Date;
}

export interface UniqueObject {
    id: Id;
}

export type Id = string;

/**
 * Create a new unique identifier.
 *
 * @returns A new `Id` string formatted as a UUID v4
 */
export function GenerateId(): Id {
    return uuidv4();
}