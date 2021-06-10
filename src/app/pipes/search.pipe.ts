import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], filterString: string, name: string): any[] {
    const resultSearch = [];
    if (value.length === 0 || filterString === '' || name === '') {
      return value;
    }
    for (const item of value) {
      if (item[name] === filterString) {
        resultSearch.push(item);
      }
    }
    return resultSearch;
  }

}
