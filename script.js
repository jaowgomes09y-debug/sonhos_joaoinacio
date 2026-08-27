const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    mensagem.textContent =
        `Obrigado, ${nome}! Sua avaliação foi enviada com sucesso.`;

    formulario.reset();
});


const elementos = document.querySelectorAll(".card, .etapa, .carro-card");

const observador = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(entrada) {
        if (entrada.isIntersecting) {
            entrada.target.style.animation = "aparecer 0.7s ease forwards";
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach(function(elemento) {
    elemento.style.opacity = "0";
    observador.observe(elemento);
});
