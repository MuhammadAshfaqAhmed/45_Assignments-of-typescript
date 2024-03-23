let guestlist: Array<string> = ["Ashfaq","hammad","Azlan","Ali"];

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

console.log("Unfortunately, the new dinner table won't arrive in time, and I can only invite two people for dinner.");


while (guestlist.length > 2) {
    const removedGuest = guestlist.pop();
    if (removedGuest) {
      console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
    }
  }
  

guestlist.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
  });

  guestlist  = [];
 
  console.log("Guest list is now empty:", guestlist);