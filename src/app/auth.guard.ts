import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterServiceService } from './register-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn:boolean=false;
  
  constructor(private router:Router,private _reg:RegisterServiceService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(this._reg.regguard)
      {
        this.isLoggedIn=true;
        return true;
      }
      else{
        console.log("in guards");
        this.isLoggedIn=false;
        this.router.navigate(['/signin']);
    return false;
      }
  }
  
}
