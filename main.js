//Variables outside of function
const sendBtn = document.querySelector(".send-button");

//Add eventlistener to button
sendBtn.addEventListener('click', function(event){
    event.preventDefault();
    //Variables inside of function
    const contactMeForm = document.querySelector('form');
    const contactInfo = document.querySelector('.contact-info');
      
    //Hide form by adding a class of form-invisible
    contactMeForm.classList.add('form-invisible');

    //Output - change the text in contactInfo to thank you- message
    contactInfo.textContent = "Tack för ditt meddelande! 😊";
    contactInfo.style.marginTop = "2em";
    contactInfo.style.fontSize = '1.5rem';
    contactInfo.style.borderBottom = '1px solid orange';
});



