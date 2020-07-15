import { Pipe, PipeTransform } from '@angular/core';

const MONTHS: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DATE_SUFFIX: string[] = ["st", "nd", "rd", "th"];

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {
  transform(value: string): string {
    let splitStr: string[] = value.split("/");
    let day: string = splitStr[1];
    let i = parseInt(day.slice(-1)) - 1;
    i < 4 ? i = i : i = 3; // Cap at 3 (access 4th element of DATA_SUFFIX);
    day = day + DATE_SUFFIX[i];
    let month: string = MONTHS[parseInt(splitStr[0])];
    let year: string = splitStr[2].substring(2,4);
    let formattedDate = day + " " + month + " " + year;

    // 11/23/2020, 11:23:42 PM => 23rd Nov 2020
    return formattedDate;
  }
}
