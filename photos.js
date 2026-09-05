const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg"
];

let current = 0;
let busy = false;
const img = document.getElementById("birthdayPhoto");

function nextPhoto() {
  if (busy) return;
  busy = true;

  // Full-screen balloon blast first
  createBalloonBlast();

  // After the blast starts, reveal the next photo
  setTimeout(() => {
    current = (current + 1) % photos.length;
    img.src = photos[current];
    img.classList.remove("blink");
    void img.offsetWidth;
    img.classList.add("blink");

    setTimeout(() => {
      busy = false;
    }, 700);
  }, 900);
}

function createBalloonBlast() {
  const layer = document.createElement("div");
  layer.className = "balloon-blast";

  const balloons = ["🎈","🎈","🎈","🎈","🎈","🎈","🎈","🎈","🎈","🎈",
                    "🎉","🎈","💖","🎈","✨","🎈","🎂","🎈","🎈","💜"];

  balloons.forEach((emoji, i) => {
    const b = document.createElement("div");
    b.className = "blast-balloon";
    b.textContent = emoji;

    const angle = (Math.PI * 2 * i / balloons.length) + (Math.random() - .5) * .4;
    const distance = 35 + Math.random() * 65;
    b.style.setProperty("--dx", Math.cos(angle) * distance + "vw");
    b.style.setProperty("--dy", Math.sin(angle) * distance + "vh");
    b.style.setProperty("--delay", (Math.random() * .12) + "s");

    layer.appendChild(b);
  });

  document.body.appendChild(layer);

  setTimeout(() => layer.remove(), 2200);
}
