import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {register} from './registeration';
import{password} from './password'
import{login} from './login'
import { throwError  as observableThrowError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
   regguard:boolean=false;
  

  constructor(private http:HttpClient) { }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
public register(registrationForm):Observable<register>{
console.log("in register service")
 console.log(registrationForm);
  return this.http.post<register>("http://localhost:9393/register",registrationForm,{responseType:'text' as 'json'})
  // .pipe(
  //   catchError(this.errorHandler)
    
  // );
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// public register1(registrationForm){

//   console.log(registrationForm);
//     this.http.post<register[]>("http://localhost:9393/register",registrationForm,{responseType:'text' as 'json'})
//     // .pipe(
//      // catchError(this.errorHandler)
     
//   //  )
//    . subscribe(
//     (response) => {
//       console.log("response "+response)
//      this.regguard=true;
//     },
//     (error) => console.error("error "+error.error)
//   );
//  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

public signin(login):Observable<login>{
  console.log('from signin service')
  return this.http.post<login>("http://localhost:9393/signin",login,{responseType:'text' as 'json'})

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //   public signin(login){
  //         console.log('from signin form');
  //        this.http.post("http://localhost:9393/signin",login,{responseType:'text' as 'json'})
  //       // .pipe(
  //       //   catchError(this.errorHandler)
  //       // );
  //       . subscribe(
  //         (response) => {
  //           console.log("response "+response)  
  //         },
  //         (error) => console.error("error "+error.error)
  //       );
  
  // }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // public DetailsById(id){
  
  //   console.log(id);
  //     this.http.get("http://localhost:9393/byId/"+id,{responseType:'text' as 'json'})
      
  //    . subscribe(
  //     (response) => console.log("response "+response),
  //     (error) => console.error("error message "+error.error
  //     )
  //   );
  //  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////

public DetailsById(id):Observable<register>{

  console.log(id);
   return this.http.get<register>("http://localhost:9393/byId/"+id,{responseType:'text' as 'json'})

 }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
public getUsers(){
  return this.http.get("http://localhost:9393/reg");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

public deleteUser(id){
  return this.http.delete("http://localhost:9393/cancel/"+id);
}
//////////////////////////////////////////////////////////////////////////////////////////////

updateEmployee(id: number, employee: register): Observable<register> {
  return this.http.put<register>("http://localhost:9393/update/" + id, employee);
}


   ////////////////////////////////////////////////////////////////////////////////////////////////////
//  updatePassword(id:number,oldPassword:string,newPassword):Observable<any>
//  {
//    console.log(id+oldPassword+newPassword);
//    return this.http.get<any>("http://localhost:9393/update1/"+id+"'/"+oldPassword+"'/"+newPassword,{responseType:'text'as 'json'});
//  }
  updatePassword(id:number,login):Observable<password>
 {

  //console.log(login)
   return this.http.put<password>("http://localhost:9393/pass/"+id,login,{responseType:'text' as 'json'});
 }
 
 ///////////////////////////////////////////////////////////////////////////////////////////////////////
   errorHandler(error :HttpErrorResponse){
    return observableThrowError(error.message ||"Server Error");       
    
  }
  


}
