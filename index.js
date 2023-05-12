const form = document.getElementById('my-form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const name = event.target.name.value
      const email = event.target.email.value
    const phoneNumber = event.target.select.value + event.target.tel.value
    const wantCallElement = event.target.radio.checked
    
    const services = event.target.service.value
    const instruction = event.target.instruction.value
    // const transfer = event.target.transfer.value
    const user = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            call: wantCallElement,
            services: services,
            instruction: instruction
        }
       
  console.log(user)
})




// function submitForm() {
   
//     // 
    
    
//     console.log(user)
// }


// console.log(object)

// function transferBtn(){
// }
// transferBtn()
