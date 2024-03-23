interface Album{

    artist:string;
    title:string;
    tracks?:number;
}

function make_album(artist:string,title:string,tracks?:number):Album{
    const album: Album ={
        artist:artist,
        title:title

    }
    if(tracks !== undefined){

        album.tracks=tracks
    }
    return album;
}

const album1 = make_album("artist1","title1",);
const album2 = make_album("artist2","title2",3);
const album3 = make_album("artist3","title3",);

console.log(album1);
console.log(album2);
console.log(album3);