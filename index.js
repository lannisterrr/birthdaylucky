const input = document.getElementById('date');
const luckyNumber = document.getElementById('lucky-number');
const resultText = document.getElementById('result-text');

const button = document.getElementById('btn-1');

const compareValue = (sum, userInput) => {
  if (!input.value || !userInput || userInput === 0) {
    resultText.innerText = 'Enter a valid number';
  } else if (sum % userInput === 0) {
    resultText.innerText = 'Your Birthday is lucky!!';
  } else {
    resultText.innerText = 'Your Birthday is not that lucky ';
  }
};

const printSum = () => {
  let fullDate = input.value.split('-').join('');
  let sum = calculateSum(fullDate);
  let lucky = Number(luckyNumber.value);

  compareValue(sum, lucky);
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

// button.addEventListener('click', () => {
//   var date = new Date(input.value);
//   var day = date.getDate();
//   var month = date.getMonth() + 1;
//   var year = date.getFullYear();
//   console.log([day, month, year].join('/'));
// });
