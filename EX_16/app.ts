let PlacesToVisit:string[] = ["pakaistan","america","canada","paris","italy"];

// in its original form
console.log(PlacesToVisit);
// in alphabetical order without changing actual form
console.log([...PlacesToVisit].sort());
// in its original orderrrrr
console.log(PlacesToVisit);
// in its reversed formmm without changing actual form
console.log([...PlacesToVisit].sort().reverse());
// in its original formm
console.log(PlacesToVisit);
// in its reversed form
PlacesToVisit.reverse();
console.log(PlacesToVisit);
// Reverse the order of the list again to get back to the original order
PlacesToVisit.reverse();
console.log(PlacesToVisit);
// Sort the array in alphabetical order
PlacesToVisit.sort();
console.log(PlacesToVisit);
// Sort the array in reverse alphabetical order
PlacesToVisit.sort((a,b)=> b.localeCompare(a));
console.log(PlacesToVisit);
