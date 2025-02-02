//fireFiles animation in the background
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
    for (let i = 0; i < 80; i++) {
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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    fireflies = [];
    generateFireflies();
});

const particlesScript = document.createElement('script');
particlesScript.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
particlesScript.onload = () => {
    particlesJS("particles-js", {
        particles: {
            number: { value: 65, density: { enable: true, value_area: 800 } },
            color: { value: "#f00" },
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

window.onload = function() {
    const color = localStorage.getItem('primaryColor');
    if (color && color != 'red') {
        document.body.dataset.primaryColor = 'blue';
        document.documentElement.style.setProperty('--primary-color2', 'blue');
        updateParticleColor('#00f');
    } else {
        document.body.dataset.primaryColor = 'red';
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const loremText = document.querySelector(".loremText");
    scrollText('Welcome to my first landing page of "Discovering the world and have adventrues" I hope you like it ;)', loremText);
});

function insertString(sentence, string, index) {
    return sentence.slice(0, index) + string + sentence.slice(index);
}

function removeString(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}

function scrollText(text, entry) {
    let counter = 0;
    for (let x = 0; x < text.length; x++) {
        setTimeout(() => {
        entry.textContent = insertString(entry.textContent, ' ', -1);
        entry.textContent = insertString(entry.textContent, text[counter], counter);
        counter++;}, (text.length - x) * 80);
    }
}

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