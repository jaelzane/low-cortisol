const img = document.createElement("img");

img.src = 'images/LevelMeter.png';

const container = document.getElementById("meter");
container.appendChild(img);

const img1 = document.createElement("img");

img1.src = 'images/Needle.svg';

const container1 = document.getElementById("needle");
container1.appendChild(img1);

// low cortisol
const btn = document.getElementById("btn");
const needle = document.querySelector("#needle img");
const audio = new Audio('audio/lowcortisol100%.mp3');

let currentRotation = 0;

btn.addEventListener('click', () => {
    currentRotation -= 10;

    needle.style.transform = `rotate(${currentRotation}deg)`;

    if (currentRotation == -120) {
        audio.play();
    }

    if (currentRotation < -120) {
        currentRotation = -120;
    }
});

// high cortisol
const btnh = document.getElementById("btnh");
const audio1 = new Audio('audio/stress.mp3');

btnh.addEventListener('click', () => {
    currentRotation += 10;

    needle.style.transform = `rotate(${currentRotation}deg)`;

    if (currentRotation == 120) {
        audio1.play();
    }

    if (currentRotation > 120) {
        currentRotation = 120;
    }
});