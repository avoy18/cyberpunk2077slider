
// add an event listener on the bullets
const allBullets = document.querySelectorAll('.cyber-slider__controls li');

for (const bullet of allBullets) {
    bullet.addEventListener('click', function (e) {

        const upcomingSlide = document.querySelector(`[data-slideid="${bullet.dataset.slide}"]`);
        const currentSlide = document.querySelector('.cyber-slider__wrapper .active');
        // 
        const currentBullet = document.querySelector('.cyber-slider__controls .current');
        // 
        const slideImage = currentSlide.querySelector('.slide-image');
        const glitchArea = currentSlide.querySelector('.glitch-area');
        const imageHTML = slideImage.outerHTML + slideImage.outerHTML;


        if (bullet !== currentBullet) {
            //  remove the current state of a bullet
            currentBullet.classList.remove('current')
            // add it to the current item
            bullet.classList.add('current');

            // ** Switch the slide
            glitchArea.innerHTML = imageHTML
            // add the glitching class
            currentSlide.classList.add('glitching')
            setTimeout(function () {

                //remove the active state of a slider
                currentSlide.classList.remove('active')

                // remove the glitching class
                glitchArea.innerHTML = '';
                currentSlide.classList.remove('glitching');
                
                upcomingSlide.classList.add('active');
            }, 500)

        }

    })
}







