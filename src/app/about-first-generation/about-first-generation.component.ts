import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';
import { IFamily } from '../models/family';

@Component({
  selector: 'app-about-first-generation',
  templateUrl: './about-first-generation.component.html',
  styleUrls: ['./about-first-generation.component.css']
})
export class AboutFirstGenerationComponent implements OnInit {

  constructor(private detail:FamilyService) { }
//public employee=[];
family: IFamily[];
searchTerm:string;
public errorMsg
  ngOnInit():void{
     this.detail.aboutFirst()
               .subscribe(data => this.family = data , 
                error =>this.errorMsg =error); 
              
              }

}
