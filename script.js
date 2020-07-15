let click = document.getElementById("click");
let label = document.getElementById("label");
let labelContent = label.innerHTML;
let multi = document.getElementById("multi");
let multiOn = false;
let multiplier = 2;
let counterMulti = 1;
document.getElementById("cost").innerHTML =
  "cost: " + multiplier * counterMulti;
let auto = document.getElementById("auto");
let autoOn = false;

click.addEventListener("click", increment);
multi.addEventListener("click", () => {
  if (parseInt(label.innerHTML) >= multiplier * counterMulti) {
    multiOn = true;
    label.innerHTML = parseInt(label.innerHTML) - multiplier * counterMulti;
    counterMulti++;
    document.getElementById("cost").innerHTML =
      "cost: " + multiplier * counterMulti;
    multi.innerHTML = "Multiplier: X" + multiplier * (counterMulti - 1);
  }
});

function increment() {
  if (multiOn == false) {
    label.innerHTML = parseInt(label.innerHTML) + 1;
  } else {
    label.innerHTML =
      parseInt(label.innerHTML) + multiplier * (counterMulti - 1);
  }
}

auto.addEventListener("click", autoIncrement);
function autoIncrement() {
  let intervalAuto;
  if (autoOn == false) {
    autoOn == true;
    intervalAuto = setInterval(increment, 1000);
  } else {
    autoOn = false;
    clearInterval(intervalAuto);
  }
}
