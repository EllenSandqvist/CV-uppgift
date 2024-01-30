/*****************************************************************/
/*---- EXTERNAL CODE from: CodePel -------------------*/
/*****************************************************************/

//The main function is from CodePel. I added the forEach to get the function to work on all project-cards

//returns a nodelist
const projectCards = document.querySelectorAll('.project-card');

//add eventListener for each projectCard using forEach
projectCards.forEach(function(projectCard){
    projectCard.addEventListener('click', function(){
        //toggle is used for adding/removing is-flipped class
        projectCard.classList.toggle("is-flipped");
    });
})

// track click on project cards
// projectCards.forEach(function(projectCard){
//     projectCard.addEventListener('click', function(event){
//         gtag('event', 'projectCard_click', {
//             'event-category': 'view_projectCard',
//             'event_card': event.target.alt
//         });
//     })
// })