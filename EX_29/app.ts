
let usernames: string[]=["admin","manager","hr","user","cfo"];

 usernames.forEach(element => {
    if(element.length===0){
        console.log("we need to add some users");
    }
    else{
        if(element=="admin"){
            console.log(`hello ${element} , would you like to see a status report?`);
        }
        if(element=="admin"){
            console.log(`hello ${element} thankyou for login`);
        }
    }

   
});