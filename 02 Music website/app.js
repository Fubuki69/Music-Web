const music = new Audio('audio/kaliuchis-moonlight.mp3');
// music.play()

// function playSound(audioName) {
//     let audio = new Audio(audioName);
//     audio.play();
// }
// playSound("audio/PASTEL GHOST ~ DARK BEACH.mp3");

const songs = [
    {
        id: 1,
        songName: `Moonlight <br> 
        <div class="subtitle"> Kali Uchis </div>`,
        poster: "music.img/Kali_Uchis_Moonlight.png"
    },
    {
        id: 2,
        songName: `Override <br> 
        <div class="subtitle"> KSLV Noh </div>`,
        poster: "music.img/override.kslv.jpg"
    },
    {
        id: 3,
        songName: `YUM YUM <br> 
        <div class="subtitle"> LXNGVX, Mc Gw </div>`,
        poster: "music.img/yum yum.jpg"
    },
    {
        id: 4,
        songName: `METAMORPHOSIS <br> 
        <div class="subtitle"> INTERWORLD </div>`,
        poster: "music.img/metamorphosis.mg.webp"
    },
    {
        id: 5,
        songName: `Dark Beach <br> 
        <div class="subtitle"> Pastel Ghost </div>`,
        poster: "music.img/darkbeach.mi.jpg"
    },
    {
        id: 6,
        songName: `Endless Love <br> 
        <div class="subtitle"> DVRST, OBLXKQ </div>`,
        poster: "music.img/endlesslove.mi.jpg"
    },
    {
        id: 7,
        songName: `GOOFY PHONK <br> 
        <div class="subtitle"> Ariis </div>`,
        poster: "music.img/goofyphonk.mi.jpg"
    },
    {
        id: 8,
        songName: `Murder In My Mind <br> 
        <div class="subtitle"> Kordhell </div>`,
        poster: "music.img/mimm.mi.jpg"
    },
    {
        id: 9,
        songName: `Memory Reboot <br> 
        <div class="subtitle"> VØJ, Narvent </div>`,
        poster: "music.img/memoryreboot.mi.jpg"
    },
    {
        id: 10,
        songName: `Sleepwalker <br> 
        <div class="subtitle"> akiaura, LONOWN, STM </div>`,
        poster: "music.img/sleepwalker.mi.jpg"
    },
    {
        id: 11,
        songName: `Save That Shit <br> 
        <div class="subtitle"> Lil Peep </div>`,
        poster: "music.img/sts.mi.jpg"
    },
    {
        id: 12,
        songName: `SAD! <br> 
        <div class="subtitle"> XXXTENTACION </div>`,
        poster: "music.img/sad.mi.png"
    },
    {
        id: 13,
        songName: `Starboy <br> 
        <div class="subtitle"> The Weeknd, Daft Punk </div>`,
        poster: "music.img/starboy.mi.jpg"
    },
    {
        id: 14,
        songName: `Vamp Anthem <br> 
        <div class="subtitle"> Playboi Carti </div>`,
        poster: "music.img/va.mi.jpg"
    },
    {
        id: 15,
        songName: `West Coast <br> 
        <div class="subtitle"> Lana Del Rey </div>`,
        poster: "music.img/wc.mi.jpg"
    },
    {
        id: 16,
        songName: `ocean eyes <br> 
        <div class="subtitle"> Billie Eilish </div>`,
        poster: "music.img/oeyes.mi.jpg"
    },
    {
        id: 17,
        songName: `Lonely <br> 
        <div class="subtitle"> Akon </div>`,
        poster: "music.img/alone.mi.jpg"
    },
    {
        id: 18,
        songName: `Poker Face <br> 
        <div class="subtitle"> Lady Gaga </div>`,
        poster: "music.img/pokerface.mi.jpg"
    },
    {
        id: 19,
        songName: `Summertime Sadness <br> 
        <div class="subtitle"> Lana Del Rey </div>`,
        poster: "music.img/ss.mi.jpg"
    },
    {
        id: 20,
        songName: `Sleepwalker <br> 
        <div class="subtitle"> akiaura, LONOWN, STM </div>`,
        poster: "music.img/sleepwalker.mi.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330; 
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330; 
});


let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let item = document.getElementsByClassName('item')[0];

pop_artist_right.addEventListener('click', ()=>{
    item.scrollLeft += 330; 
});
pop_artist_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330; 
}); 