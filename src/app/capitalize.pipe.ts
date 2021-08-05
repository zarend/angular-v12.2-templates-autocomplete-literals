import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, casing?: 'title'|'upper'|'lower'): unknown {
    switch (casing) {
      case 'title':
        // TODO
      case 'upper':
        // TODO
      case 'lower':
        // TODO
      default:
          return value
    }
  }

}
