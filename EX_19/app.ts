interface city {

    name:string;
    country:string;
    population:number;
};
const cities:city[]=[
    {name:"karachi",country:"pakistan",population:12345},
    {name:"dehli",country:"india",population:638383},
    {name:"riyadh",country:"saudiarabia",population:76576},
]

cities.forEach((cityy)=>console.log(cityy));