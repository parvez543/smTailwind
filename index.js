// Preventing Default Loading Behavior of Try Us Free Form 
const form = document.getElementById('my-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();


})
// Preventing Default Loading Behavior verification of Try Us Free Form 
const validateForm = document.getElementById('validateForm')
validateForm.addEventListener('submit', function (event) {
  event.preventDefault();
})

// Preventing Default Loading Behavior Get A Quote Section
const getForm = document.getElementById('getFormText')
getForm.addEventListener('submit', function (event) {
  event.preventDefault()
})

// Preventing Default Loading Behavior Get A Quote Section Form Part
const formTwo = document.getElementById('myFormTwo')
formTwo.addEventListener('submit', function (event) {
  event.preventDefault()
})

// Preventing Default Loading Behavior of Custom Order Form
const customForm = document.getElementById('validateThreeForm')
customForm.addEventListener('submit', function (event) {
  event.preventDefault()
})

// Hidding Content of Transfering File and Congratulations Text of Try Us Free Section
document.getElementById('stepThree').style.display = 'none';
document.getElementById('stepFour').style.display = 'none'

// Getting the button ids of Try Us Free Section
const formDetails = document.getElementById("my-form");
const loginButton = document.getElementById("loginButton");

// Getting the button ids of Get A Quote Form Section
const loginButtonTwo = document.getElementById("loginButtonTwo");



// Disable the try us free form and Get A Quote Form Button 
loginButton.disabled = true;
loginButtonTwo.disabled = true

