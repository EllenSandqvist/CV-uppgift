//--------------------------------------------------------------
//----------------Code to add JSON------------------------------
//--------------------------------------------------------------


//--------------------------------------------------------------
// Add the h2:s
//--------------------------------------------------------------
    //Variables for needed html elements
    const educationSection = document.getElementById('education-section');
    const workSection = document.getElementById('work-section');
    const languageSection = document.querySelector('.language');
    const skillsSection = document.querySelector('.skills');
    
    //Async function
    async function getHeaders(){
        let response = await fetch('cv.json');

        //if else to check response and handle error
        if(response.ok){
            
            //convert response to js
            const cvData = await response.json();
            console.log(cvData);

            //For in loop to go through headers and createElement h2
            for(const property in cvData){

                //for every property in cvData a h2 is created
                const h2Element = document.createElement('h2');
                
                //add text to the created h2:s
                h2Element.textContent = `${property}`;
                console.log(h2Element);

                 //Use a switch to add right header to right section
                switch(property) {
                //if property is education add h2 to educationSection
                    case 'Utbildning':
                        educationSection.appendChild(h2Element);
                        break;
                    case 'Arbetslivserfarenhet':
                        workSection.appendChild(h2Element);
                        break;
                    case 'Språk':
                        languageSection.appendChild(h2Element);
                        break;
                    case 'Styrkor':
                        skillsSection.appendChild(h2Element);
                        break;
                    default:
                        console.log("Nu blev nåt fel. Okänd egenskap.");
                }
            }
        } else {
            console.log("HTTP-erros: " + response.status);
        }
    }

    getHeaders();
    

//--------------------------------------------------------------
// Add the Education part
//--------------------------------------------------------------

//--------------------------------------------------------------
// Add work experience
//--------------------------------------------------------------

//--------------------------------------------------------------
// Add languages
//--------------------------------------------------------------

//--------------------------------------------------------------
// Add skills
//--------------------------------------------------------------