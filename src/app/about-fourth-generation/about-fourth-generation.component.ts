import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';
import { IFamily } from '../models/family';

@Component({
  selector: 'app-about-fourth-generation',
  templateUrl: './about-fourth-generation.component.html',
  styleUrls: ['./about-fourth-generation.component.css']
})
export class AboutFourthGenerationComponent implements OnInit {

  constructor(private detail:FamilyService) { }
//public employee=[];
family:IFamily[];
searchTerm:string;
public errorMsg
  ngOnInit():void{
    this.detail.aboutFourth()
               .subscribe(data => this.family = data , 
                error =>this.errorMsg =error); 
               }     

}
