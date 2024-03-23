let pname:string= "ashfaq ahmed";
// in uppercase
console.log(pname.toLocaleUpperCase());

// inlowercase
console.log(pname.toLocaleLowerCase());

// in titlecase

function totitlecase(str: string):string{
    return str.charAt(0).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
}
console.log(totitlecase(pname));