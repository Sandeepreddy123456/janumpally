
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { MyAccountService } from '../my-account.service';
import { password } from '../password';
import { firstCharacter } from '../password/password.validator';
import { RegisterServiceService } from '../register-service.service';
import { register } from '../registeration';
import { ThirdGenerationComponent } from '../third-generation/third-generation.component';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
   register:register
 //  login:password;
   message:any;
   field:boolean=true;
   field1:boolean=true;
   empty:boolean=false;
  id1:number;
  constructor(private _myAccountService:MyAccountService ,private route:Router,private _service:RegisterServiceService,private fb:FormBuilder,private auth:AuthGuard ){ }
  
  ngOnInit() {
    console.log("myaccount")
    // this._myAccountService.signin$
    // .subscribe(
    //   message=>{
    //     console.log(message);
    //     alert(message);
    //   }
    // )
  
    console.log(this._myAccountService.sign);
    this.message  = this._myAccountService.sign
  this.register=  JSON.parse(this.message);
  console.log(this.register);
  this.id1=this.register.id;
  }


  get password()
  {
    return this.login.get('oldPassword');
  }

  login =this.fb.group({
    //id:[this.register.id.],
    oldPassword:['Chanti@12',[Validators.required,Validators.minLength(8),firstCharacter,Validators.pattern(/^(?=.*[A-Z]{1})(?=.*[a-z])(?=.*\d)(?=.*\W)[a-zA-Z0-9\S]{8,}$/)]],
    newPassword:['Chanti@12',[Validators.required,Validators.minLength(8),firstCharacter,Validators.pattern(/^(?=.*[A-Z]{1})(?=.*[a-z])(?=.*\d)(?=.*\W)[a-zA-Z0-9\S]{8,}$/)]],
  },{validator:firstCharacter});
  
  get f() {return this.login.controls;}

  updateEmployee(id: number){
    console.log(id);
    this.route.navigate(['update', id]);
  }
  idlist : any;
  public delteUser(id:number){
    let resp= this._service.deleteUser(id);
    resp.subscribe((data)=>this.idlist=data);
   }


   onSubmit()
   {
     if(this.login.invalid)
   {
 //   console.log(this.login);
     return ;
   
   }
   else{
     console.log(this.login.value);
   //  this._service.updatePassword(1,this.login.controls['oldPassword'].value,this.login.controls['newPassword'].value)
   this._service.updatePassword(this.id1,this.login.value)
   .subscribe(
     data=>{
       console.log(data);
       console.log("id print"+this.id1)
       localStorage.clear();
       this.auth.isLoggedIn=false;
       this.route.navigate(["/signin"]);
     }
   )
   }

  }
back(){
  
  this.route.navigate(["/home"]);
}

}
