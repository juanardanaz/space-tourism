/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
});

sr.reveal(`.primary-container-data`);
sr.reveal(`.primary-button-container`, {delay: 400, origin: 'bottom'});
sr.reveal(`.destination-img`, {delay: 600});
sr.reveal(`.destination-subheading`, {delay: 400, origin: 'left'});
sr.reveal(`.destination-data-container`, {delay: 600, origin: 'bottom'});
sr.reveal(`.crew-subheading`, {delay: 400, origin: 'left'});
sr.reveal(`.crew-container`, {delay: 400, origin: 'bottom'});
sr.reveal(`.technology-subheading`, {delay: 400, origin: 'left'});
sr.reveal(`.technology-container`, {delay: 400, origin: 'bottom'});
