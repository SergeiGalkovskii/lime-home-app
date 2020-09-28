import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return (+value / 1000).toFixed(2);
  }

}
