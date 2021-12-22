import { Pipe, PipeTransform } from '@angular/core';
//import { Family } from '../models/family.filter';
import { IFamily } from './family';


@Pipe({
    name:'familyFilter',
    pure : true 
})

export class FamilyFilter implements PipeTransform{
    private counter =0;
    transform(family:IFamily[],searchTerm:string):IFamily[]
    {
        this.counter++;
        console.log('Filter pipe executed count  '+this.counter);
        if(!family ||!searchTerm)
        {
            return family;
        }
        return family.filter(firstgeneration=>
            firstgeneration.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1);
    }
}