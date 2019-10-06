let slides = document.querySelectorAll('.slide');
let pauseBtn = document.querySelector('#pause');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let inContainer = document.querySelector('.indicators');
let indTimes = document.querySelectorAll('.indicator');

let currentSlide = 0;
let playing = true;
let timeInterval = 3000;
let timerID;
let length = slides.length;

const KEY_RIGHT = 'ArrowRight';
const KEY_LEFT = 'ArrowLeft';
const SPACE = 'Space';

function nextSlide() {
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
    playing = !playing;
    clearInterval(timerID);
    pauseBtn.innerHTML = 'Play';
};

function PlayPouse() {
    if (playing) {
        playing = !playing;
        clearInterval(timerID);
        pauseBtn.innerHTML = 'Play';
    } else {
        playing = !playing;
        timerID = setInterval(nextSlide, timeInterval);
        pauseBtn.innerHTML = 'Pause';
    };
};

pauseBtn.onclick = () => {
    PlayPouse();
};

function goToPrev () {
    pause();
    gotoSlide(currentSlide - 1);
};

function goToNext () {
    pause();
    gotoSlide(currentSlide + 1);  
};

prevBtn.onclick = () => {
    goToPrev();
};

nextBtn.onclick = () => {
    goToNext();
};

let clickIndicator = function(e) {
    let target = e.target;

    if(target.classList.contains('indicator')){
        pause();
        gotoSlide(+target.getAttribute('data-slide-to'));
    }
};

inContainer.addEventListener('click', clickIndicator);

document.addEventListener('keydown', function(e) {
    if(e.code == KEY_LEFT) {
        goToPrev();
    }
});

document.addEventListener('keydown', function(e) {
    if(e.code == KEY_RIGHT) {
        goToNext();
    }
});

document.addEventListener('keydown', function(e) {
    if(e.code == SPACE) {
        PlayPouse();
    }
});