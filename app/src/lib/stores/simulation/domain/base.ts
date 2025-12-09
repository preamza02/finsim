import { v4 as uuidv4 } from 'uuid';

export interface DatedObject {
    startDate: Date;
    endDate: Date;
}

export interface UniqueObject {
    id: Id;
}

export type Id = string;

export function GenerateId(): Id {
    return uuidv4();
}