const goalInput = document.getElementById('goal-input');
const goal = document.getElementById('goal');
const depositInput = document.getElementById('deposit-input');
const totalSaved = document.getElementById('total-saved');

goalInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const money = this.goalAmount.value;
  console.log(money);
  console.log(goal);
  const display = `${money}`;
  goal.textContent = display;
});

// function addToTotalSaved(newDeposit) {
//   //   const totalSaved = Number(document.getElementById('total-saved').textContent);
//   //   console.log(totalSaved);

//   //   const newTotal = Number(totalSaved) + newDeposit;
//   //   console.log(newTotal);
//   //   totalSaved.textContent = newTotal;
//   const newTotal = Number(totalSaved) + newDeposit;
//   console.log(newTotal);
//   //   console.log(`total saved is${totalSaved}`);
//   const showNewTotal = `${newTotal}`;
//   console.log(`this is${showNewTotal}`);
//   totalSaved.textContent = showNewTotal;
//   console.log(totalSaved);
// }

depositInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const depositAmount = Number(this.depositAmount.value);
  const newTotal = Number(totalSaved.textContent) + depositAmount;
  const showNewTotal = `${newTotal}`;
  console.log(showNewTotal);
  totalSaved.textContent = showNewTotal;
});

function checkTotals() {
  const currentGoal = Number(goal.textContent);
  const currentSaved = Number(totalSaved.textContent);
  if (currentGoal === currentSaved) {
    console.log('match');
  } else {
    console.log('no match');
  }
}

checkTotals();

// maybe put amount to save in localstorage so it doesnt reset on load when u update
 