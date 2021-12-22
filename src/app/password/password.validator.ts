import {AbstractControl,ValidatorFn} from '@angular/forms';
//import {FormGroup} from '@angular/forms';

 export function firstCharacter(caps :RegExp): ValidatorFn {
      return (control:AbstractControl):{[key:string]:any}|null =>{
  const ifFirstCharacter =(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(control.value);
  //const  ifFirstCharacter =control.get('password');

  return ifFirstCharacter ?{'capital':{value:control.value}}:null;
      }
 }

export function passwordValidator(control :AbstractControl):{[key:string]:any}|null{
  const ifPassword =control.get('password');
  const ifConfirmPassword = control.get('confirmPassword');
  if((ifPassword.pristine || ifConfirmPassword.pristine) && (ifPassword.touched || ifPassword.touched))
  {
    return null;
  }
  return ifPassword && ifConfirmPassword && ifPassword.value !== ifConfirmPassword.value? {'misMatch':true}:null;
}






// export function firstCharacter(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//       const control = formGroup.controls[controlName];
//       const matchingControl = formGroup.controls[matchingControlName];

//       if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//           // return if another validator has already found an error on the matchingControl
//           return;
//       }

//       // set error on matchingControl if validation fails
//       if (control.value !== matchingControl.value) {
//           matchingControl.setErrors({ mustMatch: true });
//       } else {
//           matchingControl.setErrors(null);
//       }
//   }
// }


