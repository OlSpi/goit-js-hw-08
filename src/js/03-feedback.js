import throttle from 'lodash.throttle';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const initialStored = localStorage.getItem('feedback-form-state');
if (initialStored) {
  const { email, message } = JSON.parse(initialStored);
  emailInput.value = email;
  messageInput.value = message;
}

form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  const dataForm = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

const storedData = localStorage.getItem('feedback-form-state');

if (storedData) {
  const { email, message } = JSON.parse(storedData);
  email.value = email;
  message.value = message;
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (!emailInput.value || messageInput.value === '') {
    alert('Всі поля повинні бути заповнені ');
  } else {
    const formData = {
      email: emailInput.value,
      password: messageInput.value,
    };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
}
