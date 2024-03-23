let alien_color:string ="green";

if(alien_color == "green"){
    console.log("the player just earned 5 points for shooting");
}
else if(alien_color == "yellow"){
    
    console.log("the player just earned 10 points for shooting");
}
else{

}

switch(alien_color){
    case'green':
    console.log("Player just earned 5 points.");
    break;
    case'blue':
    console.log("Player just earned 10 points.");
    break;
    case'red':
    console.log("Player just earned 15 points.");
    break;
    default:
        console.log("unknown alien color");
}
