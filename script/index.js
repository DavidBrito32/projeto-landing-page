const abreMenu = document.querySelector('#menuBurguer');

abreMenu.addEventListener('click', () => {
    const navbar = document.querySelector('#navbar');
    navbar.classList.toggle('active');
    abreMenu.classList.toggle('ativo');
});

abreConta.addEventListener('click', () => {
    overlay.classList.add('active');
    conta.classList.add('active');
})


fechaConta.addEventListener('click', () => {
    overlay.classList.remove('active');
    conta.classList.remove('active');
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    conta.classList.remove('active');
    succes.classList.remove('active');
    succes.classList.remove('active');
    ativar.classList.remove('active');
    segunda.classList.remove('active');
    show.classList.remove('active');
    error.classList.remove('active')
    notenvied.classList.remove('active');
    notdois.classList.remove('active');

})

enviarMensagem.addEventListener('click', (event) => {
        event.preventDefault();

        if(email.value !== "" && nameInput.value !== ""){
            succes.classList.toggle('active');
            ativar.classList.toggle('active');
            segunda.classList.toggle('active');
            show.classList.toggle('active');
            overlay.classList.toggle('active');
            error.classList.remove('active')
            erro.classList.remove('active')
            notenvied.classList.remove('active');
            notdois.classList.remove('active');
            fcForm.reset();
        }else{
            overlay.classList.add('active')
            succes.classList.remove('active');
            succes.classList.add('desactive');
            error.classList.remove('active');
            notenvied.classList.add('active');
            notdois.classList.add('active');
            erro.classList.add('active');
        }

})

fecharMensagem.addEventListener('click', () => {
    succes.classList.remove('active');
    ativar.classList.remove('active');
    segunda.classList.remove('active');
    show.classList.remove('active');
    overlay.classList.remove('active');
    notenvied.classList.remove('active');
    notdois.classList.remove('active');
    erro.classList.remove('active')
    succes.classList.remove('desactive');
})