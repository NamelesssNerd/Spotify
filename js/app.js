const MusicInfo = [
    {
        NAME: 'Badhaiyaan',
        ARTIST: 'Dhvani Bhanushali',
        IMG: 'https://www.pagalworld.pw/GpE34Kg9Gq/113604/150539-badhaiyaan-dhvani-bhanushali-mp3-song-300.jpg',
        LINK: '../Audio/Badhaiyaan.mp3'
    },
    {
        NAME: 'Sajna Hai Mujhe',
        ARTIST: 'Shruti Raneora',
        IMG: 'https://www.pagalworld.pw/GpE34Kg9Gq/113604/150524-sajna-hai-mujhe-shruti-rane-mp3-song-300.jpg',
        LINK: '../Audio/Sajna Hai Mujhe - Shruti Rane.mp3'
    },
    {
        NAME: 'Kacchi Doriyaan',
        ARTIST: 'Arijit Singh',
        IMG: 'https://www.pagalworld.pw/GpE34Kg9Gq/113687/150508-kacchi-doriyaan-arijit-singh-mp3-song-300.jpg',
        LINK: '../Audio/Kacchi Doriyaan - Arijit Singh.mp3'
    },
    {
        NAME: 'Jhaanjar',
        ARTIST: 'B Praak',
        IMG: 'https://www.pagalworld.pw/GpE34Kg9Gq/113692/150463-jhaanjar-b-praak-mp3-song-300.jpg',
        LINK: '../Audio/Jhaanjar - B Praak.mp3'
    },
    {
        NAME: 'Pehli Baarish Mein',
        ARTIST: 'Sumit Bhalla',
        IMG: 'https://www.pagalworld.pw/GpE34Kg9Gq/113604/150336-pehli-baarish-mein-sumit-bhalla-mp3-song-300.jpg',
        LINK: '../Audio/Pehli Baarish Mein - Sumit Bhalla.mp3'
    },
    {
        NAME: 'Manchali',
        ARTIST: 'Zahrah S Khan',
        IMG: 'https://www.pagalworld.pw/GpE34Kg9Gq/113643/150273-manchali-liger-mp3-song-300.jpg',
        LINK: '../Audio/Manchali - Liger.mp3'
    },
    {
        NAME: 'Lahanga Se Lungi',
        ARTIST: 'Samar Singh',
        IMG: 'https://www.pagalworld.pw/GpE34Kg9Gq/113490/150262-lahanga-se-lungi-samar-singh-mp3-song-300.jpg',
        LINK: '../Audio/Lahanga Se Lungi - Samar Singh.mp3'
    },
    {
        NAME: 'Suna Raja Pike Ganja ',
        ARTIST: 'Khesari Lal Yadav',
        IMG: 'https://www.pagalworld.pw/GpE34Kg9Gq/113490/149984-suna-raja-pike-ganja-khesari-lal-yadav-mp3-song-300.jpg',
        LINK: '../Audio/Suna Raja Pike Ganja - Khesari Lal Yadav.mp3'
    },
    {
        NAME: 'Aail Sawan',
        ARTIST: 'Pawan Singh',
        IMG: 'https://www.pagalworld.pw/GpE34Kg9Gq/113490/149958-aail-sawan-pawan-singh-mp3-song-300.jpg',
        LINK: '../Audio/Aail Sawan.mp3'
    },
    {
        NAME: 'Barf',
        ARTIST: 'Khesari Lal Yadav',
        IMG: 'https://www.pagalworld.pw/GpE34Kg9Gq/113490/149888-barf-khesari-lal-yadav-mp3-song-300.jpg',
        LINK: '../Audio/Barf - Khesari Lal Yadav.mp3'
    }
];

const Fresh = [
    {
        IMG: '../images/Cover/1.png',
        SONGNAME: 'Nepal Top Songs 2079',
        ARTISTNAME: 'Sabin Rai'
    },
    {
        IMG: '../images/Cover/2.png',
        SONGNAME: 'NOT SOBER (feat. POLO G)',
        ARTISTNAME: 'The Kid Larol'
    },
    {
        IMG: '../images/Cover/3.png',
        SONGNAME: 'G Herbo',
        ARTISTNAME: 'Stunna Gambino'
    },
    {
        IMG: '../images/Cover/4.png',
        SONGNAME: "DON'T LEAVE ME",
        ARTISTNAME: 'Lil Durk'
    },
    {
        IMG: '../images/Cover/5.png',
        SONGNAME: 'BAD NEWS',
        ARTISTNAME: 'The Kid LAROL'
    },
    {
        IMG: '../images/Cover/6.png',
        SONGNAME: 'CALLING MY PHONE',
        ARTISTNAME: 'Lil Tjay'
    },
    {
        IMG: '../images/Cover/7.png',
        SONGNAME: 'REAL SPILL',
        ARTISTNAME: 'Lil BAby'
    },
    {
        IMG: '../images/Cover/8.png',
        SONGNAME: 'AS IT WAS',
        ARTISTNAME: 'Harry Styles'
    }
];

