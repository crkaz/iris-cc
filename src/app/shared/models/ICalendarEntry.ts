export enum Repetition { Never, Daily, Weekly, Monthly, Yearly };

export interface ICalendarEntry {
  Start: Date;
  End: Date;
  Repeat: Repetition;
  Description: string;
  Reminders: string[];
}
