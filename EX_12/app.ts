const guestlist: Array<string> = ["Ashfaq","hammad","Azlan","Ali"];

function im(guest:string){
    return `Dear ${guest}, i would be honored if you would join me for dinner`;
}
guestlist.forEach(guest => {
    const message = im(guest);
    console.log(message);
});
