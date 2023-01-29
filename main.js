console.log("test");

//Select all the needed elemets from the DOM gi zemam site elementi od domot

var toggle_btn;

var big_wrapper;

const main = document.querySelector("main");

//se namenuva potrebata od menuvanje na varijabli od prichina shto so kolniranjeto mora da se azhuriraat i varijablite
function declare() {
  toggle_btn = document.getElementById("button");
  big_wrapper = document.getElementById("big-wraper");
}
function event() {
  toggle_btn.addEventListener("click", toggleAnimation);
}

//prvo ja povikuvame funkcija declare tuka za assigment

declare();

//deklarirame deka dark e false bidejki zapochuvame so light tema
let dark = false;

//clone the wrapper-ili go kloniram cel main

function toggleAnimation() {
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);

  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  //da gi izbirsheme kopiite koi gi generira kodot

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
}

events();
