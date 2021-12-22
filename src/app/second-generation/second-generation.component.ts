import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-second-generation',
  templateUrl: './second-generation.component.html',
  styleUrls: ['./second-generation.component.css']
})
export class SecondGenerationComponent implements OnInit {
  public secondGenerations=[];
  public errorMsg;
  searchTerm:string;

  constructor(private _familyService:FamilyService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._familyService.getSecondGeneration()
    .subscribe(data => this.secondGenerations = data ,
     error =>this.errorMsg =error); 
   
  }
  back()
    {
      this.router.navigate(["/firstgeneration"]);
    }
    aboutSecond()
    {
     this.router.navigate(['aboutSecond'],{relativeTo:this.route}) ;
    }

}
