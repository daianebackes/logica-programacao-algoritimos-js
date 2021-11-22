const data = {
    dia: 19,
    mes: 11,
    ano: 2021,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(data.exibir());