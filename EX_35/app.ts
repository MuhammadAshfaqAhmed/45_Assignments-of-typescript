
function make_shirt(size:string="medium",message:string="hello world"){
    return `The shirt size is ${size.toUpperCase()} and it says: "${message}"`;
}
let medium_shirt = make_shirt();

console.log(medium_shirt);

let large_shirt = make_shirt("large")

console.log(large_shirt);

let small_shirt = make_shirt("small","hello typescript");

console.log(small_shirt);