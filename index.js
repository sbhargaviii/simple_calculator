document.addEventListener('DOMContentLoaded', () => {
  let num1 = document.getElementById('num1');
  let num2 = document.getElementById('num2');
  let num3 = document.getElementById('num3');

  let val1 = 0;
  let val2 = 0;
  let result = 0;
  let operation = null;

  document.getElementById('btn1').addEventListener('click', () => {
    val1++;
    num1.innerText = val1;
  });

  document.getElementById('btn2').addEventListener('click', () => {
    val1 = 0;
    num1.innerText = val1;
  });
  document.getElementById('btn3').addEventListener('click', () => {
    val1--;
    num1.innerText = val1;
  });

  document.getElementById('btn4').addEventListener('click', () => {
    val2++;
    num2.innerText = val2;
  });

  document.getElementById('btn5').addEventListener('click', () => {
    val2 = 0;
    num2.innerText = val2;
  });

  document.getElementById('btn6').addEventListener('click', () => {
    val2--;
    num2.innerText = val2;
  });

  document.getElementById('btn7').addEventListener('click', () => {
    operation = 'add';
  });

  document.getElementById('btn8').addEventListener('click', () => {
    operation = 'subtract';
  });

  document.getElementById('btn9').addEventListener('click', () => {
    operation = 'divide';
  });

  document.getElementById('btn10').addEventListener('click', () => {
    operation = 'multiply';
  });

  document.getElementById('btnResult').addEventListener('click', () => {
    if (operation === 'add') {
      result = val1 + val2;
    } else if (operation === 'subtract') {
      result = val1 - val2;
    } else if (operation === 'multiply') {
      result = val1 * val2;
    } else if (operation === 'divide') {
      result = val2 !== 0 ? val1 / val2 : 'Error';
    }
    num3.innerText = result;
  });
});