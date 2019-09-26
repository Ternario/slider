let slides = document.querySelectorAll('.slide');
let pauseBtn = document.querySelector('#pause');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');

let currentSlide = 0;
let playing = true;
let timeInterval = 3000;
let timerID;
let length = slides.length;

function nextSlide() {
    slides[currentSlide].classList.toggle('active'); 
    currentSlide = (currentSlide + 1) % length;
    slides[currentSlide].classList.toggle('active'); 
}

let gotoSlide = (n) => {
    slides[currentSlide].classList.toggle('active');
    currentSlide = (length + n) % length;
    slides[currentSlide].classList.toggle('active');
}

timerID = setInterval(nextSlide, timeInterval);

function startTime() {
    timerID;
}

let pause = () => {
    playing = !playing;
    clearInterval(timerID);
    pauseBtn.innerHTML = 'Play';

}

pauseBtn.onclick = () => {
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

prevBtn.onclick = () => {
    gotoSlide(currentSlide - 1);
}

nextBtn.onclick = () => {
    gotoSlide(currentSlide + 1);
}
