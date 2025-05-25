const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < 150; i++) {
  particles.push({
    x: random(0, canvas.width),
    y: random(0, canvas.height),
    r: random(2, 6),
    d: random(1, 3),
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    tilt: Math.floor(Math.random() * 10) - 10
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  update();
}

function update() {
  particles.forEach(p => {
    p.y += p.d;
    p.x += Math.sin(p.tilt);
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = random(0, canvas.width);
    }
  });
}

function loop() {
  draw();
  requestAnimationFrame(loop);
}

loop();

function playMusic() {
  document.getElementById('birthdaySong').play();
}
