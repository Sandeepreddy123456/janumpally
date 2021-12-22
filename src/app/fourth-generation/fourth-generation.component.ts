import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  {FamilyService} from '../family.service';
@Component({
  selector: 'app-fourth-generation',
  templateUrl: './fourth-generation.component.html',
  styleUrls: ['./fourth-generation.component.css']
})
export class FourthGenerationComponent implements OnInit {
   public fourthGenerations= [];
   searchTerm:string;
    public errorMsg;
  constructor(private _familyService:FamilyService ,private  router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._familyService.getFourthGeneration()
    .subscribe(data => this.fourthGenerations = data ,
     error =>this.errorMsg =error); 
   
  }
  back()
  {
    this.router.navigate(["/thirdgeneration"]);
  }
  aboutFourth()
  {
   this.router.navigate(['aboutFourth'],{relativeTo:this.route}) ;
  }

}
