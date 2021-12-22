export class password{
 id:number;
 oldPassword:String;
 newPassword:String;
constructor( id1:number,
     oldPassword:String,
     newPassword:String){
      this.id=id1;
        this.newPassword=newPassword;
        this.oldPassword=oldPassword;
    }

}