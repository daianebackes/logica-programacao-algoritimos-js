const nota1 = 9.7;
const nota2 = 4.2;
const nota3 = 1;

if (nota1 > nota2) {
    if (nota2 > nota3) {
        // nota1 e nota2 
        let m = media(nota1, nota2);
        situacaoAluno(m);
    } else {
        if (nota1 > nota3) {
            // nota1 e nota3 
            let m = media(nota1, nota3);
            situacaoAluno(m);
        } else {
            // nota3 e nota1 
            let m = media(nota3, nota1);
            situacaoAluno(m);
        }
    }
} else {
    if (nota2 > nota3) {
        if (nota1 > nota3) {
            // nota2 e nota1
            let m = media(nota2, nota1);
            situacaoAluno(m);
        } else {
            // nota2 e nota3 
            let m = media(nota2, nota3);
            situacaoAluno(m);
        }
    } else {
        //nota3 e nota2
        let m = media(nota3, nota2);
        situacaoAluno(m);
    }
}

function media(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media;
}

function situacaoAluno(media) {
    if (media >= 7 && media <= 10) {
        console.log(`aprovado com nota: ${media}`);
    } else if (media >= 4 && media < 7) {
        console.log(`Em recuperação com a nota: ${media}`);
    } else if (media >= 0 && media < 4) {
        console.log(`Reprovado com a nota: ${media}`);
    }
}