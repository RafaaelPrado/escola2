document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menu');
    var sideNav = document.getElementById('sidenav');
    var overlay = document.getElementById('overlay');
    var body = document.body;
    var closeBtn = sideNav.querySelector('.close-btn'); // Seleciona o botão de fechar

    // Função para fechar o menu
    function closeMenu() {
        sideNav.classList.remove('active');
        overlay.classList.remove('overlay-active');
        body.classList.remove('overlay-active');
    }

    // Abrir e fechar o menu ao clicar no botão de menu
    menuButton.addEventListener('click', function() {
        sideNav.classList.toggle('active');
        overlay.classList.toggle('overlay-active');
        body.classList.toggle('overlay-active');

        if (sideNav.classList.contains('active')) {
            adjustContrast(); // Chama a função para ajustar o contraste ao abrir o menu
        }
    });

    // Fechar o menu ao clicar no botão de fechar
    closeBtn.addEventListener('click', function() {
        closeMenu();
    });

    // Fechar o menu ao clicar em um link dentro do menu
    sideNav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Fechar o menu ao clicar no overlay escuro
    overlay.addEventListener('click', function() {
        closeMenu();
    });

    // Aumentar contraste ao clicar no botão "Aumentar Contraste"
    document.getElementById('increaseContrast').addEventListener('click', function() {
        // Exemplo simples: troca a cor de fundo e texto para cores com maior contraste
        body.style.backgroundColor = '#000'; // Exemplo: fundo preto
        body.style.color = '#fff'; // Exemplo: texto branco
    });

    // Diminuir contraste ao clicar no botão "Diminuir Contraste"
    document.getElementById('decreaseContrast').addEventListener('click', function() {
        // Exemplo simples: troca a cor de fundo e texto para cores com menor contraste
        body.style.backgroundColor = '#fff'; // Exemplo: fundo branco
        body.style.color = '#000'; // Exemplo: texto preto
    });

    // Função para ajustar o contraste
    function adjustContrast() {
        var sideNavColor = window.getComputedStyle(sideNav).getPropertyValue('background-color'); // Obtém a cor de fundo do sideNav
        var newTextColor = AccessibleColors.pickTextColor(sideNavColor); // Escolhe uma nova cor de texto legível

        // Aplica a nova cor de texto aos links do menu
        sideNav.querySelectorAll('a').forEach(function(link) {
            link.style.color = newTextColor;
        });
    }
});
