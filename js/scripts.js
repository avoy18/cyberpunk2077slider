
// add an event listener on the bullets
const allBullets = document.querySelectorAll('.cyber-slider__controls li');

for (const bullet of allBullets) {
    bullet.addEventListener('click', function (e) {

        // ** When clicked, set the bullet as active

        //  remove all instances of an active class
        removeAllClasses('current', '.cyber-slider__controls');
        // add it to the current item
        bullet.classList.add('current');

        // ** Switch the slide


        const currentSlide = document.querySelector(`[data-slideid="${bullet.dataset.slide}"]`);

        slideTransition(currentSlide);


        // ** - Start the glitch animation
        // ** - Remove the glitch animation

    })
}



function removeAllClasses(classToRemove, parentSelector = '') {

    // Remove active state from other elements
    const allElements = document.querySelectorAll(`${parentSelector} .${classToRemove}`);

    for (const element of allElements) {
        element.classList.remove(classToRemove)
    }

}

function slideTransition(slideItem) {



    // add the glitching class
    slideItem.classList.add('glitching')
    setTimeout(function () {
        
        //remove the active state of a slider
        removeAllClasses('active', '.cyber-slider__wrapper');

        // remove the glitching class
        slideItem.classList.remove('glitching');
        slideItem.classList.add('active');
    }, 600)



}






