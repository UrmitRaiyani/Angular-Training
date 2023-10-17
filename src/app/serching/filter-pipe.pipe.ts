import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

    transform(items: any[], serchingText: any): any[] {
      console.log('items',items)

      if(!items || !items.length || !serchingText){
        return items;
      } 
    
      serchingText = serchingText.toLowerCase();
      console.log('serchingtext',serchingText);
      

      return items.filter(item =>  
        item.name.toLowerCase().includes(serchingText)       
      );
      
    }

}
