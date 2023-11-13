//--------------------------------------------------------------
//----------------Code to add JSON------------------------------
//--------------------------------------------------------------

//Variables for needed html elements to be used in more than one function
const languageSection = document.querySelector('.language');
const skillsSection = document.querySelector('.skills');

//Global variabel needed to hold the data from cv.json
let cvData;


//--------------------------------------------------------------
// Main Function - Fetch data from cv.json
//--------------------------------------------------------------

    //Async function to get the data from cv.json
    async function getCvData (){
        let response = await fetch('cv.json');

        //if else to check response and handle error
        if(response.ok){
            
            //convert response to js
            cvData = await response.json();
            console.log(cvData);

            //call other functions
            getHeaders();
            getEducations();

        } else {
            console.log("HTTP-erros: " + response.status);
        }
    }

//Call main function
getCvData();


//--------------------------------------------------------------
// getHeaders function
//--------------------------------------------------------------
async function getHeaders(){

    //Variables for needed html elements
    const educationSection = document.getElementById('education-section');
    const workSection = document.getElementById('work-section');

    //For in loop to go through headers and createElement h2
    for(const property in cvData){

        //for every property in cvData a h2 is created
        const sectionHeading = document.createElement('h2');
        
        //add text to the created h2:s
        sectionHeading.textContent = `${property}`;
        console.log(sectionHeading);

         //Use a switch to add right header to right section
        switch(property) {
        //if property is education add h2 to educationSection
            case 'Utbildning':
                educationSection.appendChild(sectionHeading);
                break;
            case 'Arbetslivserfarenhet':
                workSection.appendChild(sectionHeading);
                break;
            case 'Språk':
                languageSection.appendChild(sectionHeading);
                break;
            case 'Styrkor':
                skillsSection.appendChild(sectionHeading);
                break;
            default:
                console.log("Nu blev nåt fel. Okänd egenskap.");
        }
    }
};
    

//--------------------------------------------------------------
// getEducations function
//--------------------------------------------------------------

//Async function
async function getEducations(){

    //Variables for needed html elements
    const fullstackJavaScript = document.getElementById('fullstack-javascript');
    const foodAndNutrition = document.getElementById('food-and-nutrition');
    const naturalScience = document.getElementById('natural-science');

    //forEach loop to get education data
    cvData.Utbildning.forEach(function(educationRow){
        //Create element h3 and add text content
        const educationH3 = document.createElement('h3');
        educationH3.textContent = educationRow.rubrik;
        
        //Create p with <em> and add text content
        const educationParagraph = document.createElement('p');
        educationParagraph.textContent = educationRow.skola;
        educationParagraph.style.fontStyle = 'italic';

        //create p for the description 
        const educationDescription = document.createElement('p');

        //if statement to check if beskrivning is an array
        if(Array.isArray(educationRow.beskrivning)) {

            //if it is an array use forEach to iterate through the array
            educationRow.beskrivning.forEach(function(item){
                
                //for each array item check if it contains an object
                if(typeof item === 'object'){

                    //if the array contains an object use for in loop
                    for(const property in item){
                        educationDescription.innerHTML += `<br>${property}:<br>${item[property]}`;
                    } 
                }
            })
        } else {
            // If "beskrivning" is not an array, treat it as a single string
            educationDescription.textContent = educationRow.beskrivning;
        };
        
        //APPEND-CHILDREN!!!

        console.log(educationH3, educationParagraph, educationDescription);
    })

}


//--------------------------------------------------------------
// Add work experience
//--------------------------------------------------------------

//--------------------------------------------------------------
// Add languages
//--------------------------------------------------------------

//--------------------------------------------------------------
// Add skills
//--------------------------------------------------------------