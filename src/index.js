import './style.scss';

let submit = document.getElementsByClassName('input-submit-container')[0];
let numberInput = document.getElementById('number');
submit.addEventListener('click', () => validateInput(numberInput.value));

const validateInput = (value) => {
  let error = document.getElementsByClassName('input-error')[0];
  let result = document.getElementsByClassName('submit-result')[0];
  if (!value) {
    error.style.display = 'block';
    result.style.display = 'none';
  } else {
    error.style.display = 'none';
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      result.style.display = 'block';
    });
  }
};
