//--------------------------------------------------------------
//----------------Code to add JSON------------------------------
//--------------------------------------------------------------

//Variables for needed html elements to be used in more than one function
const languageSection = document.querySelector(".language");
const skillsSection = document.querySelector(".skills");

//Global variabel needed to hold the data from cv.json
let cvData;

//--------------------------------------------------------------
// Main Function - Fetch data from cv.json
//--------------------------------------------------------------

//Async function to get the data from cv.json
async function getCvData() {
  let response = await fetch("../cv.json");

  //if else to check response and handle error
  if (response.ok) {
    //convert response to js
    cvData = await response.json();

    //call other functions
    getHeaders();
    getEducations();
    getWorkExperience();
    getSkills();
    getLanguages();
  } else {
    console.log("HTTP-erros: " + response.status);
  }
}

//******* Call main function *********
getCvData();

//--------------------------------------------------------------
// getHeaders function
//--------------------------------------------------------------
async function getHeaders() {
  //Variables for needed html elements
  const educationSection = document.getElementById("education-section");
  const workSection = document.getElementById("work-section");

  //For in loop to go through headers and createElement h2
  for (const property in cvData) {
    //for every property in cvData a h2 is created
    const sectionHeading = document.createElement("h2");

    //add text to the created h2:s
    sectionHeading.textContent = `${property}`;

    //  //Use object mapping to add right header to right section
    const propertyMapping = {
      Utbildning: educationSection,
      Arbetslivserfarenhet: workSection,
      Språk: languageSection,
      Styrkor: skillsSection,
    };

    propertyMapping[property].appendChild(sectionHeading);
  }
}

//--------------------------------------------------------------
// getEducations function
//--------------------------------------------------------------

//Async function
async function getEducations() {
  //Variables for needed html elements
  const educationSection = document.getElementById("education-section");

  //variable for relevant part of json
  const utbildningar = cvData.Utbildning;

  //forEach loop to get education data
  utbildningar.forEach((utbildning) => {
    //Create element h3 and add text content
    const educationH3 = document.createElement("h3");
    educationH3.textContent = utbildning.rubrik;

    //Create p with <em> and add text content
    const educationParagraph = document.createElement("p");
    educationParagraph.textContent = utbildning.skola;
    educationParagraph.style.fontStyle = "italic";

    //create divs that will contain each education description
    const educationDescriptionDiv = document.createElement("div");
    educationDescriptionDiv.classList.add("education");

    //if statement to check if description is a string or an array
    if (typeof utbildning.beskrivning === "string") {
      const educationDescription = document.createElement("p");
      educationDescription.textContent = utbildning.beskrivning;
      educationDescriptionDiv.appendChild(educationDescription);
    }
    //If description is an array
    else if (Array.isArray(utbildning.beskrivning)) {
      const descriptionList = document.createElement("ul");
      descriptionList.classList.add("education-list");

      utbildning.beskrivning.forEach((subDescription) => {
        Object.keys(subDescription).forEach((property) => {
          const descriptionListH4 = document.createElement("h4");
          descriptionListH4.textContent = property + ": ";
          descriptionListH4.classList.add("cv-h4");
          descriptionList.appendChild(descriptionListH4);

          const descriptionListItem = document.createElement("li");
          descriptionListItem.textContent = subDescription[property];
          descriptionListItem.classList.add("list-style_none");
          descriptionList.appendChild(descriptionListItem);
        });
      });
      educationDescriptionDiv.appendChild(descriptionList);
    }

    //Append the different education parts
    educationSection.appendChild(educationH3);
    educationSection.appendChild(educationParagraph);
    educationSection.appendChild(educationDescriptionDiv);
  });
}

//--------------------------------------------------------------
// Add work experience
//--------------------------------------------------------------
async function getWorkExperience() {
  //Variables for needed html elements
  const workSection = document.getElementById("work-section");

  //choosing relevant part from json and saving it in a variable
  const arbetslivsErfarenhet = cvData.Arbetslivserfarenhet;

  arbetslivsErfarenhet.forEach((arbete) => {
    //Create element h3, add text content and append
    const workH3 = document.createElement("h3");
    workH3.textContent = arbete.titel;
    workSection.appendChild(workH3);

    //Create p with <em> and add text content
    const workParagraph = document.createElement("p");
    workParagraph.textContent = arbete.företag;
    workParagraph.style.fontStyle = "italic";
    workSection.appendChild(workParagraph);

    //create p for the description
    const workDescription = document.createElement("p");
    workDescription.textContent = arbete.arbetsuppgifter;
    workDescription.classList.add("work");
    workSection.appendChild(workDescription);
  });
}

//--------------------------------------------------------------
// Add languages
//--------------------------------------------------------------
async function getLanguages() {
  //Variables for needed html elements
  const languageSection = document.querySelector(".language");

  //choosing relevant part from json and saving it in a variable
  const languages = cvData.Språk;

  //create ul for list of languages
  const languageList = document.createElement("ul");

  languages.forEach((language) => {
    //create a li for every language and add a html-class
    const languageItem = document.createElement("li");
    languageItem.classList.add("list-style_none");

    const skillLevel = language.kunskapsnivå;

    // marks to show skills
    const skillMark = "&bull; ";

    // filled mark
    const filledMarks = skillMark.repeat(skillLevel);

    // empty mark to show missing skills
    const emptyMarks = `<span class="bullet-empty">${skillMark.repeat(
      5 - skillLevel
    )}</span>`;

    // Marks to render
    const totalMarks = filledMarks + emptyMarks;

    // Adding language text and skill markers together in languageItem <li>
    languageItem.innerHTML =
      language.språk + `<span class="language-skills">${totalMarks}</span>`;

    //append li to ul
    languageList.appendChild(languageItem);
  });
  //append ul to language section
  languageSection.appendChild(languageList);
}

//--------------------------------------------------------------
// Add skills
//--------------------------------------------------------------
async function getSkills() {
  //Variables for needed html elements
  const skillsSection = document.querySelector(".skills");

  //choosing relevant part from json and saving it in a variable
  const skills = cvData.Styrkor;

  //create ul for list of skills
  const skillsList = document.createElement("ul");

  skills.forEach((skill) => {
    //create a li for every skill
    const skillItem = document.createElement("li");

    //add skill content and class to each li
    skillItem.textContent = skill;
    skillItem.classList.add("list-style_none");

    //append li to ul
    skillsList.appendChild(skillItem);
  });
  //append ul to skills section
  skillsSection.appendChild(skillsList);
}
