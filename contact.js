/*****************************************************************/
/*---- EXTERNAL CODE from CodePen AzizBooker: -------------------*/
/*****************************************************************/

//Variables for needed html elements
const contactHeading = document.getElementById('contact-heading');

//function for printing letter by letter
function typingEffect(speed){

    //save textcontent of contactHeading to text
    const text = contactHeading.innerHTML;

    //clear contactHeading from textcontent
    contactHeading.innerHTML="";
    
    //index used for the letters in text
    let i = 0;

    //setInterval will run with the speed of "speed" until all letters in text is typed. 
    let timer = setInterval(function(){
        if(i < text.length){
            contactHeading.append(text.charAt(i));
            i++;
        } 
        // When all letters are typed clearInterval will run
        else {
            clearInterval(timer);

            //setTimeout is used so that the cursor animation and visibility continues for 3s after all the whole text is printed.  
            setTimeout(function() {
                contactHeading.classList.remove('typing');
                contactHeading.style.border = "none";
            }, 3000);
        }
    }, speed);
}

//call function
typingEffect(190);

//--------------------------------------------------------------
//------------My own JS code- On contact page-------------------
//--------------------------------------------------------------

//Variables outside of function
const sendBtn = document.querySelector(".send-button");
const modal = document.getElementById('required-modal');
const modalContent = document.querySelector('.modal-content');

//Add eventlistener to button
sendBtn.addEventListener('click', function(event){

    event.preventDefault();

    //Variables inside of function
    const contactMeForm = document.querySelector('form');

    //if statement to check if all required input fields are filled in
    if(contactMeForm.checkValidity()) {
        
        const contactInfo = document.querySelector('.contact-info');
      
        //Hide form by adding a class of form-invisible
        contactMeForm.classList.add('form-invisible');

        window.scrollTo(0, 0);

        //Output - change the text in contactInfo to thank you- message
        contactInfo.textContent = "Tack för ditt meddelande! 😊";
        contactInfo.style.marginTop = "2em";
        contactInfo.style.fontSize = '1.5rem';
        contactInfo.style.borderBottom = '1px solid orange';
    } else {
        modal.classList.remove('modal-hidden');
    }  
});

//Eventlistener on modalContent with close function (closing x will be to small on mobile)
modalContent.addEventListener('click', function(){
    modal.classList.add('modal-hidden');
})
