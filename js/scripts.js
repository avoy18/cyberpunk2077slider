const allBullets = document.querySelectorAll('.cyber-slider__controls li');

for(const bullet of allBullets){
    bullet.addEventListener('click', function(e){
        e.preventDefault();
        const currentBullet = document.querySelector('.cyber-slider__controls .current');
        const currentSlide = document.querySelector('.cyber-slider__wrapper .active');
        const upcomingSlide = document.getElementById('slide' + bullet.dataset.slide);
        
        // 
        currentBullet.classList.remove('current')
        
        currentSlide.classList.remove('active')

        bullet.classList.add('current')

        upcomingSlide.classList.add('active')
    })
}