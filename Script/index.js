//Theme buttons
function ApplyPrimaryColon(color) {
    document.documentElement.style.setProperty('--primary-color2', color);
    document.getElementById("userNameInput").style.color = color;
    document.getElementById("userEmailInput").style.color = color;
    document.getElementById("userNumberInput").style.color = color;
}

const root = document.documentElement;
const primaryColor = getComputedStyle(root).getPropertyValue('--primary-color2').trim();
const storedColor = localStorage.getItem('primaryColor');
if (storedColor && storedColor != 'red') {
    document.body.dataset.primaryColor = 'blue';
    ApplyPrimaryColon('blue');
    document.documentElement.style.setProperty('--primary-color3', 'rgb(149, 255, 0)');
} else {
    document.body.dataset.primaryColor = 'red';
}

document.querySelector(".theme1").onclick = function() {
    if (document.body.dataset.primaryColor != 'red') {
        const theme1 = document.querySelector(".theme1");
        document.documentElement.style.setProperty('--primary-color3', 'red');
        localStorage.setItem('primaryColor', 'red');
        document.body.dataset.primaryColor = 'red';
        updateParticleColor("#f00");
        ApplyPrimaryColon('red');
        let previousAnimation = theme1.style.animation;
        theme1.style.setProperty('animation', 'insideOut 0.7s ease');
        setTimeout(() => { theme1.style.setProperty('animation', previousAnimation); }, 650);
    }
};

document.querySelector(".theme2").onclick = function() {
    if (document.body.dataset.primaryColor != 'blue') {
        const theme2 = document.querySelector(".theme2");
        document.documentElement.style.setProperty('--primary-color3', 'rgb(149, 255, 0)');
        document.body.dataset.primaryColor = 'blue';
        localStorage.setItem('primaryColor', 'blue');
        updateParticleColor("#00f");
        ApplyPrimaryColon('blue');
        let previousAnimation = theme2.style.animation;
        theme2.style.setProperty('animation', 'insideOut 0.7s ease');
        setTimeout(() => { theme2.style.setProperty('animation', previousAnimation); }, 650);
    }
};

//User inputs settings for the contact section
const userNameInputField = document.getElementById("userNameInput");
userNameInputField.addEventListener('input', (event) => {
    const currentValue = event.target.value;
    let error1 = document.getElementById("error1");
    error1.innerHTML = '';
    if (currentValue.length == 1) {
        event.target.value = currentValue.toUpperCase();
    } else if (currentValue[currentValue.length-2] == " ") {
        event.target.value = currentValue.slice(0, currentValue.length-1) + currentValue[currentValue.length-1].toUpperCase();
    }
    event.target.style.fontSize = '1.2rem';
    event.target.style.fontFamily = 'Orbitron';
    event.target.style.color = document.body.dataset.primaryColor;
});

const userEmailInputField = document.getElementById("userEmailInput");
userEmailInputField.addEventListener('input', (event) => {
    let error2 = document.getElementById("error2");
    error2.innerHTML = '';
    event.target.style.fontSize = '1.2rem';
    event.target.style.fontFamily = 'Orbitron';
    event.target.style.color = document.body.dataset.primaryColor;
});

const userNumberInputField = document.getElementById("userNumberInput");
userNumberInputField.addEventListener('input', (event) => {
    let error3 = document.getElementById("error3");
    error3.innerHTML = '';
    event.target.style.fontSize = '1.2rem';
    event.target.style.fontFamily = 'Orbitron';
    event.target.style.color = document.body.dataset.primaryColor;
});

//Background particles
const particlesScript = document.createElement('script');
particlesScript.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
particlesScript.onload = () => {
    particlesJS("particles-js", {
        particles: {
            number: { value: 65, density: { enable: true, value_area: 800 } },
            color: { value: "#ff0" },
            shape: { type: "circle" },
            opacity: { value: 0.8, random: false },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.8, width: 0.5 },
            move: { enable: true, speed: 1.3 }
        }
    });
};
document.body.appendChild(particlesScript);

function updateParticleColor(newColor) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 65, density: { enable: true, value_area: 800 } },
            color: { value: newColor },
            shape: { type: "circle" },
            opacity: { value: 0.8, random: false },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.8, width: 0.5 },
            move: { enable: true, speed: 1.3 }
        }
    });
}

//FadeIn and out texts
const textElement = document.getElementById('animatedText');
const messages = ["I Hope You Like My Work =D", "Witness The Future Of Web Designing!", "This is a Future themed website"];
let currentIndex = 0;

function changeText() {
    textElement.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        textElement.textContent = messages[currentIndex];
        textElement.style.opacity = 1;
    }, 500); // This needs to match the css transition time (0.5s)
}
setInterval(changeText, 5000);

