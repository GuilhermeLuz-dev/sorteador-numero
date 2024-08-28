document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#form-sorteador").addEventListener("submit", function (event) {
        event.preventDefault();
        let numeroMaximo = document.getElementById("numero-maximo").value;
        numeroMaximo = parseInt(numeroMaximo);
        let numeroSorteado = Math.random() * numeroMaximo;
        numeroSorteado = Math.floor(numeroSorteado + 1);
        document.getElementById("numero-sorteado").innerText = numeroSorteado;
        document.querySelector(".result").style.display = "block";
    })
})