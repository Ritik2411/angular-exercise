import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const USD = parseInt(value)
    return (USD*75.05).toFixed(2);
  }

}
