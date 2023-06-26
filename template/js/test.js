const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const auth = document.querySelector('.auth_block');
const container = document.querySelector('.auth_block .auth');

signUpButton.addEventListener('click', () => {
   container.classList.add("rightPanel_active");
});

logInButton.addEventListener('click', () => {
   container.classList.remove("rightPanel_active");
});

function authOpen(){
   auth.style.display = 'block';
}

function authOpenSignUp(){
   auth.style.display = 'block';
   container.classList.add("rightPanel_active");
}


function authClose(){
   auth.style.display = 'none';
   container.classList.remove("rightPanel_active");
}