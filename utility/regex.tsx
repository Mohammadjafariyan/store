
export class GLOBAL_REGEXES_UTIL{
 static EMAIL =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;   
 static  MOBILE =/^(?:(\u0660\u0669[\u0660-\u0669][\u0660-\u0669]{8})|(\u06F0\u06F9[\u06F0-\u06F9][\u06F0-\u06F9]{8})|(09[0-9][0-9]{8}))$/;  
 
 static emailRegex=new RegExp( GLOBAL_REGEXES_UTIL.EMAIL);
 static mobileRegex=new RegExp(GLOBAL_REGEXES_UTIL.MOBILE);

}

export function RegexEmailUtil(value:string){

   

    return GLOBAL_REGEXES_UTIL. emailRegex.test(value); 
}
 

export function RegexMobileUtil(value:string){

    return GLOBAL_REGEXES_UTIL.mobileRegex.test(value);

}