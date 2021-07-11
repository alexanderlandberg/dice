// --- VARIABLES START ---

let scoreArray = [];
let pointArray = [];

let balut = document.querySelector("#balut");
let balut_fours = document.querySelector("#balut_fours");
let balut_fives = document.querySelector("#balut_fives");
let balut_sixes = document.querySelector("#balut_sixes");
let balut_straight = document.querySelector("#balut_straight");
let balut_full_house = document.querySelector("#balut_full_house");
let balut_chance = document.querySelector("#balut_chance");
let balut_balut = document.querySelector("#balut_balut");
let balut_score = document.querySelector("#balut_score");
let balut_points = document.querySelector("#balut_points");

// --- VARIABLES END ---

// --- EVENTLISTENERS ---

for (let i = 0; balut.children[0].children.length > i; i++) {
  balut.children[0].children[i].addEventListener("mouseenter", addHover);
  balut.children[0].children[i].addEventListener("mouseleave", removeHover);
  balut.children[0].children[i].addEventListener("click", addScore);
}

function balutFunc() {
  return diceArray;
}

function addHover() {
  if (this.getAttribute("id") != "balut_top") {
    if (this.children[1].style.color != "rgb(0, 0, 0)") {
      if (this.getAttribute("id") == "balut_fours") {
        this.children[1].innerHTML = balutFourFunc();
      } else if (this.getAttribute("id") == "balut_fives") {
        this.children[1].innerHTML = balutFiveFunc();
      } else if (this.getAttribute("id") == "balut_sixes") {
        this.children[1].innerHTML = balutSixFunc();
      } else if (this.getAttribute("id") == "balut_straight") {
        this.children[1].innerHTML = balutStraightFunc();
      } else if (this.getAttribute("id") == "balut_full_house") {
        this.children[1].innerHTML = balutFullHouseFunc();
      } else if (this.getAttribute("id") == "balut_chance") {
        this.children[1].innerHTML = balutChanceFunc();
      } else if (this.getAttribute("id") == "balut_balut") {
        this.children[1].innerHTML = balutBalutFunc();
      }
    } else if (this.children[2].style.color != "rgb(0, 0, 0)") {
      if (this.getAttribute("id") == "balut_fours") {
        this.children[2].innerHTML = balutFourFunc();
      } else if (this.getAttribute("id") == "balut_fives") {
        this.children[2].innerHTML = balutFiveFunc();
      } else if (this.getAttribute("id") == "balut_sixes") {
        this.children[2].innerHTML = balutSixFunc();
      } else if (this.getAttribute("id") == "balut_straight") {
        this.children[2].innerHTML = balutStraightFunc();
      } else if (this.getAttribute("id") == "balut_full_house") {
        this.children[2].innerHTML = balutFullHouseFunc();
      } else if (this.getAttribute("id") == "balut_chance") {
        this.children[2].innerHTML = balutChanceFunc();
      } else if (this.getAttribute("id") == "balut_balut") {
        this.children[2].innerHTML = balutBalutFunc();
      }
    } else if (this.children[3].style.color != "rgb(0, 0, 0)") {
      if (this.getAttribute("id") == "balut_fours") {
        this.children[3].innerHTML = balutFourFunc();
      } else if (this.getAttribute("id") == "balut_fives") {
        this.children[3].innerHTML = balutFiveFunc();
      } else if (this.getAttribute("id") == "balut_sixes") {
        this.children[3].innerHTML = balutSixFunc();
      } else if (this.getAttribute("id") == "balut_straight") {
        this.children[3].innerHTML = balutStraightFunc();
      } else if (this.getAttribute("id") == "balut_full_house") {
        this.children[3].innerHTML = balutFullHouseFunc();
      } else if (this.getAttribute("id") == "balut_chance") {
        this.children[3].innerHTML = balutChanceFunc();
      } else if (this.getAttribute("id") == "balut_balut") {
        this.children[3].innerHTML = balutBalutFunc();
      }
    } else if (this.children[4].style.color != "rgb(0, 0, 0)") {
      if (this.getAttribute("id") == "balut_fours") {
        this.children[4].innerHTML = balutFourFunc();
      } else if (this.getAttribute("id") == "balut_fives") {
        this.children[4].innerHTML = balutFiveFunc();
      } else if (this.getAttribute("id") == "balut_sixes") {
        this.children[4].innerHTML = balutSixFunc();
      } else if (this.getAttribute("id") == "balut_straight") {
        this.children[4].innerHTML = balutStraightFunc();
      } else if (this.getAttribute("id") == "balut_full_house") {
        this.children[4].innerHTML = balutFullHouseFunc();
      } else if (this.getAttribute("id") == "balut_chance") {
        this.children[4].innerHTML = balutChanceFunc();
      } else if (this.getAttribute("id") == "balut_balut") {
        this.children[4].innerHTML = balutBalutFunc();
      }
    } else {
    }
  }
}

