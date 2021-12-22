import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError  as observableThrowError, Observable } from 'rxjs';
import {catchError }   from 'rxjs/operators';
import {IFamily} from './models/family';
import {Employee} from './models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class FamilyService {
private _url :string="/assets/data/firstGeneration.json";
private _url2 :string="/assets/data/secondGeneration.json";
private _url3 :string="/assets/data/thirdGeneration.json";
private _url4:string="/assets/data/fourthgeneration.json";
// private _url5 :string="/assets/data/details.json";
// isLogged:boolean=false;


constructor(private http:HttpClient ) { }
  getFamilyDetails():Observable<IFamily[]>
  {
  return this.http.get<IFamily[]>(this._url).pipe(
     catchError(this.errorHandler));
  }
  // errorHandler(error :HttpErrorResponse){
  //      return observableThrowError(error.message ||"Server Error");       
  // }
  getSecondGeneration():Observable<IFamily[]>
  {
  return this.http.get<IFamily[]>(this._url2).pipe(
     catchError(this.errorHandler));
  }

  getThirdGeneration():Observable<IFamily[]>
  {
  return this.http.get<IFamily[]>(this._url3).pipe(
     catchError(this.errorHandler));
  }
  getFourthGeneration():Observable<IFamily[]>
  {
  return this.http.get<IFamily[]>(this._url4).pipe(
     catchError(this.errorHandler));
  }
//   Details():Observable<Employee[]>
//   {
//   return this.http.get<Employee[]>(this._url5).pipe(
//      catchError(this.errorHandler));
//   }
aboutFirst():Observable<IFamily[]>
{
return this.http.get<IFamily[]>(this._url).pipe(
   catchError(this.errorHandler));
}
aboutsecond():Observable<IFamily[]>
{
return this.http.get<IFamily[]>(this._url2).pipe(
   catchError(this.errorHandler));
}
aboutThird():Observable<IFamily[]>
{
return this.http.get<IFamily[]>(this._url3).pipe(
   catchError(this.errorHandler));
}
  aboutFourth():Observable<IFamily[]>
  {
  return this.http.get<IFamily[]>(this._url4).pipe(
     catchError(this.errorHandler));
  }

  errorHandler(error :HttpErrorResponse){
    return observableThrowError(error.message ||"Server Error");       
}
}
