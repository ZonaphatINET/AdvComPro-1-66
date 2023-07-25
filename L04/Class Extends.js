// Parent class
class Media {
    constructor(info) { // info is an object
        this.publisher = info.publisher; // this.publisher is a property    
        this.name = info.name; // this.name is a property
    }
}

// Child class
class Song extends Media { // Song ขยายมาจาก Media
    constructor(songData) { // songData is an object
        super(songData); // เรียก คอนสตรัคเตอร์ ของคลาสพาเรนต์
        this.artist = songData.artist; // this.artist is a property
    }
}

const mySong = new Song({
    artist: 'Queen',
    name: 'Bohemian Rhapsody',
    publisher: 2015
});

console.log(mySong)