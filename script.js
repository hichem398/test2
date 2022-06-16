let n = 0;
let btn_play = document.querySelector("#play");
let btn_pause = document.querySelector("#pause");
n;
incrementer();
btn_pause.addEventListener("click", function () {
  clearInterval(play);
  this.classList.remove("active");
  btn_play.classList.add("active");
});

btn_play.addEventListener("click", function () {
  incrementer();
  this.classList.remove("active");
  btn_pause.classList.add("active");
});

function incrementer() {
  play = setInterval(() => {
    document.querySelector("#incr").innerHTML = n;
    n++;
  }, 1000);
}
