let usernames: string[]=["admin","manager","hr","user","cfo"];

usernames.forEach(element => {
    if(element=="admin"){
        console.log(`hello ${element} , would you like to see a status report?`);
    }
    else{
        console.log(`hello ${element} thankyou for login`);
    }

   
});