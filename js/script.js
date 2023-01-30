
// Script que faz o menu fechar ao clicar em uma opção

let menu = document.getElementById('menu');

        menu.addEventListener('click', function() {
        let closeMenu = document.getElementById("close-menu");
        closeMenu.checked = false;
})