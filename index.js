const form = document.getElementById('my-form');
form.addEventListener('submit', function(event){
    event.preventDefault();
   

})
const validateForm = document.getElementById('validateForm')
validateForm.addEventListener('submit', function(event){
  event.preventDefault();
})

const getForm = document.getElementById('getFormText')
getForm.addEventListener('submit', function(event){
  event.preventDefault()
})

const formTwo = document.getElementById('myFormTwo')
formTwo.addEventListener('submit', function(event){
  event.preventDefault()
})

document.getElementById('stepThree').style.display = 'none';
document.getElementById('stepFour').style.display = 'none'

// Get form and loginButton elements
const formDetails = document.getElementById("my-form");
const loginButton = document.getElementById("loginButton");
const loginButtonTwo = document.getElementById("loginButtonTwo");



// Disable loginButton by default
loginButton.disabled = true;
loginButtonTwo.disabled = true

// Add event listener to form
form.addEventListener("input", () => {
  // Check if all required fields have a value
 
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const instruction = document.getElementById("instruction").value;
  const phoneNumber = document.getElementById("select").value + document.getElementById("tel").value;

  
  if (name && email && service && instruction && phoneNumber) {
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

// Form Two

formTwo.addEventListener("input", () => {
  // Check if all required fields have a value
 
  const name = document.getElementById("names").value;
  const email = document.getElementById("emails").value;
  const service = document.getElementById("services").value;
  const instruction = document.getElementById("instructions").value;
  const phoneNumber = document.getElementById("selects").value + document.getElementById("tels").value;

  // console.log(name, email, service, instruction)
  
  if (name && email && service && instruction && phoneNumber) {
    // Enable loginButton if all fields have a value
    loginButtonTwo.disabled = false;
    loginButtonTwo.classList.remove('disabled');
    loginButtonTwo.classList.add('transferBtnActive');
  } else {
    // Disable loginButton if any required field is empty
    loginButtonTwo.disabled = true;
    loginButtonTwo.classList.add('disabled');
    loginButtonTwo.classList.remove('transferBtnActive');
  }

});


const registerButton = document.getElementById("registerButton");
// const registerButtonTwo = document.getElementById("registerButtonTwo");

// registerButtonTwo.addEventListener("click", function(){
//   document.querySelector("#flipperTwo").classList.toggle("flipperTwo");
// })


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


// Select the HTML elements
const verifyBox = document.querySelector('.verifyBox');
const verifyMail = document.getElementById('verifyMail');

// Add an event listener to the verifyBox input
verifyBox.addEventListener('input', function() {
  
  if (verifyBox.value.length >= 5) {
    verifyMail.disabled = false; 
    verifyMail.classList.remove('disabled'); 
    verifyMail.classList.add('active'); 
  } else {
    
    verifyMail.disabled = true; 
    verifyMail.classList.add('disabled'); 
    verifyMail.classList.remove('active'); 
  }
});


verifyMail.addEventListener("click", function() {
  document.querySelector("#flipper").classList.toggle("flip");
  document.getElementById('stepThree').style.display = "block"
  document.getElementById("my-form").style.display = 'none'

  setTimeout(function() {
    document.getElementById("stepThree").style.display = "none";
    document.getElementById("stepFour").style.display = "block"
  }, 5000);
  
});
 
// Try Us Free 

const tryFree = document.getElementById("tryFreeContainer")
tryFree.addEventListener('click', () =>{
  document.getElementById('tryUs').style.display = 'block'
  document.querySelector('.howItWorksContainer').style.display = 'block'
  document.getElementById('getFormText').style.display = 'none'
  
 
  // document.querySelector('.getStartedContainer').style.display = 'none'
})

tryFree.addEventListener('click', function(){
  document.querySelector('.howItWorksContainer').style.backgroundImage = "url('./home4k/H_S/Mesh-BG1.svg')";
  document.querySelector('.processContainer').style.backgroundImage = "url('./home4k/H_S/Mesh-1.svg')";
  document.getElementById('tryFreeContainer').style.background = "rgba(255, 255, 255, 0.8)"
  document.getElementById('getQuote').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('placeOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  document.getElementById('customOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  document.getElementById('handIcon').style.fill= 'rgba(53, 221, 216, 1)'
})

// Get A Quote Button

const getButton = document.getElementById('getQuote')

getButton.addEventListener('click', () => {
  document.getElementById('tryUs').style.display = 'none'
  document.getElementById('getFormText').style.display = 'block'
  // document.classList.remove('.howItWorksContainer')
  // document.querySelector('#getQuoteContent').style.display = 'block'
 
})

getButton.addEventListener('click', function(){
  document.querySelector('.howItWorksContainer').style.backgroundImage = "url('./home4k/H_S/getStart.svg')";
  document.querySelector('.processContainer').style.backgroundImage = "url('./home4k/H_S/getQuoteBg.svg')";
  document.getElementById('tryFreeContainer').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('getQuote').style.background = "rgba(255, 255, 255, 0.8)"
  document.getElementById('placeOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  document.getElementById('customOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  document.getElementById('handIcon').style.fill= 'rgba(71, 84, 103, 1)'
  document.getElementById('getAQuote').style.fill = 'rgba(254, 102, 166, 1)'

})

// PlaceOrder
const placeOrder = document.getElementById('placeOrder')
placeOrder.addEventListener('click', () => {
  document.getElementById('tryUs').style.display = 'none'
  document.getElementById('getFormText').style.display = 'none'

})

placeOrder.addEventListener('click', function(){
  document.querySelector('.howItWorksContainer').style.backgroundImage = "url('./home4k/H_S/customOrder.svg')";
  document.querySelector('.processContainer').style.backgroundImage = "url('./home4k/H_S/customOrderBg.svg')";
  document.getElementById('tryFreeContainer').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('getQuote').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('placeOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
  document.getElementById('customOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'


})

// CustomOrder
const customOrder = document.getElementById('customOrder')
customOrder.addEventListener('click', function(){
  document.querySelector('.howItWorksContainer').style.backgroundImage = "url('./home4k/H_S/placeOrderBg.svg')";
  document.querySelector('.processContainer').style.backgroundImage = "url('./home4k/H_S/placeOrderBack.svg')";
  document.getElementById('tryFreeContainer').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('getQuote').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('placeOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  document.getElementById('customOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.8)'

})

// Service
// Get all radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]');

// Get the flipper element
const flipper = document.querySelector('.flipperTwo');

// Get the front and back elements
const front = document.querySelector('.frontTwo');
const back = document.querySelector('.backTwo');

// Attach event listener to each radio button
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('click', function() {
    // Hide the front element
    front.style.display = 'none';

    // Show the back element
    back.style.display = 'block';
  });
});

document.getElementById('formTwoStepThree').style.display = 'none'

const formTwoTransfer = document.getElementById('myFormTwo');
const transferButton = document.getElementById('loginButtonTwo')
const helloMessage = document.getElementById('formTwoStepThree');
const twoContent = document.getElementById('formTwoContent')

transferButton.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Hide the form
  formTwoTransfer.style.display = 'none';
  twoContent.style.display = 'none'

  // Show the hello message
  helloMessage.style.display = 'block';
});

const verifyTwoBox = document.getElementById('verifyTwoBox');
const verifyBtn = document.getElementById('verifyMailTwo');

verifyTwoBox.addEventListener('input', function() {
  // const value = parseInt(verifyBox.value);
  
  if (verifyTwoBox.value.length >= 5) {
    verifyBtn.disabled = false; 
    verifyBtn.classList.remove('disabled'); 
    verifyBtn.classList.add('active'); 
  } else {
    
    verifyBtn.disabled = true; 
    verifyBtn.classList.add('disabled'); 
    verifyBtn.classList.remove('active'); 
  }
});

const registerButtonTwo = document.getElementById('registerButtonTwo')


registerButtonTwo.addEventListener('click', function() {
  document.getElementById('formTwoContent').style.display = 'none'
  document.getElementById('myFormTwo').style.display = 'none'
  document.getElementById('formFirstContent').style.display = 'block'
  // document.getElementById('selectService').style.display = 'block'

})


const registerTwoButton = document.getElementById('registerTwoButton')

registerTwoButton.addEventListener("click", function(){
  // document.querySelector("#flipperTwo").classList.toggle("flip");
  document.getElementById('formTwoContent').style.display = 'block'
  document.getElementById('myFormTwo').style.display = 'block'
  document.getElementById('formTwoStepThree').style.display = 'none'
  

})

document.getElementById('formTwoStepFour').style.display = 'none'
document.getElementById('formTwoStepFive').style.display = 'none'

verifyBtn.addEventListener('click', function() {
  document.getElementById('validateTwoForm').style.display = 'none'
  document.getElementById('formTwoStepFour').style.display = 'block'

  setTimeout(function() {
    document.getElementById("formTwoStepFour").style.display = "none";
    document.getElementById("formTwoStepFive").style.display = "block"
  }, 5000);
})

// })
// function submitForm() {
   
//     // 
    
    
//     console.log(user)
// }


// console.log(object)

// function transferBtn(){
// }
// transferBtn()
