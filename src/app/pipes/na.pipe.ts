import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NA'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (value !== '') {
      return value;
    } else {
      return '--';
    }
  }

}
