let slides = document.querySelectorAll('.slide');
let playBtn = document.querySelector('#play');
let pauseBtn = document.querySelector('#pause');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let inContainer = document.querySelector('.indicators');
let indTimes = document.querySelectorAll('.indicator');

let currentSlide = 0;
let playing = true;
let timeInterval = 2000;
let timerID;
let length = slides.length;

const KEY_RIGHT = 'ArrowRight';
const KEY_LEFT = 'ArrowLeft';
const SPACE = 'Space';

let nextSlide = () => {
    slides[currentSlide].classList.toggle('active');
    indTimes[currentSlide].classList.toggle('active'); 
    currentSlide = (currentSlide + 1) % length;
    slides[currentSlide].classList.toggle('active');
    indTimes[currentSlide].classList.toggle('active'); 
};

timerID = setInterval(nextSlide, timeInterval);

let gotoSlide = (n) => {
    slides[currentSlide].classList.toggle('active');
    indTimes[currentSlide].classList.toggle('active');
    currentSlide = ( n + length) % length;
    slides[currentSlide].classList.toggle('active');
    indTimes[currentSlide].classList.toggle('active');
};

let pause = () => {
    playing = false;
    clearInterval(timerID);
    pauseBtn.classList.add('active');
    playBtn.classList.remove('active'); 
};

let play = () => {
    playing = true;
    timerID = setInterval(nextSlide, timeInterval);
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active'); 
};

let PlayPause = () => {
    if (playing) {
        pause();
    } else {
        play();
    };
};

let goToPrev = () => {
    pause();
    gotoSlide(currentSlide - 1);
};

let goToNext = () => {
    pause();
    gotoSlide(currentSlide + 1);
};

playBtn.addEventListener('click', pause);
pauseBtn.addEventListener('click', play);
prevBtn.addEventListener('click', goToPrev);
nextBtn.addEventListener('click', goToNext);

let clickIndicator = (e) => {
    let target = e.target;

    if(target.classList.contains('indicator')){
        pause();
        gotoSlide(+target.getAttribute('data-slide-to'));
    };
};

inContainer.addEventListener('click', clickIndicator);

document.addEventListener('keyup', function(e) {
    if(e.code == KEY_LEFT) {
        goToPrev();
    } else if(e.code == KEY_RIGHT) {
        goToNext();
    } else if(e.code == SPACE) {
        PlayPause();
    };
});