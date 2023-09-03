//Get the current y offset


function expandContact(min, max) {
    const el = document.querySelector('.expand');
    if ( parseInt(window.scrollY) >= (min) && parseInt(window.scrollY) <= (max) ) { 
        el.classList.add('active')
    } else if (el.classList.contains('active')) {
        el.classList.remove('active')
    } else {
        console.log('nope');
    }; 
}





window.addEventListener('scroll', () => {
        expandContact(4700, 4800);
    }
);



// panel1.addEventListener('click', () => {
//     console.log('p1');
//     if (panel1.classList.contains('p1-off')) {
//         panel1.classList.replace('p1-off', 'p1-on')
//     } else {panel1.classList.replace('p1-on', 'p1-off')
//    } 
//   });