// Getting User Data from Try Us Free Form Section
form.addEventListener("input", () => {


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


// Getting All The Required Data from Get A Quote Form Section
formTwo.addEventListener("input", () => {


  const name = document.getElementById("names").value;
  const email = document.getElementById("emails").value;
  const service = document.getElementById("services").value;
  const instruction = document.getElementById("instructions").value;
  const countryCode = document.getElementById("selects").value
  const phoneNumber = document.getElementById("tels").value;

  const fullNUmber = countryCode + phoneNumber

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

// Geeting the id of verify form of try us free section so that user can get back to the form
const registerButton = document.getElementById("registerButton");

// Flipping the Try Us Free Form to Verification form if a user has all the require data
loginButton.addEventListener("click", function () {
  document.querySelector("#flipper").classList.toggle("flip");

})

// Coming back to try us free form  from verification form  
registerButton.addEventListener("click", function () {
  document.querySelector("#flipper").classList.toggle("flip");
})

// Hidding try Us free form and section when a user is going back to verification section TRY US FREE
loginButton.addEventListener("click", function () {
  document.getElementById('formText').style.display = "none";
})

// Showing try us free form and section when a user is coming back to form section from verification section of TRY US FREE
registerButton.addEventListener("click", function () {
  document.getElementById('formText').style.display = "block";
})




// Getting The verifaction form id and verify box class name of try us free section
const verifyBox = document.querySelector('.verifyBox');
const verifyMail = document.getElementById('verifyMail');

// Adding functionaliy of Verification process of try us free section
verifyBox.addEventListener('input', function () {

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


verifyMail.addEventListener("click", function () {
  document.querySelector("#flipper").classList.toggle("flip");
  document.getElementById('stepThree').style.display = "block"
  document.getElementById("my-form").style.display = 'none'

  setTimeout(function () {
    document.getElementById("stepThree").style.display = "none";
    document.getElementById("stepFour").style.display = "block"
  }, 5000);

});


// Hidding the content of Get a Quote, Place order and Custom Order section when a user clicks on try us free button of try us free section
const tryFree = document.getElementById("tryFreeContainer")
tryFree.addEventListener('click', () => {
  document.getElementById('tryUs').style.display = 'block'
  document.querySelector('.howItWorksContainer').style.display = 'block'
  document.getElementById('getFormText').style.display = 'none'
  document.getElementById('placeOrderContent').style.display = 'none'
  document.getElementById('customOrderContent').style.display = 'none'

})

// Changing the Background Color and Container Color of Try Us Free Section When A User clicks on The Try Us Free Button
tryFree.addEventListener('click', function () {
  document.querySelector('.howItWorksContainer').style.backgroundImage = "url('./home4k/H_S/Mesh-BG1.svg')";
  document.querySelector('.processContainer').style.backgroundImage = "url('./home4k/H_S/Mesh-1.svg')";
  // document.getElementById('tryFreeContainer').style.backgroundImage.transform= 'scaleX(-1)'

  document.getElementById('tryFreeContainer').style.background = "rgba(255, 255, 255, 0.8)"
  document.getElementById('getQuote').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('placeOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  document.getElementById('customOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'

})


// Hidding the content of Try Us Free, Place order and Custom Order section when a user clicks on try us free button of Get A Quote section
const getButton = document.getElementById('getQuote')

getButton.addEventListener('click', () => {
  document.getElementById('tryUs').style.display = 'none'
  document.getElementById('getFormText').style.display = 'block'
  document.getElementById('placeOrderContent').style.display = 'none'
  document.getElementById('getQuoteContent').style.display = 'block'
  document.getElementById('customOrderContent').style.display = 'none'
})

// Changing the Background Color and Container Color of get a quote Section When A User clicks on The Get A Quote Button
getButton.addEventListener('click', function () {
  document.querySelector('.howItWorksContainer').style.backgroundImage = "url('./home4k/H_S/getStart.svg')";
  document.querySelector('.processContainer').style.backgroundImage = "url('./home4k/H_S/getQuoteBg.svg')";

  document.getElementById('getQuote').style.background = "rgba(255, 255, 255, 0.8)"
  document.getElementById('placeOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  document.getElementById('customOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
})

// Hidding the content of Try Us Free, Get A Quote and Custom Order section when a user clicks on try us free button of Place Order section
const placeOrder = document.getElementById('placeOrder')
placeOrder.addEventListener('click', () => {
  document.getElementById('tryUs').style.display = 'none'
  document.getElementById('getFormText').style.display = 'none'
  document.getElementById('placeOrderContent').style.display = 'block'
})

// Changing the Background Color and Container Color of Place Order Section When A User clicks on The Place Order Button
placeOrder.addEventListener('click', function () {
  document.querySelector('.howItWorksContainer').style.backgroundImage = "url('./home4k/H_S/customOrder.svg')";
  document.querySelector('.processContainer').style.backgroundImage = "url('./home4k/H_S/customOrderBg.svg')";
  document.getElementById('tryFreeContainer').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('getQuote').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('placeOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
  document.getElementById('customOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'


})

// Changing the Background Color and Container Color of Custom Order Section When A User clicks on The Custom Order Button
const customOrder = document.getElementById('customOrder')
customOrder.addEventListener('click', function () {
  document.querySelector('.howItWorksContainer').style.backgroundImage = "url('./home4k/H_S/placeOrderBg.svg')";
  document.querySelector('.processContainer').style.backgroundImage = "url('./home4k/H_S/placeOrderBack.svg')";
  document.getElementById('tryFreeContainer').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('getQuote').style.background = "rgba(255, 255, 255, 0.3)"
  document.getElementById('placeOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
  document.getElementById('customOrder').style.backgroundColor = 'rgba(255, 255, 255, 0.8)'

})


// Get all radio buttons of Services from Get A Quote Section 
const radioButtons = document.querySelectorAll('input[type="radio"]');

// Get the flipper element
const flipper = document.querySelector('.flipperTwo');

// Get the front and back elements
const front = document.querySelector('.frontTwo');
const back = document.querySelector('.backTwo');

// Getting The Clipping Path Service Right Mark Sign
document.querySelector('.rightMark').style.display = "none"

// Clipping Path Service Of Get A Quote Service Section
const serviceOne = document.getElementById('serviceOne')

// Border, Text Change and Selection icon change of Clipping Path Service of Get A Quote Service Section
serviceOne.addEventListener('click', () => {
  document.querySelector('.radioMark').style.display = "none"
  document.querySelector('.rightMark').style.display = "block"
  document.querySelector('.servicePara').style.color = "#155EEF"
  document.querySelector('.imgHover').style.border = "2px solid rgba(21, 94, 239, 1)"

  // Leaving All Other Service Default of Get A Quote Section When A User selecting Clipping Path Service
  document.getElementById('radioMarkTwo').style.display = "block"
  document.getElementById('rightMarkTwo').style.display = "none"
  document.getElementById('serviceParaTwo').style.color = "#344054"
  document.querySelector('.imgHoverTwo').style.border = "0px"

  document.getElementById('radioMarkFive').style.display = "block"
  document.getElementById('rightMarkFive').style.display = "none"
  document.getElementById('serviceParaFive').style.color = "#344054"
  document.querySelector('.imgHoverFive').style.border = "0px"

  document.getElementById('radioMarkFour').style.display = "block"
  document.getElementById('rightMarkFour').style.display = "none"
  document.getElementById('serviceParaFour').style.color = "#344054"
  document.querySelector('.imgHoverFour').style.border = "0px"

  document.getElementById('radioMarkSix').style.display = "block"
  document.getElementById('rightMarkSix').style.display = "none"
  document.getElementById('serviceParaSix').style.color = "#344054"
  document.querySelector('.imgHoverSix').style.border = "0px"

  // Taking User to Get A Quote Form Part after Selection Clipping Path Service from Get A Quote
  setTimeout(function () {
    front.style.display = 'none';
    document.getElementById('backPartTwo').style.display = "block"
    document.getElementById('frontPartTwo').style.display = 'none'
    back.style.display = 'block';
  }, 1000)

})

// Getting The Multi-Clipping Path Service Right Mark Sign
document.getElementById('rightMarkTwo').style.display = "none"

const serviceTwo = document.getElementById('serviceTwo')
// Border, Text Change and Selection icon change of Multi-Clipping Path Service of Get A Quote Service Section
serviceTwo.addEventListener('click', () => {
  document.getElementById('radioMarkTwo').style.display = "none"
  document.getElementById('rightMarkTwo').style.display = "block"
  document.getElementById('serviceParaTwo').style.color = "#155EEF"
  document.querySelector('.imgHoverTwo').style.border = "2px solid rgba(21, 94, 239, 1)"

  // Leaving All Other Service Default of Get A Quote Section When A User selecting Multi Clipping Path Service
  document.querySelector('.radioMark').style.display = "block"
  document.querySelector('.rightMark').style.display = "none"
  document.querySelector('.servicePara').style.color = "#344054"
  document.querySelector('.imgHover').style.border = "0px"

  document.getElementById('radioMarkThree').style.display = "block"
  document.getElementById('rightMarkThree').style.display = "none"
  document.getElementById('serviceParaThree').style.color = "#344054"
  document.querySelector('.imgHoverThree').style.border = "0px"

  document.getElementById('radioMarkFour').style.display = "block"
  document.getElementById('rightMarkFour').style.display = "none"
  document.getElementById('serviceParaFour').style.color = "#344054"
  document.querySelector('.imgHoverFour').style.border = "0px"

  document.getElementById('radioMarkFive').style.display = "block"
  document.getElementById('rightMarkFive').style.display = "none"
  document.getElementById('serviceParaFive').style.color = "#344054"
  document.querySelector('.imgHoverFive').style.border = "0px"

  document.getElementById('radioMarkSix').style.display = "block"
  document.getElementById('rightMarkSix').style.display = "none"
  document.getElementById('serviceParaSix').style.color = "#344054"
  document.querySelector('.imgHoverSix').style.border = "0px"

  // Taking User to Get A Quote Form Part after Selection Multi-Clipping Path Service from Get A Quote
  setTimeout(function () {
    front.style.display = 'none';
    document.getElementById('backPartTwo').style.display = "block"
    document.getElementById('frontPartTwo').style.display = 'none'
    back.style.display = 'block';
  }, 1000)

})

// Getting The High End Retouching Service Right Mark Sign
document.getElementById('rightMarkThree').style.display = 'none'

const serviceThree = document.getElementById('serviceThree')

// Border, Text Change and Selection icon change of HighEnd Retouching Service of Get A Quote Service Section
serviceThree.addEventListener('click', () => {
  document.getElementById('radioMarkThree').style.display = "none"
  document.getElementById('rightMarkThree').style.display = "block"
  document.getElementById('serviceParaThree').style.color = "#155EEF"
  document.querySelector('.imgHoverThree').style.border = "2px solid rgba(21, 94, 239, 1)"


  // Leaving All Other Service Default of Get A Quote Section When A User selecting HighEnd Retouching Service
  document.getElementById('radioMarkTwo').style.display = "block"
  document.getElementById('rightMarkTwo').style.display = "none"
  document.getElementById('serviceParaTwo').style.color = "#344054"
  document.querySelector('.imgHoverTwo').style.border = "0px"

  document.querySelector('.radioMark').style.display = "block"
  document.querySelector('.rightMark').style.display = "none"
  document.querySelector('.servicePara').style.color = "#344054"
  document.querySelector('.imgHover').style.border = "0px"


  document.getElementById('radioMarkFour').style.display = "block"
  document.getElementById('rightMarkFour').style.display = "none"
  document.getElementById('serviceParaFour').style.color = "#344054"
  document.querySelector('.imgHoverFour').style.border = "0px"

  document.getElementById('radioMarkFive').style.display = "block"
  document.getElementById('rightMarkFive').style.display = "none"
  document.getElementById('serviceParaFive').style.color = "#344054"
  document.querySelector('.imgHoverFive').style.border = "0px"

  document.getElementById('radioMarkSix').style.display = "block"
  document.getElementById('rightMarkSix').style.display = "none"
  document.getElementById('serviceParaSix').style.color = "#344054"
  document.querySelector('.imgHoverSix').style.border = "0px"

  // Taking User to Get A Quote Form Part after Selection HighEnd Retouching Service from Get A Quote
  setTimeout(function () {
    front.style.display = 'none';
    document.getElementById('backPartTwo').style.display = "block"
    document.getElementById('frontPartTwo').style.display = 'none'
    back.style.display = 'block';
  }, 1000)

})

// Getting Raster to Vector Service Right Mark Sign
document.getElementById('rightMarkFour').style.display = 'none'

const serviceFour = document.getElementById('serviceFour')
// Border, Text Change and Selection icon change of Raster to Vector Service of Get A Quote Service Section
serviceFour.addEventListener('click', () => {
  document.getElementById('radioMarkFour').style.display = "none"
  document.getElementById('rightMarkFour').style.display = "block"
  document.getElementById('serviceParaFour').style.color = "#155EEF"
  document.querySelector('.imgHoverFour').style.border = "2px solid rgba(21, 94, 239, 1)"

  // Leaving All Other Service Default of Get A Quote Section When A User selecting Raster To Vector Service
  document.getElementById('radioMarkTwo').style.display = "block"
  document.getElementById('rightMarkTwo').style.display = "none"
  document.getElementById('serviceParaTwo').style.color = "#344054"
  document.querySelector('.imgHoverTwo').style.border = "0px"

  document.querySelector('.radioMark').style.display = "block"
  document.querySelector('.rightMark').style.display = "none"
  document.querySelector('.servicePara').style.color = "#344054"
  document.querySelector('.imgHover').style.border = "0px"

  document.getElementById('radioMarkThree').style.display = "block"
  document.getElementById('rightMarkThree').style.display = "none"
  document.getElementById('serviceParaThree').style.color = "#344054"
  document.querySelector('.imgHoverThree').style.border = "0px"

  document.getElementById('radioMarkFive').style.display = "block"
  document.getElementById('rightMarkFive').style.display = "none"
  document.getElementById('serviceParaFive').style.color = "#344054"
  document.querySelector('.imgHoverFive').style.border = "0px"

  document.getElementById('radioMarkSix').style.display = "block"
  document.getElementById('rightMarkSix').style.display = "none"
  document.getElementById('serviceParaSix').style.color = "#344054"
  document.querySelector('.imgHoverSix').style.border = "0px"

  // Taking User to Get A Quote Form Part after Selection Raster to Vector Service from Get A Quote
  setTimeout(function () {
    front.style.display = 'none';
    document.getElementById('backPartTwo').style.display = "block"
    document.getElementById('frontPartTwo').style.display = 'none'
    back.style.display = 'block';
  }, 1000)
})

// Getting Embriodery Digitize Service Right Mark Sign
document.getElementById('rightMarkFive').style.display = 'none'

const serviceFive = document.getElementById('serviceFive')

// Border, Text Change and Selection icon change of Embriodery Digitize Service of Get A Quote Service Section
serviceFive.addEventListener('click', () => {
  document.getElementById('radioMarkFive').style.display = "none"
  document.getElementById('rightMarkFive').style.display = "block"
  document.getElementById('serviceParaFive').style.color = "#155EEF"
  document.querySelector('.imgHoverFive').style.border = "2px solid rgba(21, 94, 239, 1)"

  // Leaving All Other Service Default of Get A Quote Section When A User selecting Embriodery Digitize Service
  document.getElementById('radioMarkFour').style.display = "block"
  document.getElementById('rightMarkFour').style.display = "none"
  document.getElementById('serviceParaFour').style.color = "#344054"
  document.querySelector('.imgHoverFour').style.border = "0px"

  document.getElementById('radioMarkTwo').style.display = "block"
  document.getElementById('rightMarkTwo').style.display = "none"
  document.getElementById('serviceParaTwo').style.color = "#344054"
  document.querySelector('.imgHoverTwo').style.border = "0px"

  document.querySelector('.radioMark').style.display = "block"
  document.querySelector('.rightMark').style.display = "none"
  document.querySelector('.servicePara').style.color = "#344054"
  document.querySelector('.imgHover').style.border = "0px"

  document.getElementById('radioMarkThree').style.display = "block"
  document.getElementById('rightMarkThree').style.display = "none"
  document.getElementById('serviceParaThree').style.color = "#344054"
  document.querySelector('.imgHoverThree').style.border = "0px"

  document.getElementById('radioMarkSix').style.display = "block"
  document.getElementById('rightMarkSix').style.display = "none"
  document.getElementById('serviceParaSix').style.color = "#344054"
  document.querySelector('.imgHoverSix').style.border = "0px"

  // Taking User to Get A Quote Form Part after Selection Embriodery Digitize Service from Get A Quote
  setTimeout(function () {
    front.style.display = 'none';
    document.getElementById('backPartTwo').style.display = "block"
    document.getElementById('frontPartTwo').style.display = 'none'
    back.style.display = 'block';
  }, 1000)
})

// Getting Model Hair Masking Service Right Mark Sign
document.getElementById('rightMarkSix').style.display = 'none'

const serviceSix = document.getElementById('serviceSix')

// Border, Text Change and Selection icon change of Model Hair Masking Service of Get A Quote Service Section
serviceSix.addEventListener('click', () => {
  document.getElementById('radioMarkSix').style.display = "none"
  document.getElementById('rightMarkSix').style.display = "block"
  document.getElementById('serviceParaSix').style.color = "#155EEF"
  document.querySelector('.imgHoverSix').style.border = "2px solid rgba(21, 94, 239, 1)"

  // Leaving All Other Service Default of Get A Quote Section When A User selecting Model Hair Masking Service
  document.getElementById('radioMarkFive').style.display = "block"
  document.getElementById('rightMarkFive').style.display = "none"
  document.getElementById('serviceParaFive').style.color = "#344054"
  document.querySelector('.imgHoverFive').style.border = "0px"


  document.getElementById('radioMarkFour').style.display = "block"
  document.getElementById('rightMarkFour').style.display = "none"
  document.getElementById('serviceParaFour').style.color = "#344054"
  document.querySelector('.imgHoverFour').style.border = "0px"

  document.getElementById('radioMarkTwo').style.display = "block"
  document.getElementById('rightMarkTwo').style.display = "none"
  document.getElementById('serviceParaTwo').style.color = "#344054"
  document.querySelector('.imgHoverTwo').style.border = "0px"

  document.querySelector('.radioMark').style.display = "block"
  document.querySelector('.rightMark').style.display = "none"
  document.querySelector('.servicePara').style.color = "#344054"
  document.querySelector('.imgHover').style.border = "0px"

  document.getElementById('radioMarkThree').style.display = "block"
  document.getElementById('rightMarkThree').style.display = "none"
  document.getElementById('serviceParaThree').style.color = "#344054"
  document.querySelector('.imgHoverThree').style.border = "0px"

  // Taking User to Get A Quote Form Part after Selection Embriodery Digitize Service from Get A Quote
  setTimeout(function () {
    front.style.display = 'none';
    document.getElementById('backPartTwo').style.display = "block"
    document.getElementById('frontPartTwo').style.display = 'none'
    back.style.display = 'block';
  }, 1000)
})

// Form Section of Get A Quote Section after a user selecting a service from service section

document.getElementById('formTwoStepThree').style.display = 'none'

// Getting All The id's of form section of Get A Quote Section

const formTwoTransfer = document.getElementById('myFormTwo');
const transferButton = document.getElementById('loginButtonTwo')
const helloMessage = document.getElementById('formTwoStepThree');
const twoContent = document.getElementById('formTwoContent')

// Preventing Default behavior of form of get a quote section
transferButton.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();


  formTwoTransfer.style.display = 'none';
  twoContent.style.display = 'none'


  helloMessage.style.display = 'block';
});

// Getting all the necessary id of verify form of Get A Quote when a user is going to next section before transfering file
const verifyTwoBox = document.getElementById('verifyTwoBox');
const verifyBtn = document.getElementById('verifyMailTwo');

// adding functionality of verify of Get A Quote Section

verifyTwoBox.addEventListener('input', function () {
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

// Getting back button id of verify code section of get a quote section

const registerTwoButton = document.getElementById('registerTwoButton')

// Functionality of showing first form and hide the verify form of get a quote section when a user clicks back button of verify code section
registerTwoButton.addEventListener("click", function () {
  // document.querySelector("#flipperTwo").classList.toggle("flip");
  document.getElementById('formTwoContent').style.display = 'block'
  document.getElementById('myFormTwo').style.display = 'block'
  document.getElementById('formTwoStepThree').style.display = 'none'


})

// Hiding Transfering file and congratulation text of get a quote section
document.getElementById('formTwoStepFour').style.display = 'none'
document.getElementById('formTwoStepFive').style.display = 'none'

// Showing Transfering file  after completing verification of get a quote section
verifyBtn.addEventListener('click', function () {
  document.getElementById('validateTwoForm').style.display = 'none'
  document.getElementById('formTwoStepFour').style.display = 'block'

  // Taking user to congratulations page after completing file upload of get a quote section
  setTimeout(function () {
    document.getElementById("formTwoStepFour").style.display = "none";
    document.getElementById("formTwoStepFive").style.display = "block"
  }, 5000);
})




// Getting the id of place order section
const placeOrderStep = document.getElementById('placeOrder')

//functionality of Showing content place order section content when a user clicks on place order section
placeOrderStep.addEventListener('click', function () {
  document.getElementById('placeOrderContent').style.display = 'block'
  document.getElementById('customOrderContent').style.display = 'none'

});

// Getting the id of Custom order section
document.getElementById('customOrderContent').style.display = 'none'

//functionality of Showing content of custom order section content when a user clicks on place order section
customOrder.addEventListener('click', function () {
  document.getElementById('tryUs').style.display = 'none'
  document.getElementById('getQuoteContent').style.display = 'none'
  document.getElementById('placeOrderContent').style.display = 'none'
  document.getElementById('customOrderContent').style.display = 'block'


})

// Preventing default behavior of Custom order form of custom order section
const formThree = document.getElementById('myFormThree')
formThree.addEventListener('submit', function (event) {
  event.preventDefault()
});

// Getting Transfer button id of custom order section
const loginButtonThree = document.getElementById('loginButtonThree')
const customOrderStepTwo = document.getElementById('customOrderStepTwo');

// Checking all user information of form section of custom order section
formThree.addEventListener("input", () => {


  const name = document.getElementById("nameCustom").value;
  const email = document.getElementById("emailCustom").value;
  const service = document.getElementById("serviceCustom").value;
  const instruction = document.getElementById("instructionCustom").value;

  const countryCode = document.getElementById("selectCustom").value
  const phoneNumber = document.getElementById("telCustom").value;

  const fullNumber = countryCode + phoneNumber


  if (name && email && service && instruction && phoneNumber) {
    // Enable TransferButton if all fields have a value
    loginButtonThree.disabled = false;
    loginButtonThree.classList.remove('disabled');
    loginButtonThree.classList.add('transferBtnActive');
  } else {
    // Disable TransferButton if any required field is empty
    loginButtonThree.disabled = true;
    loginButtonThree.classList.add('disabled');
    loginButtonThree.classList.remove('transferBtnActive');
  }

});

// Getting verification form id of custom order section
document.getElementById('customOrderStepTwo').style.display = 'none'

// Showing verification form content if a user fill all the fields of the form of custom order section
loginButtonThree.addEventListener('click', () => {
  document.getElementById('customContent').style.display = 'none'
  customOrderStepTwo.style.display = 'block';

})


// Getting id's verification box and verification button of custom order section
const inputBox = document.getElementById('verifyFourBox')
const verifyMailThree = document.getElementById('verifyMailThree')

// Checking the verification code length 
inputBox.addEventListener('input', () => {

  if (Number(inputBox.value.length >= 5)) {
    verifyMailThree.disabled = false;
    verifyMailThree.classList.remove('disabled');
    verifyMailThree.classList.add('active');
  } else {
    verifyMailThree.disabled = true;
    verifyMailThree.classList.add('disabled');
    verifyMailThree.classList.remove('active');
  }
})

// Hiding Transfer file and congratulation text if a user doesn't fill the verify box of custom order section
document.getElementById('transferFile').style.display = "none"
document.getElementById("transferLast").style.display = "none"


// Showing Transfer file to a user if he fills the verify box of custom order section
verifyMailThree.addEventListener('click', () => {
  document.getElementById('transferFile').style.display = "block"
  document.getElementById('validateThreeForm').style.display = 'none'

  // Taking them to congratulation text after completing the transfer file of custom order section
  setTimeout(function () {
    document.getElementById("transferFile").style.display = "none";
    document.getElementById("transferLast").style.display = "block"
  }, 5000);
})

// Taking user to the first form of custom order section from verifaction step of custom order section

const backButton = document.getElementById('backButtonTwoContainer')
backButton.addEventListener('click', () => {
  document.getElementById('customContent').style.display = "block"
  document.getElementById('customOrderStepTwo').style.display = 'none'
})


const registerThreeButton = document.getElementById('registerBackButtonTwo')

registerThreeButton.addEventListener('click', () => {
  document.getElementById('backPartTwo').style.display = "none"
  document.getElementById('frontPartTwo').style.display = 'block'
})




// Making Display None to All Colorful icons of Try Us Free Button, Get A Quote, Place order and Custom Order section before clicking on them

document.getElementById('handIconBlack').style.display = "none"
document.getElementById('getAQuoteColor').style.display = 'none'
document.getElementById('placeOrderColor').style.display = 'none'
document.getElementById('customOrderColor').style.display = 'none'

// Id of the try us free container
const tryFreeIcon = document.getElementById('tryFreeContainer')

tryFreeIcon.addEventListener('click', () => {
  // Making enable only of the colorful icon of try us free section if a user clicks on the try us free button
  document.getElementById('handIconColor').style.display = "block"
  document.getElementById('handIconBlack').style.display = "none"

  // Hiding colorful icon of rest of the section
  document.getElementById('getAQuoteBlack').style.display = 'block'
  document.getElementById('getAQuoteColor').style.display = 'none'
  document.getElementById('placeOrderBlack').style.display = 'block'
  document.getElementById('placeOrderColor').style.display = 'none'
  document.getElementById('customOrderBlack').style.display = 'block'
  document.getElementById('customOrderColor').style.display = 'none'



})
// Id of the Get A Quote container
const getQuoteContainer = document.getElementById('getQuote')

getQuoteContainer.addEventListener('click', () => {
  // Making enable only of the colorful icon of Get A Quote section if a user clicks on the get a quote button
  document.getElementById('getAQuoteBlack').style.display = 'none'
  document.getElementById('getAQuoteColor').style.display = 'block'

  // Hiding colorful icon of rest of the section
  document.getElementById('handIconColor').style.display = "none"
  document.getElementById('handIconBlack').style.display = "block"
  document.getElementById('placeOrderBlack').style.display = 'block'
  document.getElementById('placeOrderColor').style.display = 'none'
  document.getElementById('customOrderBlack').style.display = 'block'
  document.getElementById('customOrderColor').style.display = 'none'
})

// Id of the Place Order container
const placeOrderImage = document.getElementById('placeOrder')

placeOrderImage.addEventListener('click', () => {
  // Making enable only of the colorful icon of Place Order section if a user clicks on the place order button
  document.getElementById('placeOrderBlack').style.display = 'none'
  document.getElementById('placeOrderColor').style.display = 'block'

  // Hiding colorful icon of rest of the section
  document.getElementById('handIconColor').style.display = "none"
  document.getElementById('handIconBlack').style.display = "block"
  document.getElementById('getAQuoteBlack').style.display = 'block'
  document.getElementById('getAQuoteColor').style.display = 'none'
  document.getElementById('customOrderBlack').style.display = 'block'
  document.getElementById('customOrderColor').style.display = 'none'
})

// Id of the Custom Order container
const customOrderIcon = document.getElementById('customOrder')
customOrderIcon.addEventListener('click', () => {

  // Making enable only of the colorful icon of Custom Order section if a user clicks on the custom order button
  document.getElementById('customOrderBlack').style.display = 'none'
  document.getElementById('customOrderColor').style.display = 'block'

  // Hiding colorful icon of rest of the section
  document.getElementById('placeOrderBlack').style.display = 'block'
  document.getElementById('placeOrderColor').style.display = 'none'
  document.getElementById('handIconColor').style.display = "none"
  document.getElementById('handIconBlack').style.display = "block"
  document.getElementById('getAQuoteBlack').style.display = 'block'
  document.getElementById('getAQuoteColor').style.display = 'none'
})


// Border Changing Functionality 

// Giving Try Us Free by Default Colorful Border
const firstStep = document.getElementById('tryFreeContainer')
firstStep.addEventListener('click', () => {
  document.querySelector(".tryUsFreeButton").style.backgroundImage = "1px solid url('./home4k/H_S/logos/Stock.svg')"
});

document.querySelector('.tryUsFreeContainer').style.backgroundImage = 'url("./home4k/H_S/logos/Stock.svg")';

// Deactivate Colorful Border of Rest Of the Section before Clicking on them
document.querySelector(".getQuoteContainer").style.borderWidth = '1px 1px'
document.querySelector('.getQuoteContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
document.querySelector(".placeOrderContainer").style.borderWidth = '1px 1px'
document.querySelector('.placeOrderContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
document.querySelector(".customContainer").style.borderWidth = '1px 1px'
document.querySelector('.customContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'


// Getting id's Try Us Free Container 
const tryUsFreeContentOne = document.getElementById('tryFreeContentOne')
tryUsFreeContentOne.addEventListener('click', () => {

  // Colorful Border section code of try Us Free Section
  document.querySelector('.tryUsFreeContainer').style.backgroundImage = 'url("./home4k/H_S/logos/Stock.svg")';
  document.querySelector(".tryUsFreeContainer").style.borderWidth = '0px 0px'
  document.querySelector('.tryUsFreeContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'

  // Default Border of rest of the section 
  document.querySelector(".getQuoteContainer").style.borderWidth = '1px 1px'
  document.querySelector('.getQuoteContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
  document.querySelector('.placeOrderContainer').style.backgroundImage = 'none'


  document.querySelector('.customContainer').style.backgroundImage = 'none'
  document.querySelector(".customContainer").style.borderWidth = '1px 1px'
  document.querySelector('.customContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'

})

// Getting id's Get A Quote Container 
const getQuoteBorder = document.getElementById('getButtonContainer')

getQuoteBorder.addEventListener('click', () => {
  // Colorful Border section code of get a quote Section
  document.querySelector(".getQuoteContainer").style.backgroundImage = 'url("./home4k/H_S/get_quote.svg")';
  document.querySelector(".getQuoteContainer").style.borderWidth = '0px 0px'
  document.querySelector('.getQuoteContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'

  // Default Border of rest of the section 
  document.querySelector('.tryUsFreeContainer').style.backgroundImage = 'none';
  document.querySelector(".tryUsFreeContainer").style.borderWidth = '1px 1px'
  document.querySelector('.tryUsFreeContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
  document.querySelector('.placeOrderContainer').style.backgroundImage = 'none'
  document.querySelector('.customContainer').style.backgroundImage = 'none'

})

// Getting id's Place Order Container 
const placeOrderContent = document.getElementById('placeOrderContentStep')

placeOrderContent.addEventListener('click', () => {

  // Colorful Border section code of Place Order Section
  document.querySelector('.placeOrderContainer').style.backgroundImage = 'url("./home4k/H_S/get_quote.svg")'
  document.querySelector(".placeOrderContainer").style.borderWidth = '0px 0px'
  document.querySelector('.placeOrderContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'

  // Default Border of rest of the section 
  document.querySelector('.tryUsFreeContainer').style.backgroundImage = 'none';
  document.querySelector(".tryUsFreeContainer").style.borderWidth = '1px 1px'
  document.querySelector('.tryUsFreeContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
  document.querySelector(".getQuoteContainer").style.backgroundImage = 'none';
  document.querySelector(".getQuoteContainer").style.borderWidth = '1px 1px'
  document.querySelector('.getQuoteContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
  document.querySelector('.customContainer').style.backgroundImage = 'none'
})

// Getting id's Custom Order Container 
const customOrderContentStep = document.getElementById('customOrderContentStep')

customOrderContentStep.addEventListener('click', () => {

  // Colorful Border section code of Custom Order Section
  document.querySelector('.customContainer').style.backgroundImage = 'url("./home4k/H_S/last.svg")'
  document.querySelector(".customContainer").style.borderWidth = '0px 0px'
  document.querySelector('.customContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'

  // Default Border of rest of the section 
  document.querySelector('.tryUsFreeContainer').style.backgroundImage = 'none';
  document.querySelector(".tryUsFreeContainer").style.borderWidth = '1px 1px'
  document.querySelector('.tryUsFreeContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'
  document.querySelector(".getQuoteContainer").style.backgroundImage = 'none';
  document.querySelector('.placeOrderContainer').style.backgroundImage = 'none'
  document.querySelector(".placeOrderContainer").style.borderWidth = '1px 1px'
  document.querySelector('.placeOrderContainer').style.borderColor = 'rgba(255, 255, 255, 0.5)'

})

// Js Code For Pricing

// Hiding The Circle initially for all Service
document.getElementById('clippingPathCircle').style.display = 'none'
document.getElementById('retouchRightMark').style.display = 'none'
document.getElementById('ghostMannequinRightMark').style.display = 'none'
document.getElementById('maskingRightMark').style.display = 'none'
document.getElementById('otherBgRightMark').style.display = 'none'

// Hidding All The Other Service of Clipping Path Service

// Functionality for Clipping Path Service
const clippingPath = document.getElementById('clippingPath')

clippingPath.addEventListener('click', () => {
  // Changing Background of Clipping Path Service When Any One Click on That
  document.getElementById('clippingPathCircle').style.display = 'none'
  document.getElementById('clippingPathRightMark').style.display = 'block'
  document.querySelector('.clippingBg').style.background = "#155EEF"
  document.querySelector('.clippingBg').style.color = "#FFFFFF"

  document.getElementById('retouchComplexOne').style.display = 'none'
  document.getElementById('retouchComplexTwo').style.display = 'none'
  document.getElementById('retouchComplexThree').style.display = 'none'
  document.getElementById('retouchComplexFour').style.display = 'none'

  document.getElementById('ghostFlatImage').style.display = 'none'
  document.getElementById('ghostMediumImage').style.display = "none"
  document.getElementById('ghostSuperComplexImage').style.display = "none"

  document.getElementById('multiClippingFlat').style.display = "none"
  document.getElementById('multiClippingMedium').style.display = "none"
  document.getElementById('multiClippingComplex').style.display = "none"
  document.getElementById('multiClippingSuperComplex').style.display = "none"

  document.getElementById('GhostImage').style.display = "none"

  document.getElementById('maskingComplexOne').style.display = "none"
  document.getElementById('maskingComplexTwo').style.display = "none"
  document.getElementById('imagemaskingComplexThree').style.display = "none"
  document.getElementById('imagemaskingComplexFour').style.display = 'none'


  // Deactiving The Other Service Button 
  document.getElementById('retouchRightMark').style.display = 'none'
  document.getElementById('retouchCircle').style.display = 'block'
  document.querySelector('.retouchBg').style.background = '#ffffff'
  document.querySelector('.retouchBg').style.color = '#344054'
  document.querySelector('.retouchBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('ghostMannequinRightMark').style.display = 'none'
  document.getElementById('ghostMannequinRadio').style.display = 'block'
  document.querySelector('.ghostBg').style.background = '#ffffff'
  document.querySelector('.ghostBg').style.color = '#344054'
  document.querySelector('.ghostBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('maskingRightMark').style.display = 'none'
  document.getElementById('maskingCircle').style.display = 'block'
  document.querySelector('.maskingBg').style.background = '#ffffff'
  document.querySelector('.maskingBg').style.color = '#344054'
  document.querySelector('.maskingBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('otherBgRightMark').style.display = 'none'
  document.getElementById('otherBgRadio').style.display = "block"
  document.querySelector('.otherBg').style.background = '#ffffff'
  document.querySelector('.otherBg').style.color = '#344054'
  document.querySelector('.otherBg').style.border = '1px solid #d0d5dd;'
})


// Functionality for Retouching Service
const retouch = document.getElementById('retouching')
retouch.addEventListener('click', () => {

  // Changing Background of Retouching Service When Any One Click on That
  document.getElementById('retouchRightMark').style.display = 'block'
  document.getElementById('retouchCircle').style.display = 'none'
  document.querySelector('.retouchBg').style.background = '#155EEF'
  document.querySelector('.retouchBg').style.color = '#FFFFFF'

  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById('superComplexImage').style.display = 'none'

  document.getElementById('ghostFlatImage').style.display = 'none'
  document.getElementById('ghostMediumImage').style.display = "none"
  document.getElementById('ghostSuperComplexImage').style.display = "none"

  document.getElementById('multiClippingFlat').style.display = "none"
  document.getElementById('multiClippingMedium').style.display = "none"
  document.getElementById('multiClippingComplex').style.display = "none"
  document.getElementById('multiClippingSuperComplex').style.display = "none"

  document.getElementById('GhostImage').style.display = "none"
  document.getElementById('maskingComplexOne').style.display = "none"
  document.getElementById('maskingComplexTwo').style.display = "none"
  document.getElementById('imagemaskingComplexThree').style.display = "none"
  document.getElementById('imagemaskingComplexFour').style.display = 'none'


  // Deactiving The Other Service Button 
  document.getElementById('clippingPathCircle').style.display = 'block'
  document.getElementById('clippingPathRightMark').style.display = 'none'
  document.querySelector('.clippingBg').style.background = "#ffffff"
  document.querySelector('.clippingBg').style.color = "#344054"
  document.querySelector('.clippingBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('ghostMannequinRightMark').style.display = 'none'
  document.getElementById('ghostMannequinRadio').style.display = 'block'
  document.querySelector('.ghostBg').style.background = '#ffffff'
  document.querySelector('.ghostBg').style.color = '#344054'
  document.querySelector('.ghostBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('maskingRightMark').style.display = 'none'
  document.getElementById('maskingCircle').style.display = 'block'
  document.querySelector('.maskingBg').style.background = '#ffffff'
  document.querySelector('.maskingBg').style.color = '#344054'
  document.querySelector('.maskingBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('otherBgRightMark').style.display = 'none'
  document.getElementById('otherBgRadio').style.display = "block"
  document.querySelector('.otherBg').style.background = '#ffffff'
  document.querySelector('.otherBg').style.color = '#344054'
  document.querySelector('.otherBg').style.border = '1px solid #d0d5dd;'
})

// Functionality For Ghost Mannequine Service
const ghostMannequin = document.getElementById('ghostMannequin')
ghostMannequin.addEventListener('click', () => {

  // Changing Background of Ghost Mannequin When Any One Click on That
  document.getElementById('ghostMannequinRightMark').style.display = 'block'
  document.getElementById('ghostMannequinRadio').style.display = 'none'
  document.querySelector('.ghostBg').style.background = '#155EEF'
  document.querySelector('.ghostBg').style.color = '#FFFFFF'

  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById('superComplexImage').style.display = 'none'

  document.getElementById('retouchComplexOne').style.display = 'none'
  document.getElementById('retouchComplexTwo').style.display = 'none'
  document.getElementById('retouchComplexThree').style.display = 'none'
  document.getElementById('retouchComplexFour').style.display = 'none'

  document.getElementById('multiClippingFlat').style.display = "none"
  document.getElementById('multiClippingMedium').style.display = "none"
  document.getElementById('multiClippingComplex').style.display = "none"
  document.getElementById('multiClippingSuperComplex').style.display = "none"

  document.getElementById('maskingComplexOne').style.display = "none"
  document.getElementById('maskingImage').style.display ='none'

  document.getElementById('GhostImage').style.display = "none"
  document.getElementById('maskingComplexOne').style.display = "none"
  document.getElementById('maskingComplexTwo').style.display = "none"
  document.getElementById('imagemaskingComplexThree').style.display = "none"
  document.getElementById('imagemaskingComplexFour').style.display = 'none'

  // Deactiving The Other Service Button 
  document.getElementById('clippingPathCircle').style.display = 'block'
  document.getElementById('clippingPathRightMark').style.display = 'none'
  document.querySelector('.clippingBg').style.background = "#ffffff"
  document.querySelector('.clippingBg').style.color = "#344054"
  document.querySelector('.clippingBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('retouchRightMark').style.display = 'none'
  document.getElementById('retouchCircle').style.display = 'block'
  document.querySelector('.retouchBg').style.background = '#ffffff'
  document.querySelector('.retouchBg').style.color = '#344054'
  document.querySelector('.retouchBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('maskingRightMark').style.display = 'none'
  document.getElementById('maskingCircle').style.display = 'block'
  document.querySelector('.maskingBg').style.background = '#ffffff'
  document.querySelector('.maskingBg').style.color = '#344054'
  document.querySelector('.maskingBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('otherBgRightMark').style.display = 'none'
  document.getElementById('otherBgRadio').style.display = "block"
  document.querySelector('.otherBg').style.background = '#ffffff'
  document.querySelector('.otherBg').style.color = '#344054'
  document.querySelector('.otherBg').style.border = '1px solid #d0d5dd;'

})

// Functionality for Image Masking
const imageMasking = document.getElementById('masking')

// Changing Background of Image Masaking When Any One Click on That
imageMasking.addEventListener('click', () => {

  document.getElementById('retouchComplexOne').style.display = 'none'
  document.getElementById('retouchComplexTwo').style.display = 'none'
  document.getElementById('retouchComplexThree').style.display = 'none'
  document.getElementById('retouchComplexFour').style.display = 'none'

  document.getElementById('ghostFlatImage').style.display = 'none'
  document.getElementById('ghostMediumImage').style.display = "none"
  document.getElementById('ghostComplexImage').style.display = "none"
  document.getElementById('ghostSuperComplexImage').style.display = "none"

  
  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById('superComplexImage').style.display = 'none'

  document.getElementById('GhostImage').style.display = "none"
  document.getElementById('maskingComplexOne').style.display = "none"
  document.getElementById('maskingComplexTwo').style.display = "none"
  document.getElementById('imagemaskingComplexThree').style.display = "none"
  document.getElementById('imagemaskingComplexFour').style.display = 'none'



  document.getElementById('maskingRightMark').style.display = 'block'
  document.getElementById('maskingCircle').style.display = 'none'
  document.querySelector('.maskingBg').style.background = '#155EEF'
  document.querySelector('.maskingBg').style.color = '#FFFFFF'

  // Deactiving The Other Service Button 
  document.getElementById('clippingPathCircle').style.display = 'block'
  document.getElementById('clippingPathRightMark').style.display = 'none'
  document.querySelector('.clippingBg').style.background = "#ffffff"
  document.querySelector('.clippingBg').style.color = "#344054"
  document.querySelector('.clippingBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('retouchRightMark').style.display = 'none'
  document.getElementById('retouchCircle').style.display = 'block'
  document.querySelector('.retouchBg').style.background = '#ffffff'
  document.querySelector('.retouchBg').style.color = '#344054'
  document.querySelector('.retouchBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('ghostMannequinRightMark').style.display = 'none'
  document.getElementById('ghostMannequinRadio').style.display = 'block'
  document.querySelector('.ghostBg').style.background = '#ffffff'
  document.querySelector('.ghostBg').style.color = '#344054'
  document.querySelector('.ghostBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('otherBgRightMark').style.display = 'none'
  document.getElementById('otherBgRadio').style.display = "block"
  document.querySelector('.otherBg').style.background = '#ffffff'
  document.querySelector('.otherBg').style.color = '#344054'
  document.querySelector('.otherBg').style.border = '1px solid #d0d5dd;'
})

// Functionality for Other Service
const otherService = document.getElementById('otherServiceBg')
// Changing Background of Other Service When Any One Click on That
otherService.addEventListener('click', () => {
  document.getElementById('otherBgRightMark').style.display = 'block'
  document.getElementById('otherBgRadio').style.display = "none"
  document.querySelector('.otherBg').style.background = '#155EEF'
  document.querySelector('.otherBg').style.color = '#FFFFFF'

  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById('superComplexImage').style.display = 'none'

  document.getElementById('retouchComplexOne').style.display = 'none'
  document.getElementById('retouchComplexTwo').style.display = 'none'
  document.getElementById('retouchComplexThree').style.display = 'none'
  document.getElementById('retouchComplexFour').style.display = 'none'

  document.getElementById('multiClippingFlat').style.display = "none"
  document.getElementById('multiClippingMedium').style.display = "none"
  document.getElementById('multiClippingComplex').style.display = "none"
  document.getElementById('multiClippingSuperComplex').style.display = "none"

  document.getElementById('ghostFlatImage').style.display = 'none'
  document.getElementById('ghostMediumImage').style.display = "none"
  document.getElementById('ghostComplexImage').style.display = "none"
  document.getElementById('ghostSuperComplexImage').style.display = "none"
  document.getElementById("GhostImage").style.display = "none"

  // document.getElementById('GhostImage').style.display = "none"
  // document.getElementById('maskingComplexOne').style.display = "none"
  // document.getElementById('maskingComplexTwo').style.display = "none"



  // Deactiving The Other Service Button 
  document.getElementById('clippingPathCircle').style.display = 'block'
  document.getElementById('clippingPathRightMark').style.display = 'none'
  document.querySelector('.clippingBg').style.background = "#ffffff"
  document.querySelector('.clippingBg').style.color = "#344054"
  document.querySelector('.clippingBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('retouchRightMark').style.display = 'none'
  document.getElementById('retouchCircle').style.display = 'block'
  document.querySelector('.retouchBg').style.background = '#ffffff'
  document.querySelector('.retouchBg').style.color = '#344054'
  document.querySelector('.retouchBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('ghostMannequinRightMark').style.display = 'none'
  document.getElementById('ghostMannequinRadio').style.display = 'block'
  document.querySelector('.ghostBg').style.background = '#ffffff'
  document.querySelector('.ghostBg').style.color = '#344054'
  document.querySelector('.ghostBg').style.border = '1px solid #d0d5dd;'

  document.getElementById('maskingRightMark').style.display = 'none'
  document.getElementById('maskingCircle').style.display = 'block'
  document.querySelector('.maskingBg').style.background = '#ffffff'
  document.querySelector('.maskingBg').style.color = '#344054'
  document.querySelector('.maskingBg').style.border = '1px solid #d0d5dd;'
})

// Change Service On Button Click

// By Default Hidding Other Service
document.getElementById('photoRetouchingImage').style.display = 'none'
document.getElementById('RetouchingBasicImage').style.display = 'none'
document.getElementById('GhostImage').style.display = 'none'
document.getElementById('ghostBasicImage').style.display = 'none'
document.getElementById('multiImage').style.display = 'none'
document.getElementById('multiImageButton').style.display = 'none'
document.getElementById('maskingImage').style.display = 'none'
document.getElementById('maskingImageButton').style.display = 'none'


// Clipping Path Button Functionality on Pricing Section
const clippingPathPricing = document.getElementById('clippingPath')
clippingPathPricing.addEventListener('click', () => {
  document.getElementById('clippingPathImage').style.display = 'block'
  document.getElementById('clippingPathBasicImage').style.display = 'flex'

  // Hide Other Services When Clipping Path is Active
  document.getElementById('photoRetouchingImage').style.display = 'none'
  document.getElementById('RetouchingBasicImage').style.display = 'none'
  document.getElementById('GhostImage').style.display = 'none'
  document.getElementById('ghostComplexImage').style.display = 'none'
  document.getElementById('ghostBasicImage').style.display = 'none'
  document.getElementById('multiImage').style.display = 'none'
  document.getElementById('multiImageButton').style.display = 'none'
  document.getElementById('maskingImage').style.display = 'none'
  document.getElementById('maskingImageButton').style.display = 'none'

  document.getElementById('maskingComplexOne').style.display = "none"
  
})

// PhotoRetouching Button Functionaity on Pricing Section

const retouching = document.getElementById('retouching')
retouching.addEventListener('click', () => {
  document.getElementById('photoRetouchingImage').style.display = 'block'
  document.getElementById('RetouchingBasicImage').style.display = 'flex'

  // Hide Other Services When Photo Retouching is Active
  document.getElementById('clippingPathImage').style.display = 'none'
  document.getElementById('clippingPathBasicImage').style.display = 'none'
  document.getElementById('GhostImage').style.display = 'none'
  document.getElementById('ghostBasicImage').style.display = 'none'
  document.getElementById('ghostComplexImage').style.display = 'none'
  document.getElementById('multiImage').style.display = 'none'
  document.getElementById('multiImageButton').style.display = 'none'
  document.getElementById('maskingImage').style.display = 'none'
  document.getElementById('maskingImageButton').style.display = 'none'

  document.getElementById('maskingComplexOne').style.display = "none"

})


const ghostMannequine = document.getElementById('ghostMannequin')
ghostMannequine.addEventListener('click', () => {
  document.getElementById('GhostImage').style.display = 'block'
  document.getElementById('ghostBasicImage').style.display = 'flex'

  // Hide Other Services When Ghost Mannequine is Active
  document.getElementById('photoRetouchingImage').style.display = 'none'
  document.getElementById('RetouchingBasicImage').style.display = 'none'
  document.getElementById('clippingPathImage').style.display = 'none'
  document.getElementById('clippingPathBasicImage').style.display = 'none'
  document.getElementById('multiImage').style.display = 'none'
  document.getElementById('multiImageButton').style.display = 'none'
  document.getElementById('maskingImage').style.display = 'none'
  document.getElementById('maskingImageButton').style.display = 'none'

  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById('superComplexImage').style.display = 'none'

  document.getElementById('multiImage').style.display = 'none'
  document.getElementById('multiImageButton').style.display = 'none'
  document.getElementById('maskingImage').style.display = 'none'
  document.getElementById('maskingImageButton').style.display = 'none'

  document.getElementById('maskingComplexOne').style.display = "none"
})

// MultiClipping Path
const multiClippingPath = document.getElementById('masking')
multiClippingPath.addEventListener('click', () => {
  document.getElementById('multiImage').style.display = 'block'
  document.getElementById('multiImageButton').style.display = 'flex'

  // Hide Other Services When MultiClipping is Active
  document.getElementById('photoRetouchingImage').style.display = 'none'
  document.getElementById('RetouchingBasicImage').style.display = 'none'
  document.getElementById('clippingPathImage').style.display = 'none'
  document.getElementById('clippingPathBasicImage').style.display = 'none'
  document.getElementById('GhostImage').style.display = 'none'
  document.getElementById('ghostBasicImage').style.display = 'none'
  document.getElementById('maskingImage').style.display = 'none'
  document.getElementById('maskingImageButton').style.display = 'none'

  document.getElementById('retouchComplexOne').style.display = 'none'
  document.getElementById('retouchComplexTwo').style.display = 'none'
  document.getElementById('retouchComplexThree').style.display = 'none'
  document.getElementById('retouchComplexFour').style.display = 'none'

  document.getElementById('ghostFlatImage').style.display = 'none'
  document.getElementById('ghostMediumImage').style.display = "none"
  document.getElementById('ghostSuperComplexImage').style.display = "none"
  
  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById('superComplexImage').style.display = 'none'

  document.getElementById('maskingComplexOne').style.display = "none"
  
  

})

const imageMaskingService = document.getElementById('otherServiceBg')
imageMaskingService.addEventListener('click', () => {
  document.getElementById('maskingImage').style.display = 'block'
  document.getElementById('maskingImageButton').style.display = 'flex'

  // Hide Other Services When MultiClipping is Active
  document.getElementById('photoRetouchingImage').style.display = 'none'
  document.getElementById('RetouchingBasicImage').style.display = 'none'
  document.getElementById('clippingPathImage').style.display = 'none'
  document.getElementById('clippingPathBasicImage').style.display = 'none'
  document.getElementById('GhostImage').style.display = 'none'
  document.getElementById('multiImage').style.display = 'none'
  document.getElementById('multiImageButton').style.display = 'none'


  document.getElementById('retouchComplexOne').style.display = 'none'
  document.getElementById('retouchComplexTwo').style.display = 'none'
  document.getElementById('retouchComplexThree').style.display = 'none'
  document.getElementById('retouchComplexFour').style.display = 'none'

  document.getElementById('ghostFlatImage').style.display = 'none'
  document.getElementById('ghostMediumImage').style.display = "none"
  document.getElementById('ghostSuperComplexImage').style.display = "none"
  
  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById('superComplexImage').style.display = 'none'

  document.getElementById('maskingComplexOne').style.display = "none"
})

// Image Masking Service Button Functionality
const otherPricingService = document.getElementById('otherServiceBg')
otherPricingService.addEventListener('click', () => {
  document.getElementById('photoRetouchingImage').style.display = 'none'
  document.getElementById('RetouchingBasicImage').style.display = 'none'
  document.getElementById('clippingPathImage').style.display = 'none'
  document.getElementById('clippingPathBasicImage').style.display = 'none'
  document.getElementById('multiImage').style.display = 'none'
  document.getElementById('multiImageButton').style.display = 'none'
  
  
  document.getElementById('retouchComplexOne').style.display = 'none'
  document.getElementById('retouchComplexTwo').style.display = 'none'
  document.getElementById('retouchComplexThree').style.display = 'none'
  document.getElementById('retouchComplexFour').style.display = 'none'
  
  document.getElementById('GhostImage').style.display = 'none'
  document.getElementById('ghostBasicImage').style.display = 'none'
  document.getElementById('ghostFlatImage').style.display = 'none'
  document.getElementById('ghostMediumImage').style.display = "none"
  document.getElementById('ghostComplexImage').style.display = "none"
  document.getElementById('ghostSuperComplexImage').style.display = "none"
  
  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById('superComplexImage').style.display = 'none'

  document.getElementById('maskingComplexOne').style.display = "none"
})


// Button Functionality of Clipping Path Service

document.getElementById('flatImage').style.display = 'none'
document.getElementById('mediumImage').style.display = 'none'
document.getElementById('complexImage').style.display = 'none'
document.getElementById("superComplexImage").style.display = 'none'

// Clipping Path Basic
const clippingBasic = document.getElementById('clippingBasic')
clippingBasic.addEventListener('click', () => {
  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('clippingPathImage').style.display = 'block'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById("superComplexImage").style.display = 'none'

  // Changing Button Color
  document.getElementById('clippingBasic').style.background = "#155EEF"
  document.getElementById('clippingBasic').style.padding = "10px 14px"
  document.getElementById('clippingBasic').style.borderRadius = "8px"
  document.getElementById('clippingBasic').style.color = "#ffffff"

  // Deactiving Current Button
  document.getElementById('clippingFlatRate').style.padding = "0"
  document.getElementById('clippingFlatRate').style.borderRadius = "0px"
  document.getElementById('clippingFlatRate').style.background = "none"
  document.getElementById('clippingFlatRate').style.color = "#475467"
  document.getElementById('clippingFlatRate').style.border = "0px"
  document.getElementById('clippingFlatRate').style.boxShadow = "0px"

  document.getElementById('clippingSuperComplex').style.background = "none"
  document.getElementById('clippingSuperComplex').style.padding = "0px"
  document.getElementById('clippingSuperComplex').style.borderRadius = "0px"
  document.getElementById('clippingSuperComplex').style.color = "#475467"
  
  document.getElementById('clippingMedium').style.background = "none"
  document.getElementById('clippingMedium').style.padding = "0px"
  document.getElementById('clippingMedium').style.borderRadius = "0px"
  document.getElementById('clippingMedium').style.color = "#475467"

})

// Clipping Path Flat
const flatImage = document.getElementById('clippingFlatRate')
flatImage.addEventListener('click', () => {
  document.getElementById('flatImage').style.display = 'block'
  document.getElementById('clippingPathImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById("superComplexImage").style.display = 'none'

  // Changing Button Color
  document.getElementById('clippingFlatRate').style.background = "#155EEF"
  document.getElementById('clippingFlatRate').style.padding = "10px 14px"
  document.getElementById('clippingFlatRate').style.borderRadius = "8px"
  document.getElementById('clippingFlatRate').style.color = "#ffffff"

  // Deactiving Current Button
  document.getElementById('clippingBasic').style.padding = "0"
  document.getElementById('clippingBasic').style.borderRadius = "0px"
  document.getElementById('clippingBasic').style.background = "none"
  document.getElementById('clippingBasic').style.color = "#475467"
  document.getElementById('clippingBasic').style.border = "0px"
  document.getElementById('clippingBasic').style.boxShadow = "0px"

  document.getElementById('clippingMedium').style.background = "none"
  document.getElementById('clippingMedium').style.padding = "0px"
  document.getElementById('clippingMedium').style.borderRadius = "0px"
  document.getElementById('clippingMedium').style.color = "#475467"

  document.getElementById('clippingComplex').style.background = "none"
  document.getElementById('clippingComplex').style.padding = "0px"
  document.getElementById('clippingComplex').style.borderRadius = "0px"
  document.getElementById('clippingComplex').style.color = "#475467"

  document.getElementById('clippingSuperComplex').style.background = "none"
  document.getElementById('clippingSuperComplex').style.padding = "0px"
  document.getElementById('clippingSuperComplex').style.borderRadius = "0px"
  document.getElementById('clippingSuperComplex').style.color = "#475467"

  

})

// Clipping Path Medium
const clippingMedium = document.getElementById('clippingMedium')
clippingMedium.addEventListener('click', () => {
  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('clippingPathImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'block'
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById("superComplexImage").style.display = 'none'

  // Changing Button Color
  document.getElementById('clippingMedium').style.background = "#155EEF"
  document.getElementById('clippingMedium').style.padding = "10px 14px"
  document.getElementById('clippingMedium').style.borderRadius = "8px"
  document.getElementById('clippingMedium').style.color = "#ffffff"

  // Deactiving Current Button
  document.getElementById('clippingBasic').style.padding = "0"
  document.getElementById('clippingBasic').style.borderRadius = "0px"
  document.getElementById('clippingBasic').style.background = "none"
  document.getElementById('clippingBasic').style.color = "#475467"
  document.getElementById('clippingBasic').style.border = "0px"
  document.getElementById('clippingBasic').style.boxShadow = "0px"

  document.getElementById('clippingFlatRate').style.padding = "0"
  document.getElementById('clippingFlatRate').style.borderRadius = "0px"
  document.getElementById('clippingFlatRate').style.background = "none"
  document.getElementById('clippingFlatRate').style.color = "#475467"
  document.getElementById('clippingFlatRate').style.border = "0px"
  document.getElementById('clippingFlatRate').style.boxShadow = "0px"

  document.getElementById('clippingComplex').style.padding = "0"
  document.getElementById('clippingComplex').style.borderRadius = "0px"
  document.getElementById('clippingComplex').style.background = "none"
  document.getElementById('clippingComplex').style.color = "#475467"
  document.getElementById('clippingComplex').style.border = "0px"
  document.getElementById('clippingComplex').style.boxShadow = "0px"

  document.getElementById('clippingSuperComplex').style.background = "none"
  document.getElementById('clippingSuperComplex').style.padding = "0px"
  document.getElementById('clippingSuperComplex').style.borderRadius = "0px"
  document.getElementById('clippingSuperComplex').style.color = "#475467"

})

// Clipping Path Complex
const clippingPathComplex = document.getElementById('clippingComplex')
clippingPathComplex.addEventListener('click', () => {
  document.getElementById('complexImage').style.display = 'block'
  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('clippingPathImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById("superComplexImage").style.display = 'none'


  // Changing Button Color
  document.getElementById('clippingComplex').style.background = "#155EEF"
  document.getElementById('clippingComplex').style.padding = "10px 14px"
  document.getElementById('clippingComplex').style.borderRadius = "8px"
  document.getElementById('clippingComplex').style.color = "#ffffff"

  // Deactiving Current Button
  document.getElementById('clippingBasic').style.padding = "0"
  document.getElementById('clippingBasic').style.borderRadius = "0px"
  document.getElementById('clippingBasic').style.background = "none"
  document.getElementById('clippingBasic').style.color = "#475467"
  document.getElementById('clippingBasic').style.border = "0px"
  document.getElementById('clippingBasic').style.boxShadow = "0px"

  document.getElementById('clippingFlatRate').style.padding = "0"
  document.getElementById('clippingFlatRate').style.borderRadius = "0px"
  document.getElementById('clippingFlatRate').style.background = "none"
  document.getElementById('clippingFlatRate').style.color = "#475467"
  document.getElementById('clippingFlatRate').style.border = "0px"
  document.getElementById('clippingFlatRate').style.boxShadow = "0px"

  document.getElementById('clippingMedium').style.background = "none"
  document.getElementById('clippingMedium').style.padding = "0px"
  document.getElementById('clippingMedium').style.borderRadius = "0px"
  document.getElementById('clippingMedium').style.color = "#475467"

  document.getElementById('clippingSuperComplex').style.background = "none"
  document.getElementById('clippingSuperComplex').style.padding = "0px"
  document.getElementById('clippingSuperComplex').style.borderRadius = "0px"
  document.getElementById('clippingSuperComplex').style.color = "#475467"
})

// Clipping Super Complex
const clippingSuperComplex = document.getElementById('clippingSuperComplex')
clippingSuperComplex.addEventListener('click', () => {
  document.getElementById('complexImage').style.display = 'none'
  document.getElementById('flatImage').style.display = 'none'
  document.getElementById('clippingPathImage').style.display = 'none'
  document.getElementById('mediumImage').style.display = 'none'
  document.getElementById("superComplexImage").style.display = 'block'


  // Changing Button Color
  document.getElementById('clippingSuperComplex').style.background = "#155EEF"
  document.getElementById('clippingSuperComplex').style.padding = "10px 14px"
  document.getElementById('clippingSuperComplex').style.borderRadius = "8px"
  document.getElementById('clippingSuperComplex').style.color = "#ffffff"

  // Deactiving Current Button
  document.getElementById('clippingBasic').style.padding = "0"
  document.getElementById('clippingBasic').style.borderRadius = "0px"
  document.getElementById('clippingBasic').style.background = "none"
  document.getElementById('clippingBasic').style.color = "#475467"
  document.getElementById('clippingBasic').style.border = "0px"
  document.getElementById('clippingBasic').style.boxShadow = "0px"

  document.getElementById('clippingFlatRate').style.padding = "0"
  document.getElementById('clippingFlatRate').style.borderRadius = "0px"
  document.getElementById('clippingFlatRate').style.background = "none"
  document.getElementById('clippingFlatRate').style.color = "#475467"
  document.getElementById('clippingFlatRate').style.border = "0px"
  document.getElementById('clippingFlatRate').style.boxShadow = "0px"

  document.getElementById('clippingMedium').style.background = "none"
  document.getElementById('clippingMedium').style.padding = "0px"
  document.getElementById('clippingMedium').style.borderRadius = "0px"
  document.getElementById('clippingMedium').style.color = "#475467"

  document.getElementById('clippingComplex').style.padding = "0"
  document.getElementById('clippingComplex').style.borderRadius = "0px"
  document.getElementById('clippingComplex').style.background = "none"
  document.getElementById('clippingComplex').style.color = "#475467"
  document.getElementById('clippingComplex').style.border = "0px"
  document.getElementById('clippingComplex').style.boxShadow = "0px"
})


// Button Functionality for Photo Retouching Service Starts
document.getElementById('retouchComplexOne').style.display = "none"
document.getElementById('retouchComplexTwo').style.display = "none"
document.getElementById('retouchComplexTwo').style.display = "none"
document.getElementById('retouchComplexThree').style.display = "none"
document.getElementById('retouchComplexFour').style.display = "none"


// Complex One
const retouchComplexOne = document.getElementById('retouchComplexOneButton')
retouchComplexOne.addEventListener('click', () => {
  document.getElementById('retouchComplexOne').style.display = "none"
  document.getElementById('photoRetouchingImage').style.display = "block"
  document.getElementById('retouchComplexTwo').style.display = "none"
  document.getElementById('retouchComplexThree').style.display = "none"
  document.getElementById('retouchComplexFour').style.display = "none"


  // Changing Button color
  document.getElementById('retouchComplexOneButton').style.background = "#155EEF"
  document.getElementById('retouchComplexOneButton').style.padding = "10px 14px"
  document.getElementById('retouchComplexOneButton').style.borderRadius = "8px"
  document.getElementById('retouchComplexOneButton').style.color = "#ffffff"

  // Deactiving Current Button
  document.getElementById('retouchComplexTwoButton').style.padding = "0"
  document.getElementById('retouchComplexTwoButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexTwoButton').style.background = "none"
  document.getElementById('retouchComplexTwoButton').style.color = "#475467"
  document.getElementById('retouchComplexTwoButton').style.border = "0px"
  document.getElementById('retouchComplexTwoButton').style.boxShadow = "0px"

  document.getElementById('retouchComplexThreeButton').style.padding = "0"
  document.getElementById('retouchComplexThreeButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexThreeButton').style.background = "none"
  document.getElementById('retouchComplexThreeButton').style.color = "#475467"
  document.getElementById('retouchComplexThreeButton').style.border = "0px"
  document.getElementById('retouchComplexThreeButton').style.boxShadow = "0px"

  document.getElementById('retouchComplexFourButton').style.padding = "0"
  document.getElementById('retouchComplexFourButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexFourButton').style.background = "none"
  document.getElementById('retouchComplexFourButton').style.color = "#475467"
  document.getElementById('retouchComplexFourButton').style.border = "0px"
  document.getElementById('retouchComplexFourButton').style.boxShadow = "0px"

  document.getElementById('retouchComplexFiveButton').style.padding = "0"
  document.getElementById('retouchComplexFiveButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexFiveButton').style.background = "none"
  document.getElementById('retouchComplexFiveButton').style.color = "#475467"
  document.getElementById('retouchComplexFiveButton').style.border = "0px"
  document.getElementById('retouchComplexFiveButton').style.boxShadow = "0px"
})

// Complexity Two
const retouchComplexTwo = document.getElementById('retouchComplexTwoButton')
retouchComplexTwo.addEventListener('click', () => {
  document.getElementById('retouchComplexOne').style.display = "block"
  document.getElementById('photoRetouchingImage').style.display = "none"
  document.getElementById('retouchComplexTwo').style.display = "none"
  document.getElementById('retouchComplexThree').style.display = "none"
  document.getElementById('retouchComplexFour').style.display = "none"

  // Changing Button color
  document.getElementById('retouchComplexTwoButton').style.background = "#155EEF"
  document.getElementById('retouchComplexTwoButton').style.padding = "10px 14px"
  document.getElementById('retouchComplexTwoButton').style.borderRadius = "8px"
  document.getElementById('retouchComplexTwoButton').style.color = "#ffffff"

  // Deactiving Current Button
  document.getElementById('retouchComplexOneButton').style.padding = "0"
  document.getElementById('retouchComplexOneButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexOneButton').style.background = "none"
  document.getElementById('retouchComplexOneButton').style.color = "#475467"
  document.getElementById('retouchComplexOneButton').style.border = "0px"
  document.getElementById('retouchComplexOneButton').style.boxShadow = "0px"

  document.getElementById('retouchComplexThreeButton').style.padding = "0"
  document.getElementById('retouchComplexThreeButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexThreeButton').style.background = "none"
  document.getElementById('retouchComplexThreeButton').style.color = "#475467"
  document.getElementById('retouchComplexThreeButton').style.border = "0px"
  document.getElementById('retouchComplexThreeButton').style.boxShadow = "0px"

  document.getElementById('retouchComplexFourButton').style.padding = "0"
  document.getElementById('retouchComplexFourButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexFourButton').style.background = "none"
  document.getElementById('retouchComplexFourButton').style.color = "#475467"
  document.getElementById('retouchComplexFourButton').style.border = "0px"
  document.getElementById('retouchComplexFourButton').style.boxShadow = "0px"

  document.getElementById('retouchComplexFiveButton').style.padding = "0"
  document.getElementById('retouchComplexFiveButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexFiveButton').style.background = "none"
  document.getElementById('retouchComplexFiveButton').style.color = "#475467"
  document.getElementById('retouchComplexFiveButton').style.border = "0px"
  document.getElementById('retouchComplexFiveButton').style.boxShadow = "0px"
})

// Complexity Three
const retouchComplexThree = document.getElementById('retouchComplexThreeButton')
retouchComplexThree.addEventListener('click', () => {
  document.getElementById('retouchComplexTwo').style.display = "block"
  document.getElementById('retouchComplexOne').style.display = "none"
  document.getElementById('photoRetouchingImage').style.display = "none"
  document.getElementById('retouchComplexThree').style.display = "none"
  document.getElementById('retouchComplexFour').style.display = "none"

  // Changing Button color
  document.getElementById('retouchComplexThreeButton').style.background = "#155EEF"
  document.getElementById('retouchComplexThreeButton').style.padding = "10px 14px"
  document.getElementById('retouchComplexThreeButton').style.borderRadius = "8px"
  document.getElementById('retouchComplexThreeButton').style.color = "#ffffff"

  // Deactiving Current Button
  document.getElementById('retouchComplexOneButton').style.padding = "0"
  document.getElementById('retouchComplexOneButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexOneButton').style.background = "none"
  document.getElementById('retouchComplexOneButton').style.color = "#475467"
  document.getElementById('retouchComplexOneButton').style.border = "0px"
  document.getElementById('retouchComplexOneButton').style.boxShadow = "0px"

  document.getElementById('retouchComplexTwoButton').style.padding = "0"
  document.getElementById('retouchComplexTwoButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexTwoButton').style.background = "none"
  document.getElementById('retouchComplexTwoButton').style.color = "#475467"
  document.getElementById('retouchComplexTwoButton').style.border = "0px"
  document.getElementById('retouchComplexTwoButton').style.boxShadow = "0px"

  document.getElementById('retouchComplexFourButton').style.padding = "0"
  document.getElementById('retouchComplexFourButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexFourButton').style.background = "none"
  document.getElementById('retouchComplexFourButton').style.color = "#475467"
  document.getElementById('retouchComplexFourButton').style.border = "0px"
  document.getElementById('retouchComplexFourButton').style.boxShadow = "0px"
  
  document.getElementById('retouchComplexFiveButton').style.padding = "0"
  document.getElementById('retouchComplexFiveButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexFiveButton').style.background = "none"
  document.getElementById('retouchComplexFiveButton').style.color = "#475467"
  document.getElementById('retouchComplexFiveButton').style.border = "0px"
  document.getElementById('retouchComplexFiveButton').style.boxShadow = "0px"

})

// Complexity Four
const retouchComplexityFour = document.getElementById('retouchComplexFourButton')
retouchComplexityFour.addEventListener('click', () => {
  document.getElementById('retouchComplexTwo').style.display = "none"
  document.getElementById('retouchComplexOne').style.display = "none"
  document.getElementById('photoRetouchingImage').style.display = "none"
  document.getElementById('retouchComplexThree').style.display = "block"
  document.getElementById('retouchComplexFour').style.display = "none"

  // Changing Button color
  document.getElementById('retouchComplexFourButton').style.background = "#155EEF"
  document.getElementById('retouchComplexFourButton').style.padding = "10px 14px"
  document.getElementById('retouchComplexFourButton').style.borderRadius = "8px"
  document.getElementById('retouchComplexFourButton').style.color = "#ffffff"



  // Deactiving Current Button
  document.getElementById('retouchComplexOneButton').style.padding = "0"
  document.getElementById('retouchComplexOneButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexOneButton').style.background = "none"
  document.getElementById('retouchComplexOneButton').style.color = "#475467"
  document.getElementById('retouchComplexOneButton').style.border = "0px"
  document.getElementById('retouchComplexOneButton').style.boxShadow = "0px"

  document.getElementById('retouchComplexTwoButton').style.padding = "0"
  document.getElementById('retouchComplexTwoButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexTwoButton').style.background = "none"
  document.getElementById('retouchComplexTwoButton').style.color = "#475467"
  document.getElementById('retouchComplexTwoButton').style.border = "0px"
  document.getElementById('retouchComplexTwoButton').style.boxShadow = "0px"

  document.getElementById('retouchComplexThreeButton').style.padding = "0"
  document.getElementById('retouchComplexThreeButton').style.borderRadius = "0px"
  document.getElementById('retouchComplexThreeButton').style.background = "none"
  document.getElementById('retouchComplexThreeButton').style.color = "#475467"
  document.getElementById('retouchComplexThreeButton').style.border = "0px"
  document.getElementById('retouchComplexThreeButton').style.boxShadow = "0px"

  document.getElementById('retouchComplexFiveButton').style.padding = "0"
    document.getElementById('retouchComplexFiveButton').style.borderRadius = "0px"
    document.getElementById('retouchComplexFiveButton').style.background = "none"
    document.getElementById('retouchComplexFiveButton').style.color = "#475467"
    document.getElementById('retouchComplexFiveButton').style.border = "0px"
    document.getElementById('retouchComplexFiveButton').style.boxShadow = "0px"

})

// Complexity Five
const retouchComplexityFive = document.getElementById('retouchComplexFiveButton')
retouchComplexityFive.addEventListener('click', () =>{
  document.getElementById('retouchComplexOne').style.display = "none"
  document.getElementById('photoRetouchingImage').style.display = "none"
  document.getElementById('retouchComplexTwo').style.display = "none"
  document.getElementById('retouchComplexThree').style.display = "none"
  document.getElementById('retouchComplexFour').style.display = "block"

  // Changing Button color
  document.getElementById('retouchComplexFiveButton').style.background = "#155EEF"
  document.getElementById('retouchComplexFiveButton').style.padding = "10px 14px"
  document.getElementById('retouchComplexFiveButton').style.borderRadius = "8px"
  document.getElementById('retouchComplexFiveButton').style.color = "#ffffff"

    // Deactiving Current Button
    document.getElementById('retouchComplexOneButton').style.padding = "0"
    document.getElementById('retouchComplexOneButton').style.borderRadius = "0px"
    document.getElementById('retouchComplexOneButton').style.background = "none"
    document.getElementById('retouchComplexOneButton').style.color = "#475467"
    document.getElementById('retouchComplexOneButton').style.border = "0px"
    document.getElementById('retouchComplexOneButton').style.boxShadow = "0px"
  
    document.getElementById('retouchComplexTwoButton').style.padding = "0"
    document.getElementById('retouchComplexTwoButton').style.borderRadius = "0px"
    document.getElementById('retouchComplexTwoButton').style.background = "none"
    document.getElementById('retouchComplexTwoButton').style.color = "#475467"
    document.getElementById('retouchComplexTwoButton').style.border = "0px"
    document.getElementById('retouchComplexTwoButton').style.boxShadow = "0px"
  
    document.getElementById('retouchComplexThreeButton').style.padding = "0"
    document.getElementById('retouchComplexThreeButton').style.borderRadius = "0px"
    document.getElementById('retouchComplexThreeButton').style.background = "none"
    document.getElementById('retouchComplexThreeButton').style.color = "#475467"
    document.getElementById('retouchComplexThreeButton').style.border = "0px"
    document.getElementById('retouchComplexThreeButton').style.boxShadow = "0px"
    
    document.getElementById('retouchComplexFourButton').style.padding = "0"
    document.getElementById('retouchComplexFourButton').style.borderRadius = "0px"
    document.getElementById('retouchComplexFourButton').style.background = "none"
    document.getElementById('retouchComplexFourButton').style.color = "#475467"
    document.getElementById('retouchComplexFourButton').style.border = "0px"
    document.getElementById('retouchComplexFourButton').style.boxShadow = "0px"
})

// Button Functionality for Photo Retouching Service Ends

document.getElementById('ghostFlatImage').style.display = "none"
document.getElementById('ghostMediumImage').style.display = "none"

const ghostBasicButton = document.getElementById('ghostBasicButton')
ghostBasicButton.addEventListener('click', () =>{
  document.getElementById('GhostImage').style.display = "block"
  document.getElementById('ghostFlatImage').style.display = "none"
  document.getElementById('ghostMediumImage').style.display = "none"
  document.getElementById('ghostComplexImage').style.display = 'none'
  document.getElementById('ghostSuperComplexImage').style.display = "none"

   // Changing Button color
   document.getElementById('ghostBasicButton').style.background = "#155EEF"
   document.getElementById('ghostBasicButton').style.padding = "10px 14px"
   document.getElementById('ghostBasicButton').style.borderRadius = "8px"
   document.getElementById('ghostBasicButton').style.color = "#ffffff"


      // Deactiving Current Button
      document.getElementById('ghostMediumButton').style.padding = "0"
      document.getElementById('ghostMediumButton').style.borderRadius = "0px"
      document.getElementById('ghostMediumButton').style.background = "none"
      document.getElementById('ghostMediumButton').style.color = "#475467"
      document.getElementById('ghostMediumButton').style.border = "0px"
      document.getElementById('ghostMediumButton').style.boxShadow = "0px"

      document.getElementById('ghostFlatButton').style.padding = "0"
      document.getElementById('ghostFlatButton').style.borderRadius = "0px"
      document.getElementById('ghostFlatButton').style.background = "none"
      document.getElementById('ghostFlatButton').style.color = "#475467"
      document.getElementById('ghostFlatButton').style.border = "0px"
      document.getElementById('ghostFlatButton').style.boxShadow = "0px"

      document.getElementById('ghostSuperComplexButton').style.borderRadius = "0px"
      document.getElementById('ghostSuperComplexButton').style.background = "none"
      document.getElementById('ghostSuperComplexButton').style.color = "#475467"
      document.getElementById('ghostSuperComplexButton').style.border = "0px"
      document.getElementById('ghostSuperComplexButton').style.boxShadow = "0px"
})


// Ghost Mannequine Flat Button
const ghostFlatButton = document.getElementById('ghostFlatButton')
ghostFlatButton.addEventListener('click', () =>{
  document.getElementById('GhostImage').style.display = "none"
  document.getElementById('ghostFlatImage').style.display = "block"
  document.getElementById('ghostMediumImage').style.display = "none"
  document.getElementById('ghostComplexImage').style.display = 'none'
  document.getElementById('ghostSuperComplexImage').style.display = "none"

  // Changing Button color
  document.getElementById('ghostFlatButton').style.background = "#155EEF"
  document.getElementById('ghostFlatButton').style.padding = "10px 14px"
  document.getElementById('ghostFlatButton').style.borderRadius = "8px"
  document.getElementById('ghostFlatButton').style.color = "#ffffff"

  
  document.getElementById('ghostMediumButton').style.padding = "0"
  document.getElementById('ghostMediumButton').style.borderRadius = "0px"
  document.getElementById('ghostMediumButton').style.background = "none"
  document.getElementById('ghostMediumButton').style.color = "#475467"
  document.getElementById('ghostMediumButton').style.border = "0px"
  document.getElementById('ghostMediumButton').style.boxShadow = "0px"

  document.getElementById('ghostBasicButton').style.padding = "0"
  document.getElementById('ghostBasicButton').style.borderRadius = "0px"
  document.getElementById('ghostBasicButton').style.background = "none"
  document.getElementById('ghostBasicButton').style.color = "#475467"
  document.getElementById('ghostBasicButton').style.border = "0px"
  document.getElementById('ghostBasicButton').style.boxShadow = "0px"

  document.getElementById('ghostComplexButton').style.padding = "0"
  document.getElementById('ghostComplexButton').style.borderRadius = "0px"
  document.getElementById('ghostComplexButton').style.background = "none"
  document.getElementById('ghostComplexButton').style.color = "#475467"
  document.getElementById('ghostComplexButton').style.border = "0px"
  document.getElementById('ghostComplexButton').style.boxShadow = "0px"

  document.getElementById('ghostSuperComplexButton').style.borderRadius = "0px"
  document.getElementById('ghostSuperComplexButton').style.background = "none"
  document.getElementById('ghostSuperComplexButton').style.color = "#475467"
  document.getElementById('ghostSuperComplexButton').style.border = "0px"
  document.getElementById('ghostSuperComplexButton').style.boxShadow = "0px"
})


// Ghost Mannequine Medium Button
const ghostMediumButton = document.getElementById('ghostMediumButton')
ghostMediumButton.addEventListener('click',() => {
  document.getElementById('GhostImage').style.display = "none"
  document.getElementById('ghostFlatImage').style.display = "none"
  document.getElementById('ghostMediumImage').style.display = "block"
  document.getElementById('ghostComplexImage').style.display = 'none'
  document.getElementById('ghostSuperComplexImage').style.display = "none"

  // Changing Button color
  document.getElementById('ghostMediumButton').style.background = "#155EEF"
  document.getElementById('ghostMediumButton').style.padding = "10px 14px"
  document.getElementById('ghostMediumButton').style.borderRadius = "8px"
  document.getElementById('ghostMediumButton').style.color = "#ffffff"

      // Deactiving Current Button
      document.getElementById('ghostFlatButton').style.padding = "0"
      document.getElementById('ghostFlatButton').style.borderRadius = "0px"
      document.getElementById('ghostFlatButton').style.background = "none"
      document.getElementById('ghostFlatButton').style.color = "#475467"
      document.getElementById('ghostFlatButton').style.border = "0px"
      document.getElementById('ghostFlatButton').style.boxShadow = "0px"

      document.getElementById('ghostBasicButton').style.padding = "0"
      document.getElementById('ghostBasicButton').style.borderRadius = "0px"
      document.getElementById('ghostBasicButton').style.background = "none"
      document.getElementById('ghostBasicButton').style.color = "#475467"
      document.getElementById('ghostBasicButton').style.border = "0px"
      document.getElementById('ghostBasicButton').style.boxShadow = "0px"

      document.getElementById('ghostComplexButton').style.padding = "0"
      document.getElementById('ghostComplexButton').style.borderRadius = "0px"
      document.getElementById('ghostComplexButton').style.background = "none"
      document.getElementById('ghostComplexButton').style.color = "#475467"
      document.getElementById('ghostComplexButton').style.border = "0px"
      document.getElementById('ghostComplexButton').style.boxShadow = "0px"

      document.getElementById('ghostSuperComplexButton').style.borderRadius = "0px"
      document.getElementById('ghostSuperComplexButton').style.background = "none"
      document.getElementById('ghostSuperComplexButton').style.color = "#475467"
      document.getElementById('ghostSuperComplexButton').style.border = "0px"
      document.getElementById('ghostSuperComplexButton').style.boxShadow = "0px"

})

// Ghost Mannequine Complex Button

document.getElementById('ghostComplexImage').style.display = 'none'

const ghostComplexButton = document.getElementById('ghostComplexButton')
ghostComplexButton.addEventListener('click', ()=> {
  document.getElementById('ghostComplexImage').style.display = 'block'
  document.getElementById('GhostImage').style.display = "none"
  document.getElementById('ghostFlatImage').style.display = "none"
  document.getElementById('ghostMediumImage').style.display = "none"
  document.getElementById('ghostSuperComplexImage').style.display = "none"

  document.getElementById('maskingComplexOne').style.display = "none"

    // Changing Button color
    document.getElementById('ghostComplexButton').style.background = "#155EEF"
  //  document.getElementById('ghostComplexButton').style.padding = "10px 14px"
   document.getElementById('ghostComplexButton').style.borderRadius = "8px"
   document.getElementById('ghostComplexButton').style.color = "#ffffff"

      document.getElementById('ghostFlatButton').style.padding = "0"
      document.getElementById('ghostFlatButton').style.borderRadius = "0px"
      document.getElementById('ghostFlatButton').style.background = "none"
      document.getElementById('ghostFlatButton').style.color = "#475467"
      document.getElementById('ghostFlatButton').style.border = "0px"
      document.getElementById('ghostFlatButton').style.boxShadow = "0px"

      document.getElementById('ghostBasicButton').style.padding = "0"
      document.getElementById('ghostBasicButton').style.borderRadius = "0px"
      document.getElementById('ghostBasicButton').style.background = "none"
      document.getElementById('ghostBasicButton').style.color = "#475467"
      document.getElementById('ghostBasicButton').style.border = "0px"
      document.getElementById('ghostBasicButton').style.boxShadow = "0px"

      document.getElementById('ghostMediumButton').style.padding = "0"
      document.getElementById('ghostMediumButton').style.borderRadius = "0px"
      document.getElementById('ghostMediumButton').style.background = "none"
      document.getElementById('ghostMediumButton').style.color = "#475467"
      document.getElementById('ghostMediumButton').style.border = "0px"
      document.getElementById('ghostMediumButton').style.boxShadow = "0px"
      document.getElementById('ghostComplexButton').style.padding = "0"

   document.getElementById('ghostSuperComplexButton').style.borderRadius = "0px"
   document.getElementById('ghostSuperComplexButton').style.background = "none"
   document.getElementById('ghostSuperComplexButton').style.color = "#475467"
   document.getElementById('ghostSuperComplexButton').style.border = "0px"
   document.getElementById('ghostSuperComplexButton').style.boxShadow = "0px"
})

// Ghost Super Complex Button
document.getElementById('ghostSuperComplexImage').style.display = "none"

const ghostSuperComplexButton = document.getElementById('ghostSuperComplexButton')
ghostSuperComplexButton.addEventListener('click', ()=> {
  document.getElementById('ghostSuperComplexImage').style.display = "block"
  document.getElementById('ghostComplexImage').style.display = 'none'
  document.getElementById('GhostImage').style.display = "none"
  document.getElementById('ghostFlatImage').style.display = "none"
  document.getElementById('ghostMediumImage').style.display = "none"

  document.getElementById('maskingComplexOne').style.display = "none"

   // Changing Button color
   document.getElementById('ghostSuperComplexButton').style.background = "#155EEF"
   document.getElementById('ghostSuperComplexButton').style.padding = "10px 14px"
   document.getElementById('ghostSuperComplexButton').style.borderRadius = "8px"
   document.getElementById('ghostSuperComplexButton').style.color = "#ffffff"


   document.getElementById('ghostFlatButton').style.padding = "0"
   document.getElementById('ghostFlatButton').style.borderRadius = "0px"
   document.getElementById('ghostFlatButton').style.background = "none"
   document.getElementById('ghostFlatButton').style.color = "#475467"
   document.getElementById('ghostFlatButton').style.border = "0px"
   document.getElementById('ghostFlatButton').style.boxShadow = "0px"

   document.getElementById('ghostBasicButton').style.padding = "0"
   document.getElementById('ghostBasicButton').style.borderRadius = "0px"
   document.getElementById('ghostBasicButton').style.background = "none"
   document.getElementById('ghostBasicButton').style.color = "#475467"
   document.getElementById('ghostBasicButton').style.border = "0px"
   document.getElementById('ghostBasicButton').style.boxShadow = "0px"

   document.getElementById('ghostMediumButton').style.padding = "0"
   document.getElementById('ghostMediumButton').style.borderRadius = "0px"
   document.getElementById('ghostMediumButton').style.background = "none"
   document.getElementById('ghostMediumButton').style.color = "#475467"
   document.getElementById('ghostMediumButton').style.border = "0px"
   document.getElementById('ghostMediumButton').style.boxShadow = "0px"

   document.getElementById('ghostComplexButton').style.padding = "0"
   document.getElementById('ghostComplexButton').style.borderRadius = "0px"
   document.getElementById('ghostComplexButton').style.background = "none"
   document.getElementById('ghostComplexButton').style.color = "#475467"
   document.getElementById('ghostComplexButton').style.border = "0px"
   document.getElementById('ghostComplexButton').style.boxShadow = "0px"

})

// MultiClipping Path Image Service
document.getElementById('multiClippingFlat').style.display = "none"
document.getElementById('multiClippingMedium').style.display = "none"
document.getElementById('multiClippingComplex').style.display = "none"


// Basic MultiClipping Path
const multiClippingBasic = document.getElementById('multiClippingBasicImage')
multiClippingBasic.addEventListener('click',()=> {
  document.getElementById('multiClippingFlat').style.display = "none"
  document.getElementById('multiImage').style.display = "block"
  document.getElementById('multiClippingMedium').style.display = "none"
  document.getElementById('multiClippingComplex').style.display = "none"
  document.getElementById('multiClippingSuperComplex').style.display = "none"

  document.getElementById('maskingComplexOne').style.display = "none"

   // Changing Button color
   document.getElementById('multiClippingBasicImage').style.background = "#155EEF"
   document.getElementById('multiClippingBasicImage').style.padding = "10px 14px"
   document.getElementById('multiClippingBasicImage').style.borderRadius = "8px"
   document.getElementById('multiClippingBasicImage').style.color = "#ffffff"

  
   document.getElementById('multiClippingFlatImage').style.padding = "0"
   document.getElementById('multiClippingFlatImage').style.borderRadius = "0px"
   document.getElementById('multiClippingFlatImage').style.background = "none"
   document.getElementById('multiClippingFlatImage').style.color = "#475467"
   document.getElementById('multiClippingFlatImage').style.border = "0px"
   document.getElementById('multiClippingFlatImage').style.boxShadow = "0px"

   document.getElementById('multiClippingMediumImage').style.padding = "0"
   document.getElementById('multiClippingMediumImage').style.borderRadius = "0px"
   document.getElementById('multiClippingMediumImage').style.background = "none"
   document.getElementById('multiClippingMediumImage').style.color = "#475467"
   document.getElementById('multiClippingMediumImage').style.border = "0px"
   document.getElementById('multiClippingMediumImage').style.boxShadow = "0px"

   document.getElementById('multiClippingComplexImage').style.padding = "0"
   document.getElementById('multiClippingComplexImage').style.borderRadius = "0px"
   document.getElementById('multiClippingComplexImage').style.background = "none"
   document.getElementById('multiClippingComplexImage').style.color = "#475467"
   document.getElementById('multiClippingComplexImage').style.border = "0px"
   document.getElementById('multiClippingComplexImage').style.boxShadow = "0px"

   document.getElementById('multiClippingSuperComplexImage').style.padding = "0"
 document.getElementById('multiClippingSuperComplexImage').style.borderRadius = "0px"
 document.getElementById('multiClippingSuperComplexImage').style.background = "none"
 document.getElementById('multiClippingSuperComplexImage').style.color = "#475467"
 document.getElementById('multiClippingSuperComplexImage').style.border = "0px"
 document.getElementById('multiClippingSuperComplexImage').style.boxShadow = "0px"

})


// Flat MultiClipping Path
const multiClippingFlat = document.getElementById('multiClippingFlatImage')
multiClippingFlat.addEventListener('click', ()=> {
  document.getElementById('multiClippingFlat').style.display = "block"
  document.getElementById('multiImage').style.display = "none"
  document.getElementById('multiClippingMedium').style.display = "none"
  document.getElementById('multiClippingComplex').style.display = "none"
  document.getElementById('multiClippingSuperComplex').style.display = "none"

  document.getElementById('maskingComplexOne').style.display = "none"

   // Changing Button color
   document.getElementById('multiClippingFlatImage').style.background = "#155EEF"
   document.getElementById('multiClippingFlatImage').style.padding = "10px 14px"
   document.getElementById('multiClippingFlatImage').style.borderRadius = "8px"
   document.getElementById('multiClippingFlatImage').style.color = "#ffffff"

   document.getElementById('multiClippingBasicImage').style.padding = "0"
   document.getElementById('multiClippingBasicImage').style.borderRadius = "0px"
   document.getElementById('multiClippingBasicImage').style.background = "none"
   document.getElementById('multiClippingBasicImage').style.color = "#475467"
   document.getElementById('multiClippingBasicImage').style.border = "0px"
   document.getElementById('multiClippingBasicImage').style.boxShadow = "0px"

   document.getElementById('multiClippingMediumImage').style.padding = "0"
   document.getElementById('multiClippingMediumImage').style.borderRadius = "0px"
   document.getElementById('multiClippingMediumImage').style.background = "none"
   document.getElementById('multiClippingMediumImage').style.color = "#475467"
   document.getElementById('multiClippingMediumImage').style.border = "0px"
   document.getElementById('multiClippingMediumImage').style.boxShadow = "0px"

   document.getElementById('multiClippingComplexImage').style.padding = "0"
   document.getElementById('multiClippingComplexImage').style.borderRadius = "0px"
   document.getElementById('multiClippingComplexImage').style.background = "none"
   document.getElementById('multiClippingComplexImage').style.color = "#475467"
   document.getElementById('multiClippingComplexImage').style.border = "0px"
   document.getElementById('multiClippingComplexImage').style.boxShadow = "0px"

   document.getElementById('multiClippingSuperComplexImage').style.padding = "0"
 document.getElementById('multiClippingSuperComplexImage').style.borderRadius = "0px"
 document.getElementById('multiClippingSuperComplexImage').style.background = "none"
 document.getElementById('multiClippingSuperComplexImage').style.color = "#475467"
 document.getElementById('multiClippingSuperComplexImage').style.border = "0px"
 document.getElementById('multiClippingSuperComplexImage').style.boxShadow = "0px"
})

// Medium MultiClipping Path
const mediummultiClippingPath = document.getElementById('multiClippingMediumImage')
mediummultiClippingPath.addEventListener('click', () =>{
  document.getElementById('multiClippingFlat').style.display = "none"
  document.getElementById('multiClippingMedium').style.display = "block"
  document.getElementById('multiImage').style.display = "none"
  document.getElementById('multiClippingComplex').style.display = "none"
  document.getElementById('multiClippingSuperComplex').style.display = "none"

  document.getElementById('maskingComplexOne').style.display = "none"

   // Changing Button color
   document.getElementById('multiClippingMediumImage').style.background = "#155EEF"
   document.getElementById('multiClippingMediumImage').style.padding = "10px 14px"
   document.getElementById('multiClippingMediumImage').style.borderRadius = "8px"
   document.getElementById('multiClippingMediumImage').style.color = "#ffffff"

  
   document.getElementById('multiClippingBasicImage').style.padding = "0"
   document.getElementById('multiClippingBasicImage').style.borderRadius = "0px"
   document.getElementById('multiClippingBasicImage').style.background = "none"
   document.getElementById('multiClippingBasicImage').style.color = "#475467"
   document.getElementById('multiClippingBasicImage').style.border = "0px"
   document.getElementById('multiClippingBasicImage').style.boxShadow = "0px"

   document.getElementById('multiClippingFlatImage').style.padding = "0"
   document.getElementById('multiClippingFlatImage').style.borderRadius = "0px"
   document.getElementById('multiClippingFlatImage').style.background = "none"
   document.getElementById('multiClippingFlatImage').style.color = "#475467"
   document.getElementById('multiClippingFlatImage').style.border = "0px"
   document.getElementById('multiClippingFlatImage').style.boxShadow = "0px"

   document.getElementById('multiClippingComplexImage').style.padding = "0"
   document.getElementById('multiClippingComplexImage').style.borderRadius = "0px"
   document.getElementById('multiClippingComplexImage').style.background = "none"
   document.getElementById('multiClippingComplexImage').style.color = "#475467"
   document.getElementById('multiClippingComplexImage').style.border = "0px"
   document.getElementById('multiClippingComplexImage').style.boxShadow = "0px"

   document.getElementById('multiClippingSuperComplexImage').style.padding = "0"
 document.getElementById('multiClippingSuperComplexImage').style.borderRadius = "0px"
 document.getElementById('multiClippingSuperComplexImage').style.background = "none"
 document.getElementById('multiClippingSuperComplexImage').style.color = "#475467"
 document.getElementById('multiClippingSuperComplexImage').style.border = "0px"
 document.getElementById('multiClippingSuperComplexImage').style.boxShadow = "0px"

})

// MultiClipping Complex Image
const multiClippingComplexImage = document.getElementById('multiClippingComplexImage')
multiClippingComplexImage.addEventListener('click', () =>{
  document.getElementById('multiClippingFlat').style.display = "none"
document.getElementById('multiClippingMedium').style.display = "none"
document.getElementById('multiClippingComplex').style.display = "block"
document.getElementById('multiImage').style.display = "none"
document.getElementById('multiClippingSuperComplex').style.display = "none"

document.getElementById('maskingComplexOne').style.display = "none"

 // Changing Button color
 document.getElementById('multiClippingComplexImage').style.background = "#155EEF"
 document.getElementById('multiClippingComplexImage').style.padding = "10px 14px"
 document.getElementById('multiClippingComplexImage').style.borderRadius = "8px"
 document.getElementById('multiClippingComplexImage').style.color = "#ffffff"

 document.getElementById('multiClippingBasicImage').style.padding = "0"
 document.getElementById('multiClippingBasicImage').style.borderRadius = "0px"
 document.getElementById('multiClippingBasicImage').style.background = "none"
 document.getElementById('multiClippingBasicImage').style.color = "#475467"
 document.getElementById('multiClippingBasicImage').style.border = "0px"
 document.getElementById('multiClippingBasicImage').style.boxShadow = "0px"

 document.getElementById('multiClippingFlatImage').style.padding = "0"
 document.getElementById('multiClippingFlatImage').style.borderRadius = "0px"
 document.getElementById('multiClippingFlatImage').style.background = "none"
 document.getElementById('multiClippingFlatImage').style.color = "#475467"
 document.getElementById('multiClippingFlatImage').style.border = "0px"
 document.getElementById('multiClippingFlatImage').style.boxShadow = "0px"

 document.getElementById('multiClippingMediumImage').style.padding = "0"
 document.getElementById('multiClippingMediumImage').style.borderRadius = "0px"
 document.getElementById('multiClippingMediumImage').style.background = "none"
 document.getElementById('multiClippingMediumImage').style.color = "#475467"
 document.getElementById('multiClippingMediumImage').style.border = "0px"
 document.getElementById('multiClippingMediumImage').style.boxShadow = "0px"

 document.getElementById('multiClippingSuperComplexImage').style.padding = "0"
 document.getElementById('multiClippingSuperComplexImage').style.borderRadius = "0px"
 document.getElementById('multiClippingSuperComplexImage').style.background = "none"
 document.getElementById('multiClippingSuperComplexImage').style.color = "#475467"
 document.getElementById('multiClippingSuperComplexImage').style.border = "0px"
 document.getElementById('multiClippingSuperComplexImage').style.boxShadow = "0px"

})

// MultiClipping Super Complex Image
document.getElementById('multiClippingSuperComplex').style.display = "none"

const multiClippingSuperComplex = document.getElementById('multiClippingSuperComplexImage')
multiClippingSuperComplex.addEventListener('click', () =>{
  document.getElementById('multiClippingSuperComplex').style.display = "block"
  document.getElementById('multiClippingFlat').style.display = "none"
document.getElementById('multiClippingMedium').style.display = "none"
document.getElementById('multiClippingComplex').style.display = "none"
document.getElementById('multiImage').style.display = "none"
document.getElementById('imagemaskingComplexFour').style.display = 'none'


document.getElementById('maskingComplexOne').style.display = "none"

// Changing Button Color
document.getElementById('multiClippingSuperComplexImage').style.background = "#155EEF"
 document.getElementById('multiClippingSuperComplexImage').style.padding = "10px 14px"
 document.getElementById('multiClippingSuperComplexImage').style.borderRadius = "8px"
 document.getElementById('multiClippingSuperComplexImage').style.color = "#ffffff"

 document.getElementById('multiClippingBasicImage').style.padding = "0"
 document.getElementById('multiClippingBasicImage').style.borderRadius = "0px"
 document.getElementById('multiClippingBasicImage').style.background = "none"
 document.getElementById('multiClippingBasicImage').style.color = "#475467"
 document.getElementById('multiClippingBasicImage').style.border = "0px"
 document.getElementById('multiClippingBasicImage').style.boxShadow = "0px"

 document.getElementById('multiClippingFlatImage').style.padding = "0"
 document.getElementById('multiClippingFlatImage').style.borderRadius = "0px"
 document.getElementById('multiClippingFlatImage').style.background = "none"
 document.getElementById('multiClippingFlatImage').style.color = "#475467"
 document.getElementById('multiClippingFlatImage').style.border = "0px"
 document.getElementById('multiClippingFlatImage').style.boxShadow = "0px"

 document.getElementById('multiClippingMediumImage').style.padding = "0"
 document.getElementById('multiClippingMediumImage').style.borderRadius = "0px"
 document.getElementById('multiClippingMediumImage').style.background = "none"
 document.getElementById('multiClippingMediumImage').style.color = "#475467"
 document.getElementById('multiClippingMediumImage').style.border = "0px"
 document.getElementById('multiClippingMediumImage').style.boxShadow = "0px"


 document.getElementById('multiClippingComplexImage').style.padding = "0"
 document.getElementById('multiClippingComplexImage').style.borderRadius = "0px"
 document.getElementById('multiClippingComplexImage').style.background = "none"
 document.getElementById('multiClippingComplexImage').style.color = "#475467"
 document.getElementById('multiClippingComplexImage').style.border = "0px"
 document.getElementById('multiClippingComplexImage').style.boxShadow = "0px"
})

// Image Masking Complex One
document.getElementById('maskingComplexOne').style.display = "none"

const imageMaskingComplexityOne = document.getElementById('maskingComplexOneButton')
imageMaskingComplexityOne.addEventListener('click', () =>{
  document.getElementById('maskingComplexOne').style.display = "none"
  document.getElementById('maskingImage').style.display ='block'
  document.getElementById('maskingComplexTwo').style.display = "none"
  document.getElementById('imagemaskingComplexThree').style.display = "none"
  document.getElementById('imagemaskingComplexFour').style.display = 'none'

  // Changing Button Color
document.getElementById('maskingComplexOneButton').style.background = "#155EEF"
document.getElementById('maskingComplexOneButton').style.padding = "10px 14px"
document.getElementById('maskingComplexOneButton').style.borderRadius = "8px"
document.getElementById('maskingComplexOneButton').style.color = "#ffffff"

// Deactivation Other Active Button
document.getElementById('maskingComplexTwoButton').style.padding = "0"
document.getElementById('maskingComplexTwoButton').style.borderRadius = "0px"
document.getElementById('maskingComplexTwoButton').style.background = "none"
document.getElementById('maskingComplexTwoButton').style.color = "#475467"
document.getElementById('maskingComplexTwoButton').style.border = "0px"
document.getElementById('maskingComplexTwoButton').style.boxShadow = "0px"

document.getElementById('maskingComplexThreeButton').style.padding = "0"
document.getElementById('maskingComplexThreeButton').style.borderRadius = "0px"
document.getElementById('maskingComplexThreeButton').style.background = "none"
document.getElementById('maskingComplexThreeButton').style.color = "#475467"
document.getElementById('maskingComplexThreeButton').style.border = "0px"
document.getElementById('maskingComplexThreeButton').style.boxShadow = "0px"

document.getElementById('maskingComplexFourButton').style.padding = "0"
document.getElementById('maskingComplexFourButton').style.borderRadius = "0px"
document.getElementById('maskingComplexFourButton').style.background = "none"
document.getElementById('maskingComplexFourButton').style.color = "#475467"
document.getElementById('maskingComplexFourButton').style.border = "0px"
document.getElementById('maskingComplexFourButton').style.boxShadow = "0px"

document.getElementById('maskingComplexFiveButton').style.padding = "0"
document.getElementById('maskingComplexFiveButton').style.borderRadius = "0px"
document.getElementById('maskingComplexFiveButton').style.background = "none"
document.getElementById('maskingComplexFiveButton').style.color = "#475467"
document.getElementById('maskingComplexFiveButton').style.border = "0px"
document.getElementById('maskingComplexFiveButton').style.boxShadow = "0px"

})

const imageMaskingComplexityTwo = document.getElementById('maskingComplexTwoButton')
imageMaskingComplexityTwo.addEventListener('click', () =>{
  document.getElementById('maskingComplexOne').style.display = "block"
  document.getElementById('maskingImage').style.display ='none'
  document.getElementById('maskingComplexTwo').style.display = "none"
  document.getElementById('imagemaskingComplexThree').style.display = "none"
  document.getElementById('imagemaskingComplexFour').style.display = 'none'

  document.getElementById('GhostImage').style.display = 'none'
  document.getElementById('ghostFlatImage').style.direction = 'none'
  document.getElementById('ghostMediumImage').style.display = 'none'
  document.getElementById('ghostComplexImage').style.display = 'none'
  document.getElementById('ghostSuperComplexImage').style.display = 'none'
  

  

  document.getElementById('maskingComplexTwoButton').style.background = "#155EEF"
document.getElementById('maskingComplexTwoButton').style.padding = "10px 14px"
document.getElementById('maskingComplexTwoButton').style.borderRadius = "8px"
document.getElementById('maskingComplexTwoButton').style.color = "#ffffff"

// Deactivation Other Active Button
document.getElementById('maskingComplexOneButton').style.padding = "0"
document.getElementById('maskingComplexOneButton').style.borderRadius = "0px"
document.getElementById('maskingComplexOneButton').style.background = "none"
document.getElementById('maskingComplexOneButton').style.color = "#475467"
document.getElementById('maskingComplexOneButton').style.border = "0px"
document.getElementById('maskingComplexOneButton').style.boxShadow = "0px"

document.getElementById('maskingComplexThreeButton').style.padding = "0"
document.getElementById('maskingComplexThreeButton').style.borderRadius = "0px"
document.getElementById('maskingComplexThreeButton').style.background = "none"
document.getElementById('maskingComplexThreeButton').style.color = "#475467"
document.getElementById('maskingComplexThreeButton').style.border = "0px"
document.getElementById('maskingComplexThreeButton').style.boxShadow = "0px"

document.getElementById('maskingComplexFourButton').style.padding = "0"
document.getElementById('maskingComplexFourButton').style.borderRadius = "0px"
document.getElementById('maskingComplexFourButton').style.background = "none"
document.getElementById('maskingComplexFourButton').style.color = "#475467"
document.getElementById('maskingComplexFourButton').style.border = "0px"
document.getElementById('maskingComplexFourButton').style.boxShadow = "0px"

document.getElementById('maskingComplexFiveButton').style.padding = "0"
document.getElementById('maskingComplexFiveButton').style.borderRadius = "0px"
document.getElementById('maskingComplexFiveButton').style.background = "none"
document.getElementById('maskingComplexFiveButton').style.color = "#475467"
document.getElementById('maskingComplexFiveButton').style.border = "0px"
document.getElementById('maskingComplexFiveButton').style.boxShadow = "0px"
  
})

// Image Complex Three of Image Masking
document.getElementById('maskingComplexTwo').style.display = "none"

const imageMaskingComplexThree = document.getElementById('maskingComplexThreeButton')
imageMaskingComplexThree.addEventListener('click', () =>{
  document.getElementById('maskingComplexTwo').style.display = "block"
  document.getElementById('maskingComplexOne').style.display = "none"
  document.getElementById('maskingImage').style.display ='none'
  document.getElementById('imagemaskingComplexThree').style.display = "none"
  document.getElementById('imagemaskingComplexFour').style.display = 'none'

  // Changing Color Button
  document.getElementById('maskingComplexThreeButton').style.background = "#155EEF"
document.getElementById('maskingComplexThreeButton').style.padding = "10px 14px"
document.getElementById('maskingComplexThreeButton').style.borderRadius = "8px"
document.getElementById('maskingComplexThreeButton').style.color = "#ffffff"

// Deactivation Other Active Button
document.getElementById('maskingComplexOneButton').style.padding = "0"
document.getElementById('maskingComplexOneButton').style.borderRadius = "0px"
document.getElementById('maskingComplexOneButton').style.background = "none"
document.getElementById('maskingComplexOneButton').style.color = "#475467"
document.getElementById('maskingComplexOneButton').style.border = "0px"
document.getElementById('maskingComplexOneButton').style.boxShadow = "0px"

document.getElementById('maskingComplexTwoButton').style.padding = "0"
document.getElementById('maskingComplexTwoButton').style.borderRadius = "0px"
document.getElementById('maskingComplexTwoButton').style.background = "none"
document.getElementById('maskingComplexTwoButton').style.color = "#475467"
document.getElementById('maskingComplexTwoButton').style.border = "0px"
document.getElementById('maskingComplexTwoButton').style.boxShadow = "0px"

document.getElementById('maskingComplexFourButton').style.padding = "0"
document.getElementById('maskingComplexFourButton').style.borderRadius = "0px"
document.getElementById('maskingComplexFourButton').style.background = "none"
document.getElementById('maskingComplexFourButton').style.color = "#475467"
document.getElementById('maskingComplexFourButton').style.border = "0px"
document.getElementById('maskingComplexFourButton').style.boxShadow = "0px"

document.getElementById('maskingComplexFiveButton').style.padding = "0"
document.getElementById('maskingComplexFiveButton').style.borderRadius = "0px"
document.getElementById('maskingComplexFiveButton').style.background = "none"
document.getElementById('maskingComplexFiveButton').style.color = "#475467"
document.getElementById('maskingComplexFiveButton').style.border = "0px"
document.getElementById('maskingComplexFiveButton').style.boxShadow = "0px"
})

// Image Complex Four of Image Masking
document.getElementById('imagemaskingComplexThree').style.display = "none"

const imageMaskingComplexFour = document.getElementById('maskingComplexFourButton')
imageMaskingComplexFour.addEventListener('click', () =>{
  document.getElementById('imagemaskingComplexThree').style.display = "block"
  document.getElementById('maskingComplexTwo').style.display = "none"
  document.getElementById('maskingComplexOne').style.display = "none"
  document.getElementById('maskingImage').style.display ='none'
  document.getElementById('imagemaskingComplexFour').style.display = 'none'

  // Changing Button Color
  document.getElementById('maskingComplexFourButton').style.background = "#155EEF"
  document.getElementById('maskingComplexFourButton').style.padding = "10px 14px"
  document.getElementById('maskingComplexFourButton').style.borderRadius = "8px"
  document.getElementById('maskingComplexFourButton').style.color = "#ffffff"

  // Deactivation Other Active Button
document.getElementById('maskingComplexOneButton').style.padding = "0"
document.getElementById('maskingComplexOneButton').style.borderRadius = "0px"
document.getElementById('maskingComplexOneButton').style.background = "none"
document.getElementById('maskingComplexOneButton').style.color = "#475467"
document.getElementById('maskingComplexOneButton').style.border = "0px"
document.getElementById('maskingComplexOneButton').style.boxShadow = "0px"

document.getElementById('maskingComplexTwoButton').style.padding = "0"
document.getElementById('maskingComplexTwoButton').style.borderRadius = "0px"
document.getElementById('maskingComplexTwoButton').style.background = "none"
document.getElementById('maskingComplexTwoButton').style.color = "#475467"
document.getElementById('maskingComplexTwoButton').style.border = "0px"
document.getElementById('maskingComplexTwoButton').style.boxShadow = "0px"

document.getElementById('maskingComplexThreeButton').style.padding = "0"
document.getElementById('maskingComplexThreeButton').style.borderRadius = "0px"
document.getElementById('maskingComplexThreeButton').style.background = "none"
document.getElementById('maskingComplexThreeButton').style.color = "#475467"
document.getElementById('maskingComplexThreeButton').style.border = "0px"
document.getElementById('maskingComplexThreeButton').style.boxShadow = "0px"

document.getElementById('maskingComplexFiveButton').style.padding = "0"
document.getElementById('maskingComplexFiveButton').style.borderRadius = "0px"
document.getElementById('maskingComplexFiveButton').style.background = "none"
document.getElementById('maskingComplexFiveButton').style.color = "#475467"
document.getElementById('maskingComplexFiveButton').style.border = "0px"
document.getElementById('maskingComplexFiveButton').style.boxShadow = "0px"

})

// Image Masking Complexity Five
document.getElementById('imagemaskingComplexFour').style.display = 'none' 

const imageMaskingComplexityFive = document.getElementById('maskingComplexFiveButton')
imageMaskingComplexityFive.addEventListener('click', function(){
  document.getElementById('imagemaskingComplexFour').style.display = 'block'
  document.getElementById('imagemaskingComplexThree').style.display = "none"
  document.getElementById('maskingComplexTwo').style.display = "none"
  document.getElementById('maskingComplexOne').style.display = "none"
  document.getElementById('maskingImage').style.display ='none' 

  // Changing Button color
  document.getElementById('maskingComplexFiveButton').style.background = "#155EEF"
  document.getElementById('maskingComplexFiveButton').style.padding = "10px 14px"
  document.getElementById('maskingComplexFiveButton').style.borderRadius = "8px"
  document.getElementById('maskingComplexFiveButton').style.color = "#ffffff"

  // Deactiving Active Button Color
  document.getElementById('maskingComplexOneButton').style.padding = "0"
document.getElementById('maskingComplexOneButton').style.borderRadius = "0px"
document.getElementById('maskingComplexOneButton').style.background = "none"
document.getElementById('maskingComplexOneButton').style.color = "#475467"
document.getElementById('maskingComplexOneButton').style.border = "0px"
document.getElementById('maskingComplexOneButton').style.boxShadow = "0px"

document.getElementById('maskingComplexTwoButton').style.padding = "0"
document.getElementById('maskingComplexTwoButton').style.borderRadius = "0px"
document.getElementById('maskingComplexTwoButton').style.background = "none"
document.getElementById('maskingComplexTwoButton').style.color = "#475467"
document.getElementById('maskingComplexTwoButton').style.border = "0px"
document.getElementById('maskingComplexTwoButton').style.boxShadow = "0px"

document.getElementById('maskingComplexThreeButton').style.padding = "0"
document.getElementById('maskingComplexThreeButton').style.borderRadius = "0px"
document.getElementById('maskingComplexThreeButton').style.background = "none"
document.getElementById('maskingComplexThreeButton').style.color = "#475467"
document.getElementById('maskingComplexThreeButton').style.border = "0px"
document.getElementById('maskingComplexThreeButton').style.boxShadow = "0px"

document.getElementById('maskingComplexFourButton').style.padding = "0"
document.getElementById('maskingComplexFourButton').style.borderRadius = "0px"
document.getElementById('maskingComplexFourButton').style.background = "none"
document.getElementById('maskingComplexFourButton').style.color = "#475467"
document.getElementById('maskingComplexFourButton').style.border = "0px"
document.getElementById('maskingComplexFourButton').style.boxShadow = "0px"
})


// Showing Service Name On The Top Of Price Calculator
// Get all the buttons
// Get the necessary elements
const clippingPathButton = document.getElementById('clippingPath');
const retouchingButton = document.getElementById('retouching');
const clippingBasicButton = document.getElementById('clippingBasic');
const clippingFlatRateButton = document.getElementById('clippingFlatRate');
const clippingComplexButton = document.getElementById('clippingComplex');
const clippingMediumButton = document.getElementById('clippingMedium')
const clippingSuperComplexButton = document.getElementById('clippingSuperComplex')




const pricing = document.querySelector('.pricing');
const complexity = document.querySelector('.serviceName span');

// Add event listeners to the buttons
clippingPathButton.addEventListener('click', () => {
  // Update the service name
  document.querySelector('.serviceName').textContent = 'Clipping Path';

  // Update the complexity to default
  complexity.textContent = 'Basic';

  // Update the pricing
  pricing.textContent = '$1.00/img';
});

clippingBasicButton.addEventListener('click', () => {
  // Update the complexity
  complexity.textContent = 'Basic';

  // Update the pricing
  pricing.textContent = '$1.00/img';
});

clippingFlatRateButton.addEventListener('click', () => {
  // Update the complexity
  complexity.textContent = 'Flat Rate';

  // Update the pricing
  pricing.textContent = '$2.50/img'; // Update with the desired price for Flat Rate
});

clippingMediumButton.addEventListener('click', () => {
  // Update the complexity
  complexity.textContent = 'Medium';

  // Update the pricing
  pricing.textContent = '$5.00/img'; // Update with the desired price for Flat Rate
});

clippingComplexButton.addEventListener('click', () => {
  // Update the complexity
  complexity.textContent = 'Complex';

  // Update the pricing
  pricing.textContent = '$10.00/img'; // Update with the desired price for Complex
});

clippingSuperComplexButton.addEventListener('click', () => {
  // Update the complexity
  complexity.textContent = 'Super Complex';

  // Update the pricing
  pricing.textContent = '$16.00/img'; // Update with the desired price for Complex
});


// Photo Retouching
const photoRetouchComplexOne = document.getElementById('retouchComplexOneButton')
const photRetouchComplexTwo = document.getElementById('retouchComplexTwoButton')
const photoRetouchComplexThree = document.getElementById('retouchComplexThreeButton')
const photoRetouchComplexFour = document.getElementById('retouchComplexFourButton')
const photoRetouchComplexFive = document.getElementById('retouchComplexFiveButton')

retouchingButton.addEventListener('click', () => {
  // Update the service name
  document.querySelector('.serviceName').textContent = 'Photo Retouching';

  // Update the complexity to default
  complexity.textContent = 'Complex 1';

  // Update the pricing
  pricing.textContent = '$5.00/img'; // Update with the desired price for Photo Retouching
});


photoRetouchComplexOne.addEventListener('click', () => {
  // Update the service name
  document.querySelector('.serviceName').textContent = 'Photo Retouching';

  // Update the complexity to default
  complexity.textContent = 'Complex 1';

  // Update the pricing
  pricing.textContent = '$5.00/img'; // Update with the desired price for Photo Retouching
});

// Photo retouching
photRetouchComplexTwo.addEventListener('click', () => {
  // Update the complexity
  complexity.textContent = 'Complex 1';

  // Update the pricing
  pricing.textContent = '$5.00/img'; // Update with the desired price for Complex
});


photRetouchComplexTwo.addEventListener('click', () => {
  // Update the complexity
  complexity.textContent = 'Complex 2';

  // Update the pricing
  pricing.textContent = '$7.00/img'; // Update with the desired price for Complex
});

photoRetouchComplexThree.addEventListener('click', () => {
  // Update the complexity
  complexity.textContent = 'Complex 3';

  // Update the pricing
  pricing.textContent = '$8.00/img'; // Update with the desired price for Complex
});

photoRetouchComplexFour.addEventListener('click', () => {
  // Update the complexity
  complexity.textContent = 'Complex 4';

  // Update the pricing
  pricing.textContent = '$10.00/img'; // Update with the desired price for Complex
});

photoRetouchComplexFive.addEventListener('click', () => {
  // Update the complexity
  complexity.textContent = 'Complex 5';

  // Update the pricing
  pricing.textContent = '$12.00/img'; // Update with the desired price for Complex
});


