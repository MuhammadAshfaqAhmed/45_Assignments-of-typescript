function city_country(city:string,country:string):string{
return `${city} ${country}`;
}

const city1 = city_country("karachi","pakistan");
const city2 = city_country("dehli","india");
const city3 = city_country("kuala lumpur","malaysia");

console.log(city1);
console.log(city2);
console.log(city3);