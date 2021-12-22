export class register{
    id :number;
    userName:string;
    password:string;
    confirmPassword:string;
    email:string;
   // constructor(){}
    constructor(
        userName:string,
        password:string,
        confirmPassword:string,
        Email:string
    ){
      this.userName=userName;
      this.password=password;
      this.confirmPassword=confirmPassword;
      this.email=Email;
    }
    //  user_name:string;
    //  password:string;
    //  email:string;
    //  confirm_password:string;

    //  constructor( user_name:string,
    //   password:string,
    //   email:string,
    //   confirm_password:string){
    //     this.user_name=user_name;
    //     this.password=password;
    //     this.confirm_password=confirm_password;
    

    //  }

	// public  getUserName() {
	// 	return this.userName;
	// }
	// public  setUserName( userName) {
	// 	this.userName = userName;
	// }
	// public  getPassword() {
	// 	return this.password;
	// }
	// public  setPassword( password) {
	// 	this.password = password;
	// }
	// public  getConfirmPassword() {
	// 	return this.confirmPassword;
	// }
	// public  setConfirmPassword( cpass) {
	// 	this.confirmPassword = cpass;
	// }
	// public  getEmail() {
	// 	return this.Email;
	// }
	// public  setEmail( Email) {
	// 	this.Email = Email;
//	}
}