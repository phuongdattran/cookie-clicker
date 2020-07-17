let click = document.getElementById("click");
let label = document.getElementById("label");
let labelContent = label.innerHTML;
let multi = document.getElementById("multi");
let multiOn = false;
let multiplier = 2;
let counterMulti = 1;
let boostCounter = 0;
let multiCost = multiplier * counterMulti;
document.getElementById("cost").innerHTML =
  "Next multiplier cost: " + multiplier * counterMulti;
let auto = document.getElementById("auto");
let autoOn = false;
let bonus = document.getElementById("bonus");
let boostCost = 100;
let boostOn = false;
let currentTime = 0;
let timer;
let autoCost = 2000;
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
  if (multiOn == false && boostOn == false) {
    label.innerHTML = parseInt(label.innerHTML) + 1;
  } else if (multiOn == true && boostOn == false) {
    label.innerHTML =
      parseInt(label.innerHTML) + multiplier * (counterMulti - 1);
  } else if (multiOn == false && boostOn == true) {
    label.innerHTML = parseInt(label.innerHTML) + Math.pow(2, boostCounter);
  } else if (multiOn == true && boostOn == true) {
    label.innerHTML =
      parseInt(label.innerHTML) +
      multiplier * (counterMulti - 1) * Math.pow(2, boostCounter);
  }
}

auto.addEventListener("click", autoIncrement);
function autoIncrement() {
  if (parseInt(label.innerHTML) >= autoCost && autoOn == false) {
    autoOn = true;
    label.innerHTML = parseInt(label.innerHTML) - autoCost;
    setInterval(increment, 1000);
    auto.disabled = true;
  }
}

bonus.addEventListener("click", boost);
function boost() {
  if (parseInt(label.innerHTML) >= boostCost) {
    label.innerHTML = parseInt(label.innerHTML) - boostCost;
    boostOn = true;
    boostCounter++;
    boostCost = boostCost * 10;
    document.getElementById("costBonus").innerHTML = boostCost;
    currentTime = 30;
    clearInterval(timer);
    timer = setInterval(() => {
      if (currentTime > 0) {
        currentTime = currentTime - 1;
        bonus.innerHTML = "Time left : " + currentTime;
        console.log(currentTime);
      } else {
        bonus.innerHTML = "Bonus";
        boostOn = false;
        boostCost = 100;
        document.getElementById("costBonus").innerHTML = 100;
        if (boostCounter > 0) {
          boostCounter -= 1;
        }
      }
    }, 1000);
  }
}

function buttonDisable(button, cost) {
  if (button == auto) {
    if (parseInt(label.innerHTML) >= cost && autoOn == false) {
      button.removeAttribute("disabled");
    } else {
      button.disabled = true;
    }
  } else {
    if (parseInt(label.innerHTML) >= cost) {
      button.removeAttribute("disabled");
    } else {
      button.disabled = true;
    }
  }
}

function disableAll() {
  buttonDisable(multi, multiCost);
  buttonDisable(bonus, boostCost);
  buttonDisable(auto, autoCost);
}

setInterval(disableAll, 100);
