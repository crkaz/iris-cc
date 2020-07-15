import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {
  transform(value: string): string {

    // 11/23/2020, 11:23:42 PM => 11:23
    return value.split(' ')[1].substring(0, 5);
  }
}