function removeHover() {
  if (this.getAttribute("id") != "balut_top") {
    if (this.children[1].style.color != "rgb(0, 0, 0)") {
      this.children[1].innerHTML = "";
    } else if (this.children[2].style.color != "rgb(0, 0, 0)") {
      this.children[2].innerHTML = "";
    } else if (this.children[3].style.color != "rgb(0, 0, 0)") {
      this.children[3].innerHTML = "";
    } else if (this.children[4].style.color != "rgb(0, 0, 0)") {
      this.children[4].innerHTML = "";
    }
  }
}

function addScore() {
  if (this.getAttribute("id") != "balut_top") {
    if (
      this.children[1].innerHTML != "" &&
      this.children[1].style.color != "rgb(0, 0, 0)"
    ) {
      this.children[1].style.color = "rgb(0, 0, 0)";
    } else if (
      this.children[2].innerHTML != "" &&
      this.children[2].style.color != "rgb(0, 0, 0)"
    ) {
      this.children[2].style.color = "rgb(0, 0, 0)";
    } else if (
      this.children[3].innerHTML != "" &&
      this.children[3].style.color != "rgb(0, 0, 0)"
    ) {
      this.children[3].style.color = "rgb(0, 0, 0)";
    } else if (
      this.children[4].innerHTML != "" &&
      this.children[4].style.color != "rgb(0, 0, 0)"
    ) {
      this.children[4].style.color = "rgb(0, 0, 0)";
      // Add all fours together and add to score-cell
      let sum =
        (isNaN(Number(this.children[1].innerHTML))
          ? 0
          : Number(this.children[1].innerHTML)) +
        (isNaN(Number(this.children[2].innerHTML))
          ? 0
          : Number(this.children[2].innerHTML)) +
        (isNaN(Number(this.children[3].innerHTML))
          ? 0
          : Number(this.children[3].innerHTML)) +
        (isNaN(Number(this.children[4].innerHTML))
          ? 0
          : Number(this.children[4].innerHTML));
      this.children[5].innerHTML = sum;
      let points = givePoints(this);
      this.children[6].innerHTML = points;
      scoreArray.push(sum);
      pointArray.push(points);
      if (scoreArray.length == 7) {
        balut_score.children[2].innerHTML = scoreArray.reduce(
          (a, b) => a + b,
          0
        );
        balut_score.children[3].innerHTML = scoreToPoints(
          scoreArray.reduce((a, b) => a + b, 0)
        );
        balut_points.children[2].innerHTML =
          pointArray.reduce((a, b) => a + b, 0) +
          scoreToPoints(scoreArray.reduce((a, b) => a + b, 0));
      }
    }
  }

  // Reset dice colors and counter
  for (let i = 0; i < diceContainer.children.length; i++) {
    diceContainer.children[i].children[0].style.backgroundColor =
      "rgb(255, 255, 255)";
  }
  rolls.children[0].children[0].innerHTML = 0;
}

// Make Total Score into points
function scoreToPoints(parm) {
  console.log(parm);
  if (parm > 19 && parm < 300) {
    return -2;
  } else if (parm > 299 && parm < 350) {
    return -1;
  } else if (parm > 349 && parm < 400) {
    return 0;
  } else if (parm > 399 && parm < 450) {
    return 1;
  } else if (parm > 449 && parm < 500) {
    return 2;
  } else if (parm > 499 && parm < 550) {
    return 3;
  } else if (parm > 549 && parm < 600) {
    return 4;
  } else if (parm > 599 && parm < 650) {
    return 5;
  } else if (parm > 649 && parm < 813) {
    return 6;
  }
}

