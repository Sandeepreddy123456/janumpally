import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//import {AboutFirstGenerationComponent} from '../about-first-generation/about-first-generation-component';
import { AboutFirstGenerationComponent } from '../about-first-generation/about-first-generation.component';
import { FamilyService } from '../family.service';
import { IFamily } from '../models/family';
@Component({
  selector: 'app-joint-family',
  templateUrl: './joint-family.component.html',
  styleUrls: ['./joint-family.component.css']
})
export class JointFamilyComponent implements OnInit {
 family: IFamily[];
 searchTerm:string;

 public errorMsg;
  constructor(private _familyService :FamilyService, private router:Router,private route:ActivatedRoute) { 
  
  }

  ngOnInit():void{
  this._familyService.getFamilyDetails()
             .subscribe(data => this.family = data , 
              error =>this.errorMsg =error); 
            
            }
       
            back(){
            this.router.navigate(['/signin']);

            }
            aboutFirst()
            {
             this.router.navigate(['aboutFirst'],{relativeTo:this.route}) ;
            }
         
            // routes=[
            //   {linkName :"aboutFirst",url:'home'}
            // ];
            changeFamilyName(){
              //   // this.employees[0].name='janumpally'; //this is for impure filter
              const newEmployeeArray:IFamily[]=Object.assign([],this.family);
              newEmployeeArray[0].name='janumpally';
              this.family=newEmployeeArray;
            }
              onMouseMove(){

              }         

}
