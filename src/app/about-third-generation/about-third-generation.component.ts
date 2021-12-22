import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';
import { IFamily } from '../models/family';

@Component({
  selector: 'app-about-third-generation',
  templateUrl: './about-third-generation.component.html',
  styleUrls: ['./about-third-generation.component.css']
})
export class AboutThirdGenerationComponent implements OnInit {

  constructor(private detail:FamilyService) { }
  //public employee=[];
  family:IFamily[];
  searchTerm:string;
  public errorMsg
    ngOnInit():void{
      this.detail.aboutThird()
                 .subscribe(data => this.family = data , 
                  error =>this.errorMsg =error); 
                 }       

}
