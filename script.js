const img = document.createElement("img");
img.src = "images/LevelMeter.png";

const container = document.getElementById("meter");
container.appendChild(img);

const img1 = document.createElement("img");
img1.src = "images/Needle.svg";

const container1 = document.getElementById("needle");
container1.appendChild(img1);

const btn = document.getElementById("btn");
const btnh = document.getElementById("btnh");
const needle = document.querySelector("#needle img");

const LOW_CORTISOL_SRC = "audio/lowcortisol.mp3";
const HIGH_CORTISOL_SRC = "audio/stress.mp3";

let currentRotation = 0;

function playSound(src) {
    const sound = new Audio(src);
    sound.preload = "auto";
    sound.play().catch((err) => {
        console.error(`couldn't play ${src}:`, err);
    });
}

btn.addEventListener("click", () => {
    const previousRotation = currentRotation;
    currentRotation = Math.max(-120, currentRotation - 10);

    needle.style.transform = `rotate(${currentRotation}deg)`;

    if (previousRotation > -120 && currentRotation === -120) {
        playSound(LOW_CORTISOL_SRC);
    }
});

btnh.addEventListener("click", () => {
    const previousRotation = currentRotation;
    currentRotation = Math.min(120, currentRotation + 10);

    needle.style.transform = `rotate(${currentRotation}deg)`;

    if (previousRotation < 120 && currentRotation === 120) {
        playSound(HIGH_CORTISOL_SRC);
    }
});