// Give Points when row is full
function givePoints(parm) {
  if (parm.getAttribute("id") == "balut_fours") {
    console.log(Number(parm.children[5].innerHTML));
    if (Number(parm.children[5].innerHTML) > 51) {
      return 2;
    } else {
      return 0;
    }
  } else if (parm.getAttribute("id") == "balut_fives") {
    if (Number(parm.children[5].innerHTML) > 64) {
      return 2;
    } else {
      return 0;
    }
  } else if (parm.getAttribute("id") == "balut_sixes") {
    if (Number(parm.children[5].innerHTML) > 77) {
      return 2;
    } else {
      return 0;
    }
  } else if (parm.getAttribute("id") == "balut_straight") {
    if (
      parm.children[1].innerHTML != "x" &&
      parm.children[2].innerHTML != "x" &&
      parm.children[3].innerHTML != "x" &&
      parm.children[4].innerHTML != "x"
    ) {
      return 4;
    } else {
      return 0;
    }
  } else if (parm.getAttribute("id") == "balut_full_house") {
    if (
      parm.children[1].innerHTML != "x" &&
      parm.children[2].innerHTML != "x" &&
      parm.children[3].innerHTML != "x" &&
      parm.children[4].innerHTML != "x"
    ) {
      return 3;
    } else {
      return 0;
    }
  } else if (parm.getAttribute("id") == "balut_chance") {
    if (Number(parm.children[5].innerHTML) > 99) {
      return 2;
    } else {
      return 0;
    }
  } else if (parm.getAttribute("id") == "balut_balut") {
    let balutPoints = 0;
    for (let i = 1; i < 5; i++) {
      if (isNaN(Number(parm.children[i].innerHTML))) {
        console.log("t");
      } else {
        console.log("tt");
        balutPoints += 2;
      }
    }
    return balutPoints;
  }
}

// Four func
function balutFourFunc() {
  let num = 0;
  for (let i = 0; i < 5; i++) {
    if (diceArray[i] == 4) {
      num += 4;
    }
  }
  return num;
}

// Five func
function balutFiveFunc() {
  let num = 0;
  for (let i = 0; i < 5; i++) {
    if (diceArray[i] == 5) {
      num += 5;
    }
  }
  return num;
}

// Six func
function balutSixFunc() {
  let num = 0;
  for (let i = 0; i < 5; i++) {
    if (diceArray[i] == 6) {
      num += 6;
    }
  }
  return num;
}

// Straight func
function balutStraightFunc() {
  if (
    diceArray.includes(1) &&
    diceArray.includes(2) &&
    diceArray.includes(3) &&
    diceArray.includes(4) &&
    diceArray.includes(5)
  ) {
    return 15;
  } else if (
    diceArray.includes(2) &&
    diceArray.includes(3) &&
    diceArray.includes(4) &&
    diceArray.includes(5) &&
    diceArray.includes(6)
  ) {
    return 20;
  } else {
    return "x";
  }
}

// Full House func
function balutFullHouseFunc() {
  // return "x";
  let newArr = diceArray;
  newArr.sort((a, b) => a - b);

  if (
    newArr[0] === newArr[1] &&
    newArr[3] === newArr[4] &&
    (newArr[1] === newArr[2] || newArr[2] === newArr[4])
  ) {
    if (
      newArr[0] == newArr[1] &&
      newArr[1] == newArr[2] &&
      newArr[2] == newArr[3] &&
      newArr[3] == newArr[4]
    ) {
      return "x";
    } else {
      return newArr[0] + newArr[1] + newArr[2] + newArr[3] + newArr[4];
    }
  } else {
    return "x";
  }
}

// Chancen func
function balutChanceFunc() {
  let num = 0;
  for (let i = 0; diceArray.length > i; i++) {
    num += diceArray[i];
  }
  return num;
}

// Balut func
function balutBalutFunc() {
  if (
    diceArray[0] == diceArray[1] &&
    diceArray[1] == diceArray[2] &&
    diceArray[2] == diceArray[3] &&
    diceArray[3] == diceArray[4]
  ) {
    if (isNaN(diceArray[0] * 5 + 20)) {
      return "x";
    } else {
      return diceArray[0] * 5 + 20;
    }
  } else {
    return "x";
  }
}
