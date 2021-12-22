import {AbstractControl} from '@angular/forms';



 export function notNumber(control :AbstractControl):{[key:string]:any}|null{
  const ifNumber =/[0-9]/.test(control.value);
  return ifNumber ?{'Number':{value:control.value}}:null;
}
export function notSpecialCharacter(control :AbstractControl):{[key:string]:any}|null{
    const ifSpecialCharacter =/[^A-Za-z0-9]/.test(control.value);
    return ifSpecialCharacter ?{'specialCharacter':{value:control.value}}:null;
  }
//   export function not3Character(control :AbstractControl):{[key:string]:any}|null{
//     const ifNot3Character =/[A-Za-z]{3}/.test(control.value);
//     return ifNot3Character ?{'minimum3Character':{value:control.value}}:null;
//   }/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})(.[a-z]{2,20})?$/   //email1