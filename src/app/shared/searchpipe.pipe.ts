import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(workers: any[], searchStr: string): any[] {
    if (searchStr === '') {
      return workers;
    } else {
      let search = searchStr.split(' ');
      console.log(search);
      if(!isNullOrUndefined(search[1])) {
        let filteredItems = workers.filter(item => item.surname.toLowerCase().indexOf(search[0].toLowerCase()) !== -1);
        filteredItems = filteredItems.filter(item => item.name.toLowerCase().indexOf(search[1].toLowerCase()) !== -1);
        return filteredItems;
      } else {
        let filteredItems = workers.filter(item => item.surname.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
        return filteredItems;
      }
    }
  }
}
