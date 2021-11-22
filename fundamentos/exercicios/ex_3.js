function calcularSalario(horasTrabalhadas, valorPorHora) {
    let salario = horasTrabalhadas * valorPorHora;
    return `Salário é igual a R$: ${salario}`;
}

console.log(calcularSalario(150, 40.5));