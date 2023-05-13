const form = document.getElementById('my-form');
form.addEventListener('submit', function(event){
    event.preventDefault();
   

})

// Get form and loginButton elements
const formDetails = document.getElementById("my-form");
const loginButton = document.getElementById("loginButton");

// Disable loginButton by default
loginButton.disabled = true;

// Add event listener to form
form.addEventListener("input", () => {
  // Check if all required fields have a value
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const instruction = document.getElementById("instruction").value;

  if (name && email && service && instruction) {
    // Enable loginButton if all fields have a value
    loginButton.disabled = false;
    loginButton.classList.remove('disabled');
    loginButton.classList.add('transferBtnActive');
  } else {
    // Disable loginButton if any required field is empty
    loginButton.disabled = true;
    loginButton.classList.add('disabled');
    loginButton.classList.remove('transferBtnActive');
  }
});


const registerButton = document.getElementById("registerButton");

loginButton.addEventListener("click", function(){
	document.querySelector("#flipper").classList.toggle("flip");
})

registerButton.addEventListener("click", function(){
  document.querySelector("#flipper").classList.toggle("flip");
})

loginButton.addEventListener("click", function(){
  document.getElementById('formText').style.display = "none";
})
registerButton.addEventListener("click", function(){
  document.getElementById('formText').style.display = "block";
})

// Form Validation
const validateForm = document.getElementById('validForm')
validateForm.addEventListener('submit', function(event){
  event.preventDefault();
})

// const verifyBox = document.querySelector('.verifyBox');

// verifyBox.addEventListener('input', () => {
//   if (verifyBox.value.length > 5) {
//     registerButton.disabled = false;
//     registerButton.classList.remove('disabled');
//     registerButton.classList.add('active');
//   } else {
//     registerButton.disabled = false;
//     registerButton.classList.add('disabled');
//     registerButton.classList.disabled('active');
//   }
// });

  
 






// function submitForm() {
   
//     // 
    
    
//     console.log(user)
// }


// console.log(object)

// function transferBtn(){
// }
// transferBtn()
