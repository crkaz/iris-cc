export enum AgeRange { "Under 25", "26-35", "36-45", "46-55", "56-65", "66-70", "71-75", "76-80","81-85", "86-90", "Over 90" };
export enum Severity { "Mild MCI (non-AD)", "Moderate MCI (non-AD)", "Severe MCI (non-AD)", "AD" };

export interface IPatientInfo {
    Id: string;
    Age: string;
    Diagnosis: string;
    Notes: string;
}
