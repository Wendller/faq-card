const textButtons = document.querySelectorAll('.question-btn');

textButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const question = event.currentTarget.parentElement.parentElement;
    
    question.classList.toggle('active');
  });
});
