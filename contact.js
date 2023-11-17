//--------------------------------------------------------------
//------------My own JS code- On contact page-------------------
//--------------------------------------------------------------

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

    window.scrollTo(0, 0);

    //Output - change the text in contactInfo to thank you- message
    contactInfo.textContent = "Tack för ditt meddelande! 😊";
    contactInfo.style.marginTop = "2em";
    contactInfo.style.fontSize = '1.5rem';
    contactInfo.style.borderBottom = '1px solid orange';
});


/*****************************************************************/
/*---- EXTERNAL CODE from CodePen AzizBooker: -------------------*/
/*****************************************************************/

//Variables for needed html elements
const contactHeading = document.getElementById('contact-heading');

//function for printing letter by letter
function typingEffect(element, speed){

    //save textcontent of contactHeading to text
    const text = contactHeading.innerHTML;

    //clear contactHeading from textcontent
    contactHeading.innerHTML="";
    
    //index for the letters in text
    let i = 0;

    let timer = setInterval(function(){
        if(i < text.length){
            contactHeading.append(text.charAt(i));
            i++;
        } 
        else {
            clearInterval(timer);

            setTimeout(function() {
                contactHeading.classList.remove('typing');
                contactHeading.style.border = "none";
            }, 3000);
        }
    }, speed);
}

//call function
typingEffect(contactHeading, 190);

