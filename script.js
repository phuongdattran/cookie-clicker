let click = document.getElementById("click");
let label = document.getElementById("label");
let labelContent = label.innerHTML;
let multi = document.getElementById("multi");
let multiOn = false;
let multiplier = 2;
let counterMulti = 1;
document.getElementById("cost").innerHTML =
  "Next multiplier cost: " + multiplier * counterMulti;
let auto = document.getElementById("auto");
let autoOn = false;
let bonus = document.getElementById("bonus");

click.addEventListener("click", increment);
multi.addEventListener("click", () => {
  if (parseInt(label.innerHTML) >= multiplier * counterMulti) {
    multiOn = true;
    label.innerHTML = parseInt(label.innerHTML) - multiplier * counterMulti;
    counterMulti++;
    document.getElementById("cost").innerHTML =
      "Next multiplier cost: " + multiplier * counterMulti;
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

function increment2() {
  if (multiOn == false) {
    label.innerHTML = parseInt(label.innerHTML) + 1;
  } else {
    label.innerHTML =
      parseInt(label.innerHTML) + multiplier * (counterMulti - 1);
  }
}

auto.addEventListener("click", autoIncrement);
function autoIncrement() {
  let autoCost = 200;
  if (parseInt(label.innerHTML) >= autoCost && autoOn == false) {
    autoOn = true;
    label.innerHTML = parseInt(label.innerHTML) - autoCost;
    setInterval(increment, 1000);
  }
}

bonus.addEventListener("click", boost);
function boost() {
  let boostCost = 100;
  if (parseInt(label.innerHTML) >= boostCost) {
    label.innerHTML = parseInt(label.innerHTML) - boostCost;
    click.addEventListener("click", increment2);
    time(30);
    setTimeout(() => {
      click.removeEventListener("click", increment2);
    }, 30000);
  }
}

function time(currentTime) {
  setInterval(() => {
    if (currentTime > 0) {
      currentTime = currentTime - 1;
      bonus.innerHTML = "Time left : " + currentTime;
    } else {
      bonus.innerHTML = "Bonus";
    }
  }, 1000);
}
