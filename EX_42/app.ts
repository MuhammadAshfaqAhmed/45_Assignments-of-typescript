function make_sandwich(...ingredients:string[]):void{

    console.log("making a sandwich with following ingredients");
    ingredients.forEach(ingredient=>{
        console.log("-" + ingredient);
    });
    console.log("Enjoy your sandwich");
}
make_sandwich("cheese","tomato","pepproni");
make_sandwich("cheese","beef","pepproni");
make_sandwich("cheese","tomato","chicken");