// let SongNumber = MusicInfo.length - 1;
let SongNumberCount = 0;
let Second = 0;
let Min = 0;
let ISecond = 0;
let IMin = 0;
const HamroDataDivv = document.getElementById('Fresh');
const Music = document.getElementById("myAudio");
const SongName = document.getElementById('SongName');
const ArtistName = document.getElementById('Artist');
const Picture = document.getElementById('SongImage');
const Back = document.getElementById('Back');
const PLAY = document.getElementById('Play');
const Next = document.getElementById('Next');
const M = document.getElementById('MINInit');
const S = document.getElementById('SECInit');
const LM = document.getElementById('MINFin');
const LS = document.getElementById('SECFin');
const Final = document.getElementById('Final');
const ProgressBarInner = document.getElementById('InnerProgressBar');
const ProgressBarClick = document.getElementById('MainProgress');




Fresh.map((currenELem) => {
    const InnerData = `<div class="box">
    <div class="Image">
        <img src="${currenELem.IMG}" alt="">
    </div>
    <div class="bottom">
        <h3 class="SongsName">${currenELem.SONGNAME}</h3>
        <h3 class="Artistss">${currenELem.ARTISTNAME}</h3>
    </div>
</div>`;
    HamroDataDivv.insertAdjacentHTML('beforeend', InnerData);
})

function MUSICALL(index) {
    SongName.textContent = MusicInfo[index].NAME;
    ArtistName.textContent = MusicInfo[index].ARTIST;
    Picture.src = MusicInfo[index].IMG;
    Music.src = MusicInfo[index].LINK;
}
MUSICALL(SongNumberCount);
let IsPlaying = true;

Music.addEventListener('timeupdate', (event) => {
    const { currentTime, duration } = event.srcElement;
    ProgressBar(currentTime, duration);
})
PLAY.addEventListener('click', () => {
    IsPlaying ? Playing() : Pausing();
});
Next.addEventListener('click', () => {
    NextSong();
});
Back.addEventListener('click', () => {
    PreviousSong();
});
function Playing() {
    Music.play();
    PLAY.classList.replace('fa-play', 'fa-pause');
    IsPlaying = false;
    Picture.classList.add('Pictures');
}
function Pausing() {
    Music.pause();
    PLAY.classList.replace('fa-pause', 'fa-play');
    IsPlaying = true;
    Picture.classList.remove('Pictures');
}
function PreviousSong() {
    SongNumberCount--;
    SongNumberCount == -1 ? SongNumberCount = SongNumber : SongNumberCount;
    MUSICALL(SongNumberCount);
    Music.play()
}
function NextSong() {
    SongNumberCount++;
    SongNumberCount == 10 ? SongNumberCount = 0 : SongNumberCount;
    MUSICALL(SongNumberCount);
    Music.play()
}
function ProgressBar(curren, total) {
    let TotalWidth = (curren / total) * 100;
    ProgressBarInner.style.width = TotalWidth + '%';
    Min = Math.floor(total / 60);
    Second = Math.floor(total % 60);
    FinalTime(Min, Second);
    InitialTime(Math.floor(curren));
}
function FinalTime(minute, seconds) {
    if (minute) {
        LM.textContent = minute;
        LS.textContent = seconds;
    } else {
        LM.textContent = 3;
        LS.textContent = 13;
    }
}
function InitialTime(final) {
    IMin = Math.floor(final / 60);
    ISecond = (final % 60);

    if (IMin) {
        M.textContent = IMin;
        S.textContent = ISecond;
    } else {
        if (ISecond < 10) {
            M.textContent = IMin;
            S.textContent = '0' + ISecond;
        } else {
            M.textContent = IMin;
            S.textContent = ISecond;
        }

    }
}
Music.addEventListener('ended', () => {
    Next.click();
})
ProgressBarClick.addEventListener('click', (event) => {
    const { duration } = Music;
    const { clientWidth } = event.srcElement;
    const { offsetX } = event;
    let OurTime = (offsetX / clientWidth) * duration;
    Music.currentTime = OurTime;
})