//My Resume button click animation
document.getElementById("myResume").onclick = function() {
    const resume = document.getElementById("myResume");
    let previousAnimation = resume.style.animation;
    resume.style.setProperty('animation', 'insideOut 0.7s ease');
    setTimeout(() => {resume.style.setProperty('animation', previousAnimation)}, 650);
}


//Hamburger menu button setup
document.querySelector(".hamburgerMenu").onclick = function() {
    const header = document.querySelector(".header");
    const navBarUL = document.querySelector(".navBarUL");
    navBarUL.style.display = navBarUL.active ? 'none' : 'flex';
    navBarUL.active = navBarUL.active ? false : true;
    header.style.height = navBarUL.active ? '24vh' : '7vh';
}

//Background audio settings
let currentSongIndex = 0;
const audio = document.getElementById("audio");
const audioButton = document.getElementById("audioButton");
const audioSource = document.getElementById("audioSource");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");
const playlist = [
    "Audio/Punch-Deck~I-Can't-Stop.mp3",
    "Audio/Infraction-AleXZavesa-Alexi-Action~Unholy-Blood.mp3",
    "Audio/Alex-Productions~Cyberpunk.mp3",
    "Audio/Lesion-X~Biohazard.mp3",
    "Audio/Scott-Buckley~This-Too-Shall-Pass.mp3"
];

audioButton.addEventListener("click", () => {
    const songName = document.querySelector('.songName');
    if (audio.paused) {
        audio.play();
        audioButton.innerHTML = 'Pause Music <span class="symbol-settings"><i class="fa fa-pause" aria-hidden="true"></i></span>';
        songName.style.display = 'flex';
        if (songName.firstTimeLoaded != true) {
            songName.textContent = "♫ Loading Audio Name...";
            songName.firstTimeLoaded = true;
            setTimeout(() => {songName.textContent = ''; scrollAudioName();}, 2000);
        }
    } else {
        audio.pause();
        audioButton.innerHTML = 'Play Music <span class="symbol-settings"><i class="fa fa-play" aria-hidden="true"></span>';
        songName.style.display = 'none';
    }
    let previousAnimation = audioButton.style.animation;
    audioButton.style.setProperty('animation', 'insideOut 0.7s ease');
    setTimeout(() => {audioButton.style.setProperty('animation', previousAnimation)}, 650);
});

function loadSong(index) {
    if (index >= 0 && index < playlist.length) {
        const songName = document.querySelector('.songName');
        audioSource.src = playlist[index];
        audio.load();
        audio.oncanplaythrough = () => {
            audio.play();
        };
        if (window.getComputedStyle(songName).getPropertyValue('display') != 'flex') {
            songName.style.display = 'flex';
            if (songName.firstTimeLoaded != true) {
                songName.textContent = "♫ Loading Audio Name...";
                songName.firstTimeLoaded = true;
                setTimeout(() => {songName.textContent = ''; scrollAudioName();}, 2000);
            }
        }
    }
}

nextButton.addEventListener("click", () => {
    if (audio.paused) {
        audioButton.innerHTML = 'Pause Music <span class="symbol-settings"><i class="fa fa-pause" aria-hidden="true"></i></span>';
    }
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    let previousAnimation = nextButton.style.animation;
    nextButton.style.setProperty('animation', 'insideOut 0.7s ease');
    setTimeout(() => {nextButton.style.setProperty('animation', previousAnimation)}, 650);
});

previousButton.addEventListener("click", () => {
    if (currentSongIndex > 0) {
        currentSongIndex = (currentSongIndex - 1) % playlist.length;
        loadSong(currentSongIndex);
        if (audio.paused) {
            audioButton.innerHTML = 'Pause Music <span class="symbol-settings"><i class="fa fa-pause" aria-hidden="true"></i></span>';
        }
    } else if (currentSongIndex == 0 && audio.paused == false) {
        audio.currentTime = 0;
    }
    let previousAnimation = previousButton.style.animation;
    previousButton.style.setProperty('animation', 'insideOut 0.7s ease');
    setTimeout(() => {previousButton.style.setProperty('animation', previousAnimation)}, 650);
});

audio.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
});

//Audio name that also applies as credits to the makers
function insertString(str, string, index) {
    return str.slice(0, index) + string + str.slice(index);
}

function removeString(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}

function scrollAudioName() {
    let currentAudioName = audioSource.src;
    currentAudioName = currentAudioName.replaceAll("-", " ");
    const audioName = currentAudioName.substring(currentAudioName.lastIndexOf('/') + 1);
    const songName = document.querySelector('.songName');
    let audioNameOnly = '♫ Audio by ' + audioName.split('.').slice(0, -1).join('.');
    audioNameOnly = audioNameOnly.replace("~", " - ")
    let counter = 0;
    for (let x = 0; x < audioNameOnly.length; x++) {
        setTimeout(() => {
        songName.textContent = insertString(songName.textContent, ' ', -1);
        songName.textContent = insertString(songName.textContent, audioNameOnly[counter], counter);
        counter++;
        if (audioNameOnly[x] == '♫') {
            counter = 0;
            songName.textContent = audioNameOnly;
            for (let y = 0; y < songName.textContent.length; y++) {
                setTimeout(() => {
                    songName.textContent = removeString(songName.textContent, counter);
                    if (songName.textContent.length == 1) {
                        if (window.getComputedStyle(songName).getPropertyValue('display') == 'none') {
                            songName.firstTimeLoaded = null;
                        } else {
                            scrollAudioName();
                        }
                    }
                }, (songName.textContent.length - y) * 90);
            }
        }}
        , (audioNameOnly.length - x) * 90);
    }
}

//fireFiles animation in the background only placed on the projects area
const canvas = document.getElementById('firefliesCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireflies = [];
const colors = ['#ff00ff', 'rgb(149, 255, 0)', document.body.dataset.primaryColor];

class Firefly {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
    }
}

function generateFireflies() {
    for (let i = 0; i < 100; i++) {
        fireflies.push(new Firefly());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireflies.forEach(firefly => {
        firefly.update();
        firefly.draw();
    });
    requestAnimationFrame(animate);
}

generateFireflies();
animate();

window.addEventListener('resize', () => {
    const header = document.querySelector(".header");
    const navBarUL = document.querySelector(".navBarUL");
    if (window.innerWidth > 500 && (window.getComputedStyle(header).getPropertyValue('height') != '7vh' || window.getComputedStyle(navBarUL).getPropertyValue('display') == 'none')) {
        navBarUL.style.display = 'flex';
        header.style.height = '7vh';
        navBarUL.active = false;
    } else if (window.innerWidth <= 500 && window.getComputedStyle(navBarUL).getPropertyValue('flex-direction') == 'column') {
        navBarUL.style.display = 'none';
        navBarUL.active = false;
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    fireflies = [];
    generateFireflies();
});

//The send button setup of the contact section
document.getElementById("btn").onclick = function() {
    const sendInfoButton = document.getElementById("btn");
    const loadingAnimation = document.querySelector(".loader");
    const inputsField = document.querySelector(".inputsField");
    const contactH2 = document.querySelector(".contactH2");
    const name = document.getElementById("userNameInput").value.trim();
    const email = document.getElementById("userEmailInput").value.trim();
    const pnum = document.getElementById("userNumberInput").value.trim();
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    loadingAnimation.style.display = 'block';
    loadingAnimation.style.animation = 'fadeIn 1s ease-in-out, spin 1s linear infinite'
    sendInfoButton.disabled = true;
    error1.innerHTML = '';
    error2.innerHTML = '';
    error3.innerHTML = '';
    let isValid = true;

    setTimeout(() => {
        if (name === "") {
            isValid = false;
            error1.innerHTML = '* Name field cannot be empty!'
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            error1.innerHTML = '* Name can only contain letters and spaces!'
            isValid = false;
        }
        if (email === "") {
            error2.innerHTML = '* Email field cannot be empty!';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            error2.innerHTML = '* Please enter a valid email address!';
            isValid = false;
        }
        if (pnum === "") {
            error3.innerHTML = '* Phone field cannot be empty!';
            isValid = false;
        } else if (!/^\d{10}$/.test(pnum)) {
            error3.innerHTML = '* Phone number must be 10 digits!';
            isValid = false;
        }
        if (isValid) {
            contactH2.innerHTML = 'Information Sent!'
            contactH2.style.animation = 'fadeIn 2s ease-in-out, glow2 1.5s infinite alternate, moveElement2 1s ease-in-out'
            loadingAnimation.style.display = 'none';
            loadingAnimation.style.animation = 'none';
            inputsField.style.display = 'none';
            sendInfoButton.disabled = false;
        } else {
            loadingAnimation.style.display = 'none';
            loadingAnimation.style.animation = 'none';
            sendInfoButton.disabled = false;
        }
    }, 2000);
    let previousAnimation = sendInfoButton.style.animation;
    sendInfoButton.style.setProperty('animation', 'insideOut 0.7s ease');
    setTimeout(() => {sendInfoButton.style.setProperty('animation', previousAnimation)}, 650);
}

//Opacity effect on the projects when scrolling
const projects = document.querySelectorAll('.projects');
function projectsRevealOnScroll() {
  projects.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
});}
window.addEventListener('scroll', projectsRevealOnScroll);

//Cursor Trail effect
document.addEventListener("mousemove", (e) => {
    const particle = document.createElement("div");
    particle.classList.add("trailEffectparticle");
    document.body.appendChild(particle);

    const offsetX = window.pageXOffset;
    const offsetY = window.pageYOffset;

    particle.style.left = `${e.clientX + offsetX}px`;
    particle.style.top = `${e.clientY + offsetY}px`;

    let size = Math.random() * 2 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    setTimeout(() => { particle.remove(); }, 500);
});