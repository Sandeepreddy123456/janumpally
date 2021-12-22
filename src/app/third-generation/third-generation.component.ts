import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-third-generation',
  templateUrl: './third-generation.component.html',
  styleUrls: ['./third-generation.component.css']
})
export class ThirdGenerationComponent implements OnInit {
 public thirdGenerations = [];
 searchTerm:string;

 public errorMsg;
  constructor(private _familyService:FamilyService,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this._familyService.getThirdGeneration()
    .subscribe(data => this.thirdGenerations = data ,
     error =>this.errorMsg =error); 
  }
  back(){
 this.router.navigate(["/secondgeneration"]);
  }
  aboutThird()
  {
   this.router.navigate(['aboutThird'],{relativeTo:this.route}) ;
  }

}
