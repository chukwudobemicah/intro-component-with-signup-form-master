const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const email = document.querySelector('.email');
const errorMessage = document.querySelectorAll('label');

errorMessage.forEach(err => (err.style.opacity = 0));

const checkForValidEmail = function (email) {
  const regex = /^[a-zA-Z][a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]{2,}$/;
  return regex.test(email);
};

const toggleInputErrorMessage = function (inp, opacity) {
  inp.nextElementSibling.textContent = `${inp.getAttribute(
    'placeholder'
  )} cannot be empty`;
  inp.nextElementSibling.style.color = 'var(--red)';
  inp.nextElementSibling.style.opacity = opacity;
};
const toggleEmailErrorMessage = function (email, opacity) {
  email.nextElementSibling.textContent = 'Looks like his is not an email.';
  email.nextElementSibling.style.color = 'var(--red)';
  email.nextElementSibling.style.opacity = opacity;
};
const clearErrorMessage = function (element) {
  return (element.nextElementSibling.textContent = '');
};
const showValidMessage = function (element) {
  clearErrorMessage(element);
  element.nextElementSibling.textContent =
    'Credentials received, thank you! :)';
  element.nextElementSibling.style.color = 'green';
};
const checkForEmptyInputs = function (input, email) {
  input.forEach(inp => {
    if (inp.value === '') {
      clearErrorMessage(inp);
      toggleInputErrorMessage(inp, 1);
    } else {
      clearErrorMessage(inp);
      toggleInputErrorMessage(inp, 1);
      showValidMessage(inp);
    }
  });
  if (email.value === '' || !checkForValidEmail(email.value)) {
    clearErrorMessage(email);
    toggleEmailErrorMessage(email, 1);
  } else {
    clearErrorMessage(email);
    showValidMessage(email);
  }
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkForEmptyInputs(inputs, email);
});
// test email : john@gmail.com
