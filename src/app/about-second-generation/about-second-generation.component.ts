import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';
import { IFamily } from '../models/family';

@Component({
  selector: 'app-about-second-generation',
  templateUrl: './about-second-generation.component.html',
  styleUrls: ['./about-second-generation.component.css']
})
export class AboutSecondGenerationComponent implements OnInit {
  constructor(private detail:FamilyService) { }
  //public employee=[];
  family:IFamily[];
  searchTerm:string;
  public errorMsg
    ngOnInit():void{
      this.detail.aboutsecond()
                 .subscribe(data => this.family = data , 
                  error =>this.errorMsg =error); 
                

}
}
