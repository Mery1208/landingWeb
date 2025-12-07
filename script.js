gsap.registerPlugin(ScrollTrigger);

//  ANIMACIONES DE HERO

const heroTL = gsap.timeLine({
    defaults: {
        ease: 'power3.out'
    }
});

heroTL
    .to('.hero-title' , {
        opacity: 1, 
        y: 0,
        duration: 1
    })
    .to('.hero-subtitle' , {
        opacity: 1, 
        y: 0,
        duration: 0.8
    }, '-=0.5')
    .to('.hero-illustration' , {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.5)'
    }, '-=0.3');

//  ANIMACIONES DE FEATURES

//parte del titulo
gsap.to('.section-title', {
    scrollTrigger: {
        trigger: '.section-title',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out'
});

//la parte de animacion subtitulo
gsap.to('.section-subtitle', {
    scrollTrigger: {
        trigger: '.section-subtitle',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
});

//Parte de cartas animacion FEATURES

//carta 1 
gsap.from('.card-1' , {
    scrollTrigger: {
        trigger: '.card-1',
        start: 'top 85%',
        toggleActions: 'play none none none'
    },
    x: -200,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
});

//carta 2
gsap.from('.card-2' , {
    scrollTrigger: {
        trigger: '.card-2',
        start: 'top 85%',
        toggleActions: 'play none none none'
    },
    x: 200,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
});

//carta 3
gsap.from('.card-3' , {
    scrollTrigger: {
        trigger: '.card-3',
        start: 'top 85%',
        toggleActions: 'play none none none'
    },
    x: -200,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: 'power3.out'
});


//carta 4
gsap.from('.card-4' , {
    scrollTrigger: {
        trigger: '.card-4',
        start: 'top 85%',
        toggleActions: 'play none none none'
    },
    x: 200,
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    ease: 'power3.out'
});

//Animación Wave que he añadido yo
gsap.to('.interactive-wave' , {
    scrollTrigger: {
        trigger: '.interactive-wave',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
});

//hago ondas al hacer click
const waveContainer = document.getElementById('waveContainer');
const waveLine = document.getElementById('waveLine');