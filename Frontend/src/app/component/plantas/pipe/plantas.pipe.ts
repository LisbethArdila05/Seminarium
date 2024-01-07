import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePlants'
})
export class PipePlantsPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(!arg){
      return value
    }
    const results: any = [];
    const contAux = value;
    for (const plants of contAux) {
      if (plants.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        results.push(plants);
      } 
    }
    return results;
  }

}
