function somar() {
    const campo1 = document.getElementById("n1");
    const campo2 = document.getElementById("n2");
    const resultado = document.getElementById("resultado");

    if (campo1.value === "" || campo2.value === "") {
        resultado.textContent = "Digite os dois números!";
        return;
    }

    const numero1 = Number(campo1.value);
    const numero2 = Number(campo2.value);

    const soma = numero1 + numero2;

    resultado.textContent = "Resultado: " + soma;
}

function subtrair() {
    const campo1 = document.getElementById("n1");
    const campo2 = document.getElementById("n2");
    const resultado = document.getElementById("resultado");

    if (campo1.value === "" || campo2.value === "") {
        resultado.textContent = "Digite os dois números!";
        return;
    }

    const numero1 = Number(campo1.value);
    const numero2 = Number(campo2.value);

    const subtracao = numero1 - numero2;

    resultado.textContent = "Resultado: " + subtracao;
}