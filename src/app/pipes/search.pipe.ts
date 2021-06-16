import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
  transform(productList, value){
    return productList.filter(productItem => {
        return productItem.name.includes(value)
    })
  }
}