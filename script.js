gsap.registerPlugin(ScrollTrigger);

//  ANIMACIONES DE HERO

const heroTL = gsap.timeline({
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

waveContainer.addEventListener('click', (e) => {

    const rect = waveContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // inicio del punto de onda
    const dot = document.createElement('div');
    dot.className = 'wave-dot';
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    waveLine.appendChild(dot);

    // Alas ondas se expanden y desaparecen
    gsap.timeline()
        .to(dot, {
            scale: 15,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out',
            onComplete: () => dot.remove()
        });

    // creo muchas ondas mas peques
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const secondaryDot = document.createElement('div');
            secondaryDot.className = 'wave-dot';
            secondaryDot.style.left = x + 'px';
            secondaryDot.style.top = y + 'px';
            secondaryDot.style.background = i % 2 === 0 ? '#34D399' : '#10B981';
            waveLine.appendChild(secondaryDot);

            gsap.timeline()
                .to(secondaryDot, {
                    scale: 10 + i * 5,
                    opacity: 0,
                    duration: 1.2 + i * 0.3,
                    ease: 'power2.out',
                    onComplete: () => secondaryDot.remove()
                });
        }, i * 200);
    }
});


//animacion section cta 

// titulo del cta
gsap.to('.cta-title', {
    scrollTrigger: {
        trigger: '.cta-title',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out'
});

// texto en cta
gsap.to('.cta-text', {
    scrollTrigger: {
        trigger: '.cta-text',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
});


// boton cta infinito
// El botón pulsa constantemente para llamar la atención

gsap.to('.cta-button', {
    scale: 1.1,
    boxShadow: '0 15px 40px rgba(16, 185, 129, 0.6)',
    duration: 0.8,
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true
});


// animacion footter q sea desde abajo


gsap.to('.footer', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        toggleActions: 'play none none none'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
});

//ANIMACION EXTRA

// Añadir efecto parallax sutil al hero
gsap.to('.hero-illustration', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 100,
    opacity: 0.5
});

// Console log p comprobar que funciona
console.log('Marea Digital - Animaciones GSAP cargadas correctamente');
console.log(' Desarrollado por María - IES Albarregas');