const abreMenu = document.querySelector('#menuBurguer');

abreMenu.addEventListener('click', () => {
    const navbar = document.querySelector('#navbar');
    navbar.classList.toggle('active');
    abreMenu.classList.toggle('ativo');
})