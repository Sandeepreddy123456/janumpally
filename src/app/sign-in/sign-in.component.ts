import { Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator,firstCharacter } from '../password/password.validator';
import {notNumber,notSpecialCharacter} from '../userName/user-name.validator';
import { FamilyService } from '../family.service';
import { RegisterServiceService } from '../register-service.service';
import{MyAccountService} from '../my-account.service';

import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  implements OnInit {
  title = 'project9';
  logged:boolean=false;
  field:boolean=true;
  field1:boolean=true;

empty:boolean=false;
message:any;
 
   constructor(private  fb:FormBuilder,private router:Router,private reg:RegisterServiceService ,private  _myAccountService:MyAccountService){

   }

  get Email()
  {
    return this.login.get('email');
  }
  get password()
  {
    return this.login.get('password');
  }
  login =this.fb.group({
    
    password:['Chanti@12',[Validators.required,Validators.minLength(8),firstCharacter,Validators.pattern(/^(?=.*[A-Z]{1})(?=.*[a-z])(?=.*\d)(?=.*\W)[a-zA-Z0-9\S]{8,}$/)]],
    email:['jsandeepreddy1@gmail.com',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
  },{validator:firstCharacter});
  
  get f() {return this.login.controls;}


  onSubmit()
  {
    if(this.login.invalid)
  {
    return ;
  }
  else{
    // console.log(this.login.value);
    // this.reg.signin(this.login.getRawValue()).subscribe((data: 
    //   {}) => {
    //         this.message
    //       });
       
    //  JSON.stringify(this.login.getRawValue())
    // this.router.navigate(['/profile']);
    
    this.reg.signin(this.login.value)
    .subscribe(
      (data)=>{
        console.log("In signin.ts ");
        console.log(data);
        this.message=data;
        this._myAccountService.sendMyAccount(stringify(data));
        if(data){
     
        this.reg.regguard=true;
        this.router.navigate(['/profile'])
        }else{
         
          alert("please provide proper signin details")
          this.router.navigate(['/signin']);
          this.reg.regguard=false;
        }
      },
      (error)=>{
        console.error(error.error)
        alert("This details are exist please sign in ");
        this.router.navigate(['/signin'])
      },
  
     );
  }
  
}
ngOnInit():void{
  // this.logged=this.service.isLogged;

  
    }



  // showfirstgeneration()
  // {
  //   this.router.navigate(['firstgeneration'],{relativeTo:this.router});
  // }
  back()
  {
this.router.navigate(['/home']);
  }
}
