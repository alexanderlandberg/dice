"use strict";

// --- VARIABLES START ---

let holdColor = "rgb(232, 232, 232)";
let diceArray = [];
let heldDiceArray = {};
let balutEnabled = false;

// Selectors
let add = document.querySelector("#add_dice p");
let remove = document.querySelector("#remove_dice p");
let roll = document.querySelector("#roll_dice p");
let reset = document.querySelector("#reset");
let sum = document.querySelector("#sum");
let rolls = document.querySelector("#rolls");
let sumHeld = document.querySelector("#sum_held");
let extentions = document.querySelector("#extentions p");
let diceContainer = document.querySelector("#dice_container");
let addOns = document.querySelector("#add_ons");
let button_container = document.querySelector(".button_container");

// --- VARIABLES END ---

// --- INIT START ---

document.addEventListener("DOMContentLoaded", function () {
  add.addEventListener("click", addDiceFunc);
  remove.addEventListener("click", removeDiceFunc);
  roll.addEventListener("click", rollDice);
  reset.children[0].addEventListener("click", resetFunc);
  extentions.addEventListener("click", openExtentions);
});

// --- INIT END ---

// --- DICE FUNCS START ---

// --- Add die
function addDiceFunc() {
  diceContainer.innerHTML += `<div class="cell"><div class="dice" onclick="holdDice(this)"><p>1</p></div></div>`;
}

// --- Remove die
function removeDiceFunc() {
  if (diceContainer.children.length == 0) {
    console.log("There are no dice left");
  } else {
    diceContainer.lastElementChild.remove();
  }
}

// --- Roll dice
function rollDice() {
  if (balutEnabled === true && rolls.children[0].children[0].innerHTML > 2) {
  } else {
    if (balutEnabled === true) {
      // balut code here
      balutAddEventlisteners();
    }

    // Empty dice array
    diceArray = [];

    // Roll counter
    rolls.children[0].children[0].innerHTML = Number(rolls.children[0].children[0].innerHTML) + 1;

    // Disable eventlistener
    roll.removeEventListener("click", rollDice);

    // Check dice amount, check if they are selected and 
    for (let i = 0; diceContainer.children.length > i; i++) {
      if (diceContainer.children[i].children[0].style.backgroundColor != holdColor) {
        // Call shuffle function
        let refreshIntervalId = setInterval(mix, 10);

        setTimeout(function () {
          // Stop shuffle and 
          clearInterval(refreshIntervalId);

          // Add eyes to dice
          diceContainer.children[i].children[0].children[0].innerHTML = Math.ceil(Math.random() * 6);



        }, 500);
      }
      // Add dice to array
      setTimeout(function () {
        diceArray.push(
          Number(diceContainer.children[i].children[0].children[0].innerHTML)
        )
      }, 550);
    }



    // Reable eventlistener + call summation function
    setTimeout(function () {
      roll.addEventListener("click", rollDice);
      sum.children[0].children[0].innerHTML = summationFunc();
    }, 500);
  }
}

// - Shuffle dice
function mix() {
  for (let i = 0; diceContainer.children.length > i; i++) {
    if (diceContainer.children[i].children[0].style.backgroundColor != holdColor) {
      diceContainer.children[i].children[0].children[0].innerHTML = Math.ceil(Math.random() * 6);
    }
  }
}

// --- DICE FUNCS END ---

// --- EXTRAS START ---

// - Open/Close extentions
function openExtentions() {
  if (addOns.classList.contains("open_add_ons")) {
    addOns.classList.remove("open_add_ons");
    addOns.style.height = 0;
  } else {
    addOns.classList.add("open_add_ons");
    addOns.style.height = 20 + addOns.children[0].children.length * 40 + "px";
  }
}

// - Button slide function and calls
function buttonSlide(parm) {
  if (parm.children[0].classList.contains("button_slide")) {
    parm.children[0].classList.remove("button_slide");
    parm.style.backgroundColor = "#f8f8f8";

    if (parm.getAttribute("data-button") == "reset") {
      reset.style.display = "none";
    }

    if (parm.getAttribute("data-button") == "summation") {
      sum.style.display = "none";
      sumHeld.style.display = "none";
    }
    if (parm.getAttribute("data-button") == "rollCounter") {
      rolls.style.display = "none";
    }
    if (parm.getAttribute("data-button") == "balut") {
      balut.style.display = "none";
      balutStyles("off")
    }
  } else {
    parm.style.backgroundColor = "#4baa45";
    parm.children[0].classList.add("button_slide");

    if (parm.getAttribute("data-button") == "reset") {
      reset.style.display = "block";
    }

    if (parm.getAttribute("data-button") == "summation") {
      sum.style.display = "flex";
      sumHeld.style.display = "flex";
    }
    if (parm.getAttribute("data-button") == "rollCounter") {
      rolls.style.display = "flex";
    }
    if (parm.getAttribute("data-button") == "balut") {
      balut.style.display = "table";
      balutStyles("on")
    }
  }
}

// - Hold on dice
function holdDice(parm) {
  if (parm.style.backgroundColor == holdColor) {
    parm.style.backgroundColor = "";
  } else {
    parm.style.backgroundColor = holdColor;
  }
  sumHeld.children[0].children[0].innerHTML = summationHeldFunc();
}

// - Reset dice and counters
function resetFunc() {
  for (let i = 0; diceContainer.children.length > i; i++) {
    diceContainer.children[i].children[0].style.backgroundColor = "";
    diceContainer.children[i].children[0].children[0].innerHTML = 1;
  }
  sum.children[0].children[0].innerHTML = 0;
  sumHeld.children[0].children[0].innerHTML = 0;
  rolls.children[0].children[0].innerHTML = 0;
  diceArray = [];
}

// - Return sum of all dice
function summationFunc() {
  let sumNumb = 0;
  for (let i = 0; diceContainer.children.length > i; i++) {
    sumNumb += Number(
      diceContainer.children[i].children[0].children[0].innerHTML
    );
  }
  return sumNumb;
}

// - Return sum of selected dice
function summationHeldFunc() {
  let sumNumb = 0;
  for (let i = 0; diceContainer.children.length > i; i++) {
    if (diceContainer.children[i].children[0].style.backgroundColor) {
      sumNumb += Number(
        diceContainer.children[i].children[0].children[0].innerHTML
      );
    }
  }
  return sumNumb;
}

// - Balut styles 
function balutStyles(parm) {
  if (parm == "on") {

    // Display 5 dice
    for (let i = 0; i < diceContainer.children.length;) {
      removeDiceFunc()
    }
    setTimeout(function () {
      for (let i = 0; i < 5; i++) {
        addDiceFunc()
      }
    }, 10);

    // Reset numbers
    resetFunc()

    // Add balut css
    document.querySelector("body").classList.add("balut_style");
    balutEnabled = true;

  } else {
    // Remove balut css
    document.querySelector("body").classList.remove("balut_style");
    balutEnabled = false;

  }

}

// --- EXTRAS END ---