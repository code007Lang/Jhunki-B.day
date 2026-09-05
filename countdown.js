let n = 3;
const el = document.getElementById("countdown");
const timer = setInterval(() => {
  n--;
  if (n > 0) {
    el.textContent = n;
  } else {
    clearInterval(timer);
    el.textContent = "🎉";
    setTimeout(() => location.href = "surprise.html", 600);
  }
}, 1000);
