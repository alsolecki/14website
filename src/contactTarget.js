//Get the current y offset


function expandContact(min, max) {
    let scrollDepth = parseInt(window.scrollY);

    const el = document.querySelector('.contact');
    // console.log(el.getBoundingClientRect().top);

    if ( el.getBoundingClientRect().top >= (min) && el.getBoundingClientRect().top <= (max) && el.classList.contains('inactive') ) { 
        el.classList.remove('inactive');
        el.classList.add('active')
    } else if (el.classList.contains('active')) {
        el.classList.remove('active');
        el.classList.add('inactive')
    };
}






window.addEventListener('scroll', () => {
        //375 width
        expandContact(115, 145);
    }
);

