let nums:number[]=[1,2,3,4,5,6,7,8,9,];

for(let num of nums){

    let ordinalending:string;
    if(num === 1){
        ordinalending = "st";
    }
    else if(num === 2){
        ordinalending = "nd";
    }
    else if(num === 3){
        ordinalending = "rd";
    }
    else{
        ordinalending = "th";
    }

    console.log(`${num}${ordinalending}`);
}