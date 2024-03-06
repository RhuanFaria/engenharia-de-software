let P1 = [0, 2, 3, 4, 5]; //notas da prova 1
let P2 = [10, 8, 5, 4, 3];//notas da prova 2
let P3 = [null, null, 5, 3, 7];//notas da prova 3

verificarMedia(P1, P2, P3);

function verificarMedia(P1, P2, P3) {
    let media = [];
    let resultado = [];
    for (let i = 0; i < P1.length; i++) {
        media[i] = (0.4 * P1[i]) + (0.6 * P2[i]);
        if (media[i] >= 5) {
            resultado.push("Aprovado");
        } else {
            if (P3[i] > P1[i] || P3[i] > P2[i]) {
                if (P1[i] < P2[i]) {
                    P1[i] = P3[i];
                } else {
                    P2[i] = P3[i];
                }
            }
            media[i] = 0.4 * P1[i] + 0.6 * P2[i];
            let mediaRecuperacao = media[i] >= 5 ? "Aprovado na Recuperação" : "Reprovado na Recuperação";
            resultado.push(mediaRecuperacao);
        }
    }
    console.log(`Média Final dos alunos: ${media.join(' | ')}`)
    console.log(`Resultado Final dos alunos: ${resultado.join(' | ')}`);
}