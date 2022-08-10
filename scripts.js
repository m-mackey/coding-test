const goalInput = document.getElementById('goal-input');
const goal = document.getElementById('goal');
const depositInput = document.getElementById('deposit-input');
const totalSaved = document.getElementById('total-saved');

// Submits amount to be saved and displays it
goalInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const money = this.goalAmount.value;
  console.log(money);
  console.log(goal);
  const display = `${money}`;
  goal.textContent = display;
});

// change this fn to do something fun when goal and saved amounts match
// function checkTotals() {
//   const currentGoal = Number(goal.textContent);
//   const currentSaved = Number(totalSaved.textContent);
//   if (currentGoal === currentSaved) {
//     console.log('match');
//   } else {
//     console.log('no match');
//   }
// }

// Submits amount user deposits, adds it to total saved, and runs checkTotals which compares Total Saved to Savings Goal
depositInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const depositAmount = Number(this.depositAmount.value);
  const newTotal = Number(totalSaved.textContent) + depositAmount;
  const showNewTotal = `${newTotal}`;
  console.log(showNewTotal);
  totalSaved.textContent = showNewTotal;
  // checkTotals();
});

// get shoe section and add click event
const shoeList = document.getElementsByClassName('shoes');
for (let i = 0; i < shoeList.length; i++) {
  shoeList[i].addEventListener('click', shoePicker);
  // adds id to each shoe for styling based on button text so it doesn't have to be hardcoded. can be removed for manual coding of each id
  shoeList[i].setAttribute('id', shoeList[i].textContent);
}

// puts shoe on the tama
function shoePicker() {
  const currentShoe = this.textContent;
  document.getElementById('tama-shoes').innerHTML = currentShoe;
}

// get hat section and add click event
const hatList = document.getElementsByClassName('hats');
for (let i = 0; i < hatList.length; i++) {
  hatList[i].addEventListener('click', hatPicker);
  // adds id to each hat for styling based on button text so it doesn't have to be hardcoded. can be removed for manual coding of each id
  hatList[i].setAttribute('id', hatList[i].textContent);
}

// puts shoe on the tama
function hatPicker() {
  const currentHat = this.textContent;
  document.getElementById('tama-hat').innerHTML = currentHat;
}
