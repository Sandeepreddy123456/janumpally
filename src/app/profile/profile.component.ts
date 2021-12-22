import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../register-service.service';
import { register } from '../registeration';

@Component({

  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   idlist : any;

  constructor(private _service:RegisterServiceService,private route:Router) { }
 //  var id;
 id:number;

  ngOnInit(): void {
    this._service.getUsers().subscribe(
      data =>{
      this.idlist=data;
    }
      );
  }

  public delteUser(id:number){
    let resp= this._service.deleteUser(id);
    resp.subscribe((data)=>this.idlist=data);
   }


  byId()
  {
    console.log(this.id);
    this._service.DetailsById(this.id)    
    . subscribe(
    (response) =>{
        console.log("response "+response);   
    },
     (error) => {
       console.error("error message "+error.error)
     }
   );


    }

    updateEmployee(id: number){
      console.log(id);
      this.route.navigate(['update', id]);
    }

}
