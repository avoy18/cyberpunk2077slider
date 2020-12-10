const allBullets = document.querySelectorAll('.cyber-slider__controls li');

for(const bullet of allBullets){
    bullet.addEventListener('click', function(e){
        e.preventDefault();
        const currentBullet = document.querySelector('.cyber-slider__controls .current');
        console.log('slide'+bullet.dataset.slide)
        
        currentBullet.classList.remove('current')
        bullet.classList.add('current')
    })
}