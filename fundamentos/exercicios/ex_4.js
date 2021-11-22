function nomeDoMes(numeroMes) {
    if(numeroMes === 1) {
        return "Janeiro";
    } else if(numeroMes === 2) {
        return "Fevereiro";
    } else if(numeroMes === 3) {
        return "Março";
    } else if(numeroMes === 4) {
        return "Abril";
    }else if(numeroMes === 5) {
        return "Maio";
    }else if(numeroMes === 6) {
        return "Junho";
    }else if(numeroMes === 7) {
        return "Julho";
    }else if(numeroMes === 8) {
        return "Agosto";
    }else if(numeroMes === 9) {
        return "Setembro";
    }else if(numeroMes === 10) {
        return "Outubro";
    }else if(numeroMes === 11) {
        return "Novembro";
    }else if(numeroMes === 12) {
        return "Dezembro";
    }
}

console.log(nomeDoMes(12));