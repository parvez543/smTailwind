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

const customForm = document.getElementById('validateThreeForm')
customForm.addEventListener('submit', function(event){
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
  const countryCode = (document.getElementById("select").value) 
  const phoneNumber = document.getElementById("tel").value;

  const fulNumber = countryCode + phoneNumber
  console.log(phoneNumber);

  
  if (name && email && service && instruction && Number(phoneNumber)) {
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
  const countryCode = document.getElementById("selects").value 
  const phoneNumber = document.getElementById("tels").value;

  const fullNUmber = countryCode + fullNumber

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
  
  if (Number(verifyBox.value.length >= 5)) {
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
  document.getElementById('placeOrderContent').style.display = 'none'
  document.getElementById('customOrderContent').style.display = 'none'
  // document.getElementById('customContent').style.display = 'none'
  
 
  // document.querySelector('.getStartedContainer').style.display = 'none'
})

tryFree.addEventListener('click', function(){
  document.querySelector('.howItWorksContainer').style.backgroundImage = "url('./home4k/H_S/Mesh-BG1.svg')";
  document.querySelector('.processContainer').style.backgroundImage = "url('./home4k/H_S/Mesh-1.svg')";
  // document.getElementById('tryFreeContainer').style.backgroundImage.transform= 'scaleX(-1)'
 
  document.getElementById('tryFreeContainer').style.background = "rgba(255, 255, 255, 0.8)"
  document.getElementById('getQuote').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('placeOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  document.getElementById('customOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  
})

// Get A Quote Button

const getButton = document.getElementById('getQuote')

getButton.addEventListener('click', () => {
  document.getElementById('tryUs').style.display = 'none'
  document.getElementById('getFormText').style.display = 'block'
  document.getElementById('placeOrderContent').style.display = 'none'
  document.getElementById('getQuoteContent').style.display = 'block'
  document.getElementById('customOrderContent').style.display = 'none'
  
  // document.classList.remove('.howItWorksContainer')
  // document.querySelector('#getQuoteContent').style.display = 'block'
 
})

getButton.addEventListener('click', function(){
  document.querySelector('.howItWorksContainer').style.backgroundImage = "url('./home4k/H_S/getStart.svg')";
  document.querySelector('.processContainer').style.backgroundImage = "url('./home4k/H_S/getQuoteBg.svg')";
  
  document.getElementById('getQuote').style.background = "rgba(255, 255, 255, 0.8)"
  document.getElementById('placeOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  document.getElementById('customOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  // document.getElementById('tryFreeContainer').style.border = '1px solid linear-gradient(rgba(21, 94, 239, 1), rgba(82, 54, 255, 1), rgba(139, 53, 247, 1), rgba(255, 255, 255, 1));'
  // document.getElementById('handIcon').style.border= 'blue'
 
  // document.getElementById('handIcon').style.color = 'rgba(71, 84, 103, 1)'

})

// PlaceOrder
const placeOrder = document.getElementById('placeOrder')
placeOrder.addEventListener('click', () => {
  document.getElementById('tryUs').style.display = 'none'
  document.getElementById('getFormText').style.display = 'none'
  document.getElementById('placeOrderContent').style.display = 'block'
 

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
    document.getElementById('backPartTwo').style.display = "block"
    document.getElementById('frontPartTwo').style.display = 'none'

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
  
  if (Number(verifyTwoBox.value.length >= 5)) {
    verifyBtn.disabled = false; 
    verifyBtn.classList.remove('disabled'); 
    verifyBtn.classList.add('active'); 
  } else {
    
    verifyBtn.disabled = true; 
    verifyBtn.classList.add('disabled'); 
    verifyBtn.classList.remove('active'); 
  }
});

// const registerButtonTwo = document.getElementById('registerButtonTwo')


// registerButtonTwo.addEventListener('click', function() {
//   document.getElementById('formTwoContent').style.display = 'none'
//   document.getElementById('myFormTwo').style.display = 'none'
//   document.getElementById('formFirstContent').style.display = 'block'
//   // document.getElementById('selectService').style.display = 'block'

// })


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


// Place Order


const placeOrderStep = document.getElementById('placeOrder')

placeOrderStep.addEventListener('click', function() {
  document.getElementById('placeOrderContent').style.display = 'block'
  document.getElementById('customOrderContent').style.display = 'none'

});

document.getElementById('customOrderContent').style.display = 'none'

// Custom Order
customOrder.addEventListener('click', function(){
  document.getElementById('tryUs').style.display = 'none'
  document.getElementById('getQuoteContent').style.display = 'none'
  document.getElementById('placeOrderContent').style.display = 'none'
  document.getElementById('customOrderContent').style.display = 'block'


})

const formThree = document.getElementById('myFormThree')
formThree.addEventListener('submit', function(event){
  event.preventDefault()
});

const loginButtonThree = document.getElementById('loginButtonThree')
// const customOrderContent = document.getElementById('customOrderContent');
const customOrderStepTwo = document.getElementById('customOrderStepTwo');

formThree.addEventListener("input", () => {
  // Check if all required fields have a value
 
  const name = document.getElementById("nameCustom").value;
  const email = document.getElementById("emailCustom").value;
  const service = document.getElementById("serviceCustom").value;
  const instruction = document.getElementById("instructionCustom").value;
  
  const countryCode = document.getElementById("selectCustom").value 
  const phoneNumber =  document.getElementById("telCustom").value;

  const fullNumber = countryCode + phoneNumber

  
  if (name && email && service && instruction && phoneNumber) {
    // Enable loginButton if all fields have a value
    loginButtonThree.disabled = false;
    loginButtonThree.classList.remove('disabled');
    loginButtonThree.classList.add('transferBtnActive');
  } else {
    // Disable loginButton if any required field is empty
    loginButtonThree.disabled = true;
    loginButtonThree.classList.add('disabled');
    loginButtonThree.classList.remove('transferBtnActive');
  }

});

document.getElementById('customOrderStepTwo').style.display = 'none'

loginButtonThree.addEventListener('click', () => {
  document.getElementById('customContent').style.display = 'none'
  customOrderStepTwo.style.display = 'block';

})

// document.getElementById('customContent').style.display = 'block'

const inputBox = document.getElementById('verifyFourBox')
const verifyMailThree = document.getElementById('verifyMailThree')

inputBox.addEventListener('input', () => {

  if(Number(inputBox.value.length >= 5)){
    verifyMailThree.disabled = false; 
    verifyMailThree.classList.remove('disabled'); 
    verifyMailThree.classList.add('active'); 
  } else {
    verifyMailThree.disabled = true; 
    verifyMailThree.classList.add('disabled'); 
    verifyMailThree.classList.remove('active'); 
  }
})

document.getElementById('transferFile').style.display = "none"
document.getElementById("transferLast").style.display = "none"

verifyMailThree.addEventListener('click', () => {
  document.getElementById('transferFile').style.display = "block"
  document.getElementById('validateThreeForm').style.display = 'none'
  setTimeout(function() {
    document.getElementById("transferFile").style.display = "none";
    document.getElementById("transferLast").style.display = "block"
  }, 5000);
})

const  backButton = document.getElementById('backButtonTwoContainer')
backButton.addEventListener('click', ()=> {
  document.getElementById('customContent').style.display = "block"
  // document.getElementById('validateThreeForm').style.display = 'none'
  document.getElementById('customOrderStepTwo').style.display = 'none'
})


const registerThreeButton = document.getElementById('registerBackButtonTwo')

registerThreeButton.addEventListener('click', ()=> {
  document.getElementById('backPartTwo').style.display = "none"
  document.getElementById('frontPartTwo').style.display = 'block'
})

const firstStep = document.getElementById('tryFreeContainer')
firstStep.addEventListener('click', ()=> {
  document.querySelector(".tryUsFreeButton").style.backgroundImage = "1px solid url('./home4k/H_S/logos/Stock.svg')"
});

// Icon Color Change

document.getElementById('handIconBlack').style.display = "none"
document.getElementById('getAQuoteColor').style.display = 'none'
document.getElementById('placeOrderColor').style.display = 'none'
document.getElementById('customOrderColor').style.display = 'none'

const tryFreeIcon = document.getElementById('tryFreeContainer')
tryFreeIcon.addEventListener('click', () =>{
  document.getElementById('handIconColor').style.display = "block"
  document.getElementById('handIconBlack').style.display = "none"
  document.getElementById('getAQuoteBlack').style.display = 'block'
  document.getElementById('getAQuoteColor').style.display = 'none'
  document.getElementById('placeOrderBlack').style.display = 'block'
  document.getElementById('placeOrderColor').style.display = 'none'
  document.getElementById('customOrderBlack').style.display = 'block'
  document.getElementById('customOrderColor').style.display = 'none'
  // document.getElementById('tryFreeContentOne').style.borderImage.display = "block"

  
})

const getQuoteContainer = document.getElementById('getQuote')
getQuoteContainer.addEventListener('click', () =>{
  document.getElementById('handIconColor').style.display = "none"
  document.getElementById('handIconBlack').style.display = "block"
  document.getElementById('getAQuoteBlack').style.display = 'none'
  document.getElementById('getAQuoteColor').style.display = 'block'
  document.getElementById('placeOrderBlack').style.display = 'block'
  document.getElementById('placeOrderColor').style.display = 'none'
  document.getElementById('customOrderBlack').style.display = 'block'
  document.getElementById('customOrderColor').style.display = 'none'
})

const placeOrderImage = document.getElementById('placeOrder')
placeOrderImage.addEventListener('click', () =>{
  document.getElementById('placeOrderBlack').style.display = 'none'
  document.getElementById('placeOrderColor').style.display = 'block'
  document.getElementById('handIconColor').style.display = "none"
  document.getElementById('handIconBlack').style.display = "block"
  document.getElementById('getAQuoteBlack').style.display = 'block'
  document.getElementById('getAQuoteColor').style.display = 'none'
  document.getElementById('customOrderBlack').style.display = 'block'
  document.getElementById('customOrderColor').style.display = 'none'
})

const customOrderIcon = document.getElementById('customOrder')

customOrderIcon.addEventListener('click', () =>{
  document.getElementById('placeOrderBlack').style.display = 'block'
  document.getElementById('placeOrderColor').style.display = 'none'
  document.getElementById('handIconColor').style.display = "none"
  document.getElementById('handIconBlack').style.display = "block"
  document.getElementById('getAQuoteBlack').style.display = 'block'
  document.getElementById('getAQuoteColor').style.display = 'none'
  document.getElementById('customOrderBlack').style.display = 'none'
  document.getElementById('customOrderColor').style.display = 'block'
})


// Border Js
document.querySelector('.tryUsFreeContainer').style.backgroundImage = 'url("./home4k/H_S/logos/Stock.svg")';

document.querySelector(".getQuoteContainer").style.borderWidth = '1px 1px'
document.querySelector('.getQuoteContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
document.querySelector(".placeOrderContainer").style.borderWidth = '1px 1px'
  document.querySelector('.placeOrderContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
  document.querySelector(".customContainer").style.borderWidth = '1px 1px'
  document.querySelector('.customContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'

const tryUsFreeContentOne = document.getElementById('tryFreeContentOne')
tryUsFreeContentOne.addEventListener('click', () =>{
  document.querySelector('.tryUsFreeContainer').style.backgroundImage = 'url("./home4k/H_S/logos/Stock.svg")';
  document.querySelector('.customContainer').style.backgroundImage = 'none'
  document.querySelector('.placeOrderContainer').style.backgroundImage = 'none'
  document.querySelector(".getQuoteContainer").style.borderWidth = '1px 1px'
  document.querySelector('.getQuoteContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
  
  document.querySelector(".tryUsFreeContainer").style.borderWidth = '0px 0px'
  document.querySelector('.tryUsFreeContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
  
})

const getQuoteBorder = document.getElementById('getButtonContainer')
getQuoteBorder.addEventListener('click', () =>{
  document.querySelector('.tryUsFreeContainer').style.backgroundImage = 'none';
  document.querySelector(".getQuoteContainer").style.backgroundImage = 'url("./home4k/H_S/get_quote.svg")';
  document.querySelector('.placeOrderContainer').style.backgroundImage = 'none'
  document.querySelector('.customContainer').style.backgroundImage = 'none'
  document.querySelector(".getQuoteContainer").style.borderWidth = '0px 0px'
  document.querySelector('.getQuoteContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
 
  document.querySelector(".tryUsFreeContainer").style.borderWidth = '1px 1px'
  document.querySelector('.tryUsFreeContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
})

const placeOrderContent = document.getElementById('placeOrderContentStep')
placeOrderContent.addEventListener('click', () =>{
  document.querySelector('.tryUsFreeContainer').style.backgroundImage = 'none';
  document.querySelector(".getQuoteContainer").style.backgroundImage = 'none';
  document.querySelector('.placeOrderContainer').style.backgroundImage = 'url("./home4k/H_S/get_quote.svg")'
  document.querySelector('.customContainer').style.backgroundImage = 'none'

  document.querySelector(".tryUsFreeContainer").style.borderWidth = '1px 1px'
  document.querySelector('.tryUsFreeContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'

  document.querySelector(".getQuoteContainer").style.borderWidth = '1px 1px'
  document.querySelector('.getQuoteContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'

  document.querySelector(".placeOrderContainer").style.borderWidth = '0px 0px'
  document.querySelector('.placeOrderContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'

  // document.querySelector(".getQuoteContainer").style.borderWidth = '1px 1px'
  // document.querySelector('.getQuoteContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
})

const customOrderContentStep = document.getElementById('customOrderContentStep')
customOrderContentStep.addEventListener('click', ()=> {
  document.querySelector('.tryUsFreeContainer').style.backgroundImage = 'none';
  document.querySelector(".getQuoteContainer").style.backgroundImage = 'none';
  document.querySelector('.placeOrderContainer').style.backgroundImage = 'none'
  document.querySelector('.customContainer').style.backgroundImage = 'url("./home4k/H_S/last.svg")'

  

  document.querySelector(".placeOrderContainer").style.borderWidth = '1px 1px'
  document.querySelector('.placeOrderContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'

  document.querySelector(".customContainer").style.borderWidth = '0px 0px'
  document.querySelector('.customContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
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
