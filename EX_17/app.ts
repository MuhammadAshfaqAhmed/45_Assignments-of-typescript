const guestlist: Array<string> = ["Ashfaq","hammad","Azlan","Ali"];

const whocantmakeit = "Azlan";

console.log(`i found a bigger table so more guest can join us in dinner`);

guestlist.splice(guestlist.indexOf(whocantmakeit),1, "muzammil");

guestlist.unshift("sameer");

guestlist.splice(Math.floor(guestlist.length/3),1, "arif");

guestlist.push("a wahab");

function im(guest:string){
    return `Dear ${guest}, i would be honored if you would join me for dinner`;
}
console.log("second set of invitation");

guestlist.forEach(guest => {
    const message = im(guest);
    console.log(message);
});

const totalinvitedpeoples = guestlist.length;

console.log(`"total members who will be gathered in my party is " ${totalinvitedpeoples}`);