const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minutes");
const secondEL = document.getElementById("seconds");
const ampEL = document.getElementById("amp");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let amp = "AM";
  if (h > 12) {
    h = h - 12;
    amp = "PM";
  }

  h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

  hourEL.innerText = h;
  minuteEL.innerText = m;
  secondEL.innerText = s;
  ampEL.innerText = amp;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
