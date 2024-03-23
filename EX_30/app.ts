let c_users : string[]=["Ali","ahmed","anas","ashfaq","ibrahim"];

let n_users : string[]=["Ali","irfan","arif","sameer","ashfaq"];

for(let n_user of n_users){

    let usernameexist = c_users.some(user => user.toLowerCase()===n_user.toLowerCase());

    if(usernameexist){
        console.log(`sorry this ${n_user} is taken try another username`);
    }
    else{
        console.log(`congratulaions the username ${n_user} is available` );
    }
}