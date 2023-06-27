const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const blur_block = document.querySelector('.blur_block');
const container = document.querySelector('.blur_block .auth');

signUpButton.addEventListener('click', () => {
   container.classList.add("rightPanel_active");
});

logInButton.addEventListener('click', () => {
   container.classList.remove("rightPanel_active");
});

function blockOpen(){
   blur_block.style.display = 'block';
}
function blockClose(){
  blur_block.style.display = 'none';
}

function authOpenSignUp(){
   blur_block.style.display = 'block';
   container.classList.add("rightPanel_active");
}


function authClose(){
   blur_block.style.display = 'none';
   container.classList.remove("rightPanel_active");
}

function profileOpen(){

}