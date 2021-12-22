import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {
  // private _signinSource=new Subject<string>();
  //   signin$=this._signinSource.asObservable();
    sign:string

  constructor( ) { }

sendMyAccount(message:string){
 // this._signinSource.next(message);
 // console.log(message)
  this.sign=message;
 // console.log( this.sign);

}
}
