import "./styles/styles.scss";

console.log("hello world!");

const form = document.forms['form']
const email = document.forms['form']['email']
const error = document.querySelector('span.error')

email.addEventListener("input", (event) => {
  if(email.validity.valid){
    
    error.textContent = ""

  } else{
    showError()
  }
});

form.addEventListener('submit', (event)=>{
  if(!email.validity.valid){
    showError()

    event.preventDefault()
  }
})

function showError(){
  if(email.validity.valueMissing){

    error.textContent = 'You need to enter an e-mail address.';

  } else if(email.validity.typeMismatch){

    error.textContent ="Oops! That doesn’t look like an email address"

  } else if(email.validity.tooShort){

    error.textContent =`Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;

  }
}