function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
}


let magicians: string[] = ["john", "abdvillers", "sam"];


magicians = make_great(magicians);


show_magicians(magicians);
