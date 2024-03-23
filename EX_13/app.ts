const guestlist: Array<string> = ["Ashfaq","hammad","Azlan","Ali"];

const whocantmakeit = "Azlan";

console.log(`${whocantmakeit} is not joining us in dinner`);

const newguest = "awais";

guestlist.splice(guestlist.indexOf(whocantmakeit), 1, newguest);

function im(guest:string){
    return `Dear ${guest}, i would be honored if you would join me for dinner`;
}
console.log("second set of invitation");

guestlist.forEach(guest => {
    const message = im(guest);
    console.log(message);
});