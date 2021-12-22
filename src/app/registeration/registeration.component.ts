import { Component,OnInit } from '@angular/core';
import {  FormBuilder,Validators} from '@angular/forms';
import  {notNumber,notSpecialCharacter} from '../userName/user-name.validator';
import {passwordValidator,firstCharacter} from '../password/password.validator';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { FamilyService } from '../family.service';
import { RegisterServiceService } from '../register-service.service';
import { register } from '../registeration';
//import { RestApiService } from "../shared/rest-api.service";
//import {notEmail} from './Email/Email.validator';
//import {MustMatch} from '@angular/forms';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})

export class RegisterationComponent implements OnInit {
  field:boolean=true;
  field1:boolean=true;
  //getting data from backend
  // listRegister:register[];
  ngOnInit():void {
//     // getting  data from back end
//  this.reg.signin().subscribe(
//    data=>{
//           this.listRegister=data;
           
//    }
//  );
  }
  title = 'project9';
   showMe:boolean=false;
  public styleRegister ={
    color:"red",
    textAlign:"center"
  }
today:number=Date.now();
get userName()
{
  return this.registrationForm.get('userName');
}
get password()
{
  return this.registrationForm.get('password');
}
get confirmPassword()
{
  return this.registrationForm.get('confirmPassword');
}
get Email()
{
  return this.registrationForm.get('email');
}

constructor(private  fb:FormBuilder,private router:Router ,private service:FamilyService,private reg:RegisterServiceService){}
registrationForm =this.fb.group({
  userName:['sandeep',[Validators.required,Validators.minLength(3) ,notNumber,notSpecialCharacter]],
  password:['Chanti@12',[Validators.required,Validators.minLength(8),firstCharacter,Validators.pattern(/^(?=.*[A-Z]{1})(?=.*[a-z])(?=.*\d)(?=.*\W)[a-zA-Z0-9\S]{8,}$/)]],
  confirmPassword:['Chanti@12',[Validators.required,,Validators.minLength(8),firstCharacter,Validators.pattern(/^(?=.*[A-Z]{1})(?=.*[a-z])(?=.*\d)(?=.*\W)[a-zA-Z0-9\S]{8,}$/)]],
  email:['jsandeepreddy1@gmail.com',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
},{validator: passwordValidator,firstCharacter});

loadAPI()
{
this.registrationForm.patchValue({
  userName:'',
  password:'',
  confirmPassword:'',
  Email:'',
});
}
get f() {return this.registrationForm.controls;}
empty:boolean=false;
message:any;

onSubmit()

{
  this.empty=true;
  // if (this.registrationForm.invalid) {
  //   this.validateAllFormFields(this.registrationForm);
  //   return;
  //   }
  if(this.registrationForm.invalid)
  {
  //  alert("please enter a valid input");
   

 return ;
  }
  else{
  console.log(this.registrationForm.value);
 
  // let resp=this.reg.register(this.registrationForm.value);
  // resp.subscribe((data)=>this.message=data)
  this.reg.register(this.registrationForm.value)
  .subscribe(
    (data)=>{
      console.log("In Register.ts "+data)
      this.reg.regguard=true;
      this.router.navigate(['/signin'])
    },
    (error)=>{
      console.error("In Register.ts" +error.error)
      alert("<strong>"+"This details are exist please sign in "+"</strong>" );
      this.router.navigate(['/signin']);
    },

   );

   //JSON.stringify(this.registrationForm.getRawValue())

  // this.router.navigate(['/registerPopup']);
 // this.reg.register1(this.registrationForm.getRawValue());
  }

}



}