// EXTERNAL CODE from CodePel: The main function is from CodePel. I added the forEach to get the function to work on all project-cards

//returns a nodelist
const projectCards = document.querySelectorAll('.project-card');

//add eventListener for each projectCard using forEach
projectCards.forEach(function(projectCard){
    projectCard.addEventListener('click', function(){
        projectCard.classList.toggle("is-flipped");
    });
})
