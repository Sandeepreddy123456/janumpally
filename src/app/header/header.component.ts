import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public styleRegister ={
    color:"red",
    textAlign:"center",
   
  }
  today:number=Date.now();
  sandeep:string="hii this is sandeep";
  isLoggedIn:boolean=false;
  constructor(private _auth:AuthGuard,private router:Router,private _reg:RegisterServiceService){}

  ngOnInit():void{
   // this.isLoggedIn=this._auth.isLoggedIn;
   // alert(this.isLoggedIn);
    // this.logged=this.Service.isLogged;
 
  }
  check:boolean=false;
  // ngDoCheck(){
  //   //this.check=!this.check;
  //   if(this.check){
  //     this.isLoggedIn=!this._auth.isLoggedIn;
  //     console.log("have to login : "+this.isLoggedIn)
  //     this.check=!this.check;
   
  //   }
  //   else{
  //     this.isLoggedIn=this._auth.isLoggedIn;
  //     console.log("have to logout else : "+this.isLoggedIn)
  //   }
     
 // }
 ngDoCheck(){
//   //this.check=!this.check;
  if(this._reg.regguard){

    this.isLoggedIn=true;
  
  }
  else{
    this.isLoggedIn=false;
   
  }
//  this._reg.regguard=!this._reg.regguard;
}
 
  signOut(){
  console.log("signOut")
   // this.check=true;
    this.isLoggedIn=false;
    this._reg.regguard=false;
   // this.ngDoCheck()
   // this.isLoggedIn=!this._auth.isLoggedIn;
   // this._auth.isLoggedIn=false;
    this.router.navigate(['/signin']);
   
   // return  true;
  }

}
