window.onload = function () {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('button');
  let output = '';
  const specialChar = ['%', '/', '*', '+', '-', '=', '.'];

  const calculate = (value) => {
    let lastValue = output[output.length - 1];
    if (value === 'ac') {
      output = '';
    } else if (value === 'del') {
      output = output.toString().slice(0, -1);
    } else if (value === '=' && output !== '') {
      output = eval(output.replace('%', '/100'));
    } else if (specialChar.includes(value) && specialChar.includes(lastValue)) {
      output = output.replace(lastValue, value);
    } else {
      if (output === '' && specialChar.includes(value)) return;
      output += value;
    }
    display.value = output;
  };

  buttons.forEach((button) => {
    button.addEventListener('click', (evt) =>
      calculate(evt.target.dataset.value)
    );
  });
};
