// Seleciona o ícone do menu e a barra de navegação
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Alterna a visibilidade da barra de navegação ao clicar no ícone do menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Adiciona/Remove a classe para o ícone
    navbar.classList.toggle('open');   // Adiciona/Remove a classe para a barra de navegação
};

// Inicializa o ScrollReveal com configuração padrão
const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

// Configura as animações de rolagem para diferentes elementos
sr.reveal('.logo', { delay: 200, origin: 'left' });
sr.reveal('.menu-btn', { delay: 600, origin: 'right' });

sr.reveal('.home-text span', { delay: 600, origin: 'top' });
sr.reveal('.home-text h1', { delay: 680, origin: 'left' });
sr.reveal('.home-text p', { delay: 750, origin: 'right' });
sr.reveal('.main-btn', { delay: 860, origin: 'left' });

sr.reveal('.share', { delay: 950, origin: 'bottom' });
sr.reveal('.home-img', { delay: 1000, origin: 'right' });

sr.reveal('.about-text h1', { delay: 680, origin: 'left' });
sr.reveal('.about-text p', { delay: 750, origin: 'right' });
sr.reveal('.about-img', { delay: 1000, origin: 'right' });