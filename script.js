function verificarResposta() {
    var respostaCorreta;
    var proximaPagina;

    if (window.location.pathname.includes("pergunta1.html")) {
        respostaCorreta = "c";
        proximaPagina = "pergunta2.html";
    } else if (window.location.pathname.includes("pergunta2.html")) {
        respostaCorreta = "b";
        proximaPagina = "pergunta3.html";
    } else if (window.location.pathname.includes("pergunta3.html")) {
        respostaCorreta = "a";
        proximaPagina = "pergunta4.html";
    } else if (window.location.pathname.includes("pergunta4.html")) {
        respostaCorreta = "c";
        proximaPagina = "pergunta5.html";
    } else if (window.location.pathname.includes("pergunta5.html")) {
        respostaCorreta = "b";
        proximaPagina = "pergunta6.html";
    } else if (window.location.pathname.includes("pergunta6.html")) {
        respostaCorreta = "a";
        proximaPagina = "pergunta7.html";
    } else if (window.location.pathname.includes("pergunta7.html")) {
        respostaCorreta = "b";
        proximaPagina = "pergunta8.html";
    } else if (window.location.pathname.includes("pergunta8.html")) {
        respostaCorreta = "c";
        proximaPagina = "pergunta9.html";
    } else if (window.location.pathname.includes("pergunta9.html")) {
        respostaCorreta = "c";
        proximaPagina = "final.html";
    }

    var respostaUsuario = document.querySelector('input[name="resposta"]:checked');

    if (respostaUsuario && respostaUsuario.value === respostaCorreta) {
        window.location.href = proximaPagina;
    } else {
        window.location.href = "pergunta1.html";
    }
}


// Espera o DOM ser carregado
document.addEventListener("DOMContentLoaded", function() {
    // Referencia ao botão
    var button = document.getElementById('redirectionButton');

    // Adiciona evento de clique ao botão
    button.addEventListener('click', function() {
        // Define o tempo de espera em milissegundos
        var tempoEspera = 5 * 1000; // 5 segundos em milissegundos

        // Define a função de redirecionamento
        function redirecionar() {
            // Redireciona para a próxima página
            window.location.href = 'pergunta1.html';
        }

        // Define o temporizador
        var temporizador = setTimeout(redirecionar, tempoEspera);

        // Mostra o contador de tempo
        var contador = 5;
        var contadorIntervalo = setInterval(function() {
            // Atualiza o texto do botão com o contador regressivo
            button.textContent = 'Começando em: ' + contador + ' ';

            // Decrementa o contador
            contador--;

            // Quando o contador chegar a 0, limpa o temporizador e o intervalo e redireciona
            if (contador < 0) {
                clearTimeout(temporizador);
                clearInterval(contadorIntervalo);
                redirecionar();
            }
        }, 1000); // A cada segundo
    });
});

// Espera o DOM ser carregado
document.addEventListener("DOMContentLoaded", function() {
    // Referencia ao botão
    var button = document.getElementById('redirectionButton2');

    // Adiciona evento de clique ao botão
    button.addEventListener('click', function() {
        // Define o tempo de espera em milissegundos
        var tempoEspera = 10 * 1000; // 5 segundos em milissegundos

        // Define a função de redirecionamento
        function redirecionar() {
            // Redireciona para a próxima página
            window.location.href = 'parabens/parabens.html';
        }

        // Define o temporizador
        var temporizador = setTimeout(redirecionar, tempoEspera);

        // Mostra o contador de tempo
        var contador = 10;
        var contadorIntervalo = setInterval(function() {
            // Atualiza o texto do botão com o contador regressivo
            button.textContent = 'Indo em: ' + contador + ' ';

            // Decrementa o contador
            contador--;

            // Quando o contador chegar a 0, limpa o temporizador e o intervalo e redireciona
            if (contador < 0) {
                clearTimeout(temporizador);
                clearInterval(contadorIntervalo);
                redirecionar();
            }
        }, 1000); // A cada segundo
    });
});