// Link Active Crew Selection
const linkCrew = document.querySelectorAll('.crew-swiper-button');

function activeWork() {
    linkCrew.forEach(l => l.classList.remove('crew-active'))
    this.classList.add('crew-active')
}

linkCrew.forEach(l => l.addEventListener('click', activeWork))