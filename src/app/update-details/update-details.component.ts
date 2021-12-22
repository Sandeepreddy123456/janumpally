import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterServiceService } from '../register-service.service';
import { register } from '../registeration';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {


  id:number;
  register:register;
  constructor(private reg:RegisterServiceService,private router:Router,private route:ActivatedRoute){ }

  ngOnInit(): void {
 //this.register = new register('','','','');

    this.id = this.route.snapshot.params['id'];
    this.reg.DetailsById(this.id)
      .subscribe((data:any) => {
        //console.log(data)
          
        this.register = JSON.parse(data);
        console.log("update");
        console.log(this.register);
      
       // console.log(JSON.stringify(this.register))
        // for (let obj of this.register) {
        //   console.log("object:", obj);
          // for (let key in obj) {
          //     console.log("      key:", key, "value:", obj[key]);
          // }
          // for(let obj in  this.register)
          // {
          //   console.log(obj);
          // }
      // }
    //  console.log(Object.keys(this.register))
      
        console.log(this.register["userName"]);
      }, error => console.log(error));
  }
  onSubmit()
  {
    this.reg.updateEmployee(this.id, this.register)
    
    .subscribe(data => console.log(data), 
    error => console.log(error));
  //this.register = new register("","","","");
  console.log("in update details :"+this.id);
  this.router.navigate(['/profile']);
  
  }


  list(){
    this.router.navigate(['profile']);
  }

}
