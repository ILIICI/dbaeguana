import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, category: string): any[] {
    const resultSearch = [];
    if (value.length === 0 || filterString === '' || category === '') {
      return value;
    }
    for (const item of value) {
      if (item[category] === filterString) {
        resultSearch.push(item);
      }
    }
    return resultSearch;
  }

}
