import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  // {{ value | reverse:'arg1':'arg2' }}
  transform(value: string, ...args: string[]): string {
     return value.split('').reverse().join('');
  }

}
