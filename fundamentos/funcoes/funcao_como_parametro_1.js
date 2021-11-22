function executar(parametro) {
    if (typeof parametro === "function") {
        console.log(parametro());    //  <--- Parte central da aula
    }
}

function bomDia() {
    return "Bom Dia";
}

executar(3);
executar(bomDia);      //  <--- Parte central da aula

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);