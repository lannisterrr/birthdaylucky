const input = document.getElementById('date');
const luckyNumber = document.getElementById('lucky-number');
const resultText = document.getElementById('result-text');
const load = document.getElementById('load');

const button = document.getElementById('btn-1');

const compareValue = (sum, userInput) => {
  if (!input.value || !userInput || userInput === 0) {
    resultText.innerText = 'Enter a valid number';
  } else if (sum % userInput === 0) {
    let img = document.createElement('img');
    img.src = 'https://images.cooltext.com/5553858.png';
    resultText.appendChild(img);
  } else {
    let img = document.createElement('img');
    img.src = 'https://images.cooltext.com/5553866.gif';
    resultText.appendChild(img);
  }
};

let timesClicked = 0;
const printSum = () => {
  timesClicked++;
  if (timesClicked > 1) {
    location.reload();
  } else {
    let fullDate = input.value.split('-').join('');
    let sum = calculateSum(fullDate);
    let lucky = Number(luckyNumber.value);

    compareValue(sum, lucky);
  }
};

const calculateSum = dob => {
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    let eachDigit = Number(dob[i]);
    sum += eachDigit;
  }
  return sum;
};

button.addEventListener('click', printSum);
