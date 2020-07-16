let click = document.getElementById("click");
let label = document.getElementById("label");
let labelContent = label.innerHTML;
let multi = document.getElementById("multi");
let multiOn = false;
let multiplier = 2;
let counterMulti = 1;
let multiCost = multiplier * counterMulti;
document.getElementById("cost").innerHTML =
  "Next multiplier cost: " + multiplier * counterMulti;
let auto = document.getElementById("auto");
let autoOn = false;
let bonus = document.getElementById("bonus");
let boostCost = 100;
let autoCost = 200;
multi.disabled = true;
bonus.disabled = true;
auto.disabled = true;

document.getElementById("costBonus").innerHTML = boostCost;
document.getElementById("costAuto").innerHTML = autoCost;

click.addEventListener("click", increment);
multi.addEventListener("click", () => {
  if (parseInt(label.innerHTML) >= multiCost) {
    multiOn = true;
    label.innerHTML = parseInt(label.innerHTML) - multiCost;
    counterMulti++;
    multiCost = multiplier * counterMulti;
    document.getElementById("cost").innerHTML =
      "Next multiplier cost: " + multiCost;
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
  if (parseInt(label.innerHTML) >= autoCost && autoOn == false) {
    autoOn = true;
    label.innerHTML = parseInt(label.innerHTML) - autoCost;
    setInterval(increment, 1000);
  }
}

bonus.addEventListener("click", boost);
function boost() {
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
    console.log(bonus.innerHTML);
  }, 1000);
}

function buttonDisable(button, cost) {
  if (parseInt(label.innerHTML) >= cost) {
    button.removeAttribute("disabled");
  } else {
    button.disabled = true;
  }
}

click.addEventListener("click", () => {
  buttonDisable(multi, multiCost);
});
multi.addEventListener("click", () => {
  buttonDisable(multi, multiCost);
});
click.addEventListener("click", () => {
  buttonDisable(bonus, boostCost);
});
bonus.addEventListener("click", () => {
  buttonDisable(bonus, boostCost);
});
click.addEventListener("click", () => {
  buttonDisable(auto, autoCost);
});
auto.addEventListener("click", () => {
  buttonDisable(auto, autoCost);
});
