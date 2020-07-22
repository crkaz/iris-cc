export interface ICalendarEntry {
  Start: Date;
  End: Date;
  Repeat: number;
  Description: string;
  Reminders: string[];
}
