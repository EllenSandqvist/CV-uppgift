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
            getWorkExperience();

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


    const utbildningar = cvData.Utbildning;
    console.log(utbildningar);
    
    //forEach loop to get education data
    utbildningar.forEach(function(utbildning){
        //Create element h3 and add text content
        const educationH3 = document.createElement('h3');
        educationH3.textContent = utbildning.rubrik;
        
        //Create p with <em> and add text content
        const educationParagraph = document.createElement('p');
        educationParagraph.textContent = utbildning.skola;
        educationParagraph.style.fontStyle = 'italic';

        //create p for the description 
        const educationDescription = document.createElement('p');
        // educationDescription.textContent = educationRow.beskrivning;
        
        // if statement to check if beskrivning is an array
        if(Array.isArray(utbildning.beskrivning)) {

            const descriptionList = document.createElement('ul');
            console.log(descriptionList);

            //if it is an array use forEach to iterate through the array
            utbildning.beskrivning.forEach(function(item){
                

                //KOLLA UPP OBJECT KEYS SOM ARNAR PRATADE OM!!!
                const descriptionItem = document.createElement('li');
                descriptionItem.textContent = item;
                console.log(descriptionItem); 
            }
            
            )
        } else {
            // If "beskrivning" is not an array, treat it as a single string
            educationDescription.textContent = utbildning.beskrivning;
            
        };
        
        //APPEND-CHILDREN!!!

        console.log(educationH3, educationParagraph, educationDescription);
    })

}

//For loop to go through each education
    // for(let i = 0; i < utbildningar.length; i++){
    //     const utbildning = utbildningar[i];

    //     //Check if description is a string or an array
    //     if(typeof utbildning.beskrivning === 'string'){
    //         console.log("Beskrivning: ", utbildning.beskrivning);

    //     //if description is an array use for loop to iterate through    
    //     } else if (Array.isArray(utbildning.beskrivning)){
    //         for(let j = 0; j < utbildning.beskrivning.length; j++) {
    //             beskrivningObj = utbildning.beskrivning[j];
    //         }

          
    //     }
    // }





//--------------------------------------------------------------
// Add work experience
//--------------------------------------------------------------
async function getWorkExperience(){
    //Variables for needed html elements
    const workSection = document.getElementById('work-section');
    const arbetslivsErfarenhet = cvData.Arbetslivserfarenhet;
    
    arbetslivsErfarenhet.forEach(function(arbete){
        //Create element h3, add text content and append
        const workH3 = document.createElement('h3');
        workH3.textContent = arbete.titel;
        workSection.appendChild(workH3);
        
        //Create p with <em> and add text content
        const workParagraph = document.createElement('p');
        workParagraph.textContent = arbete.företag;
        workParagraph.style.fontStyle = 'italic';
        workSection.appendChild(workParagraph);

        //create p for the description 
        const workDescription = document.createElement('p');
        workDescription.textContent = arbete.arbetsuppgifter;
        workDescription.classList.add('work');
        workSection.appendChild(workDescription);
    })
}



//--------------------------------------------------------------
// Add languages
//--------------------------------------------------------------

//--------------------------------------------------------------
// Add skills
//--------------------------------------------------------------