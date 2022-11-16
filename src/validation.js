const validateInput = (value) => {
  let error = document.getElementsByClassName('input-error')[0];
  if (!value) {
    error.style.display = 'block';
  } else {
    console.log('send');
    error.style.display = 'none';
  }
};
