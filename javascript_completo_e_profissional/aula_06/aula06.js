// Aula de Dúvidas dos alunos

// diferença entre == e ===
let n1 = 1;
let n2 = "1";

// consegue converter os tipos e dá como true
console.log(n1 == n2);

// compara não só o valor como o tipo de dado, então dá false
// utiliza o endereço de memória
console.log(n1 === n2);

// diferença entre not e diferente
let n3 = 2;

// isso dará true porque são valores diferentes
console.log(n1 != n3);

// isso dará false porque é o inverso de true
console.log(!(n1 != n3));

// Pegando o disposítivo usado através do JavaScript
if (navigator.userAgent.match(/Android/i) 
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
) {
    console.log("Celular");
} else {
    console.log("PC");
}

// Nomenclaturas de variáveis

// Podemos declarar variáveis dessa forma
var nome = "Lucas";

// Como também dessa forma, usando letra ou sigla antes do nome
var v_nome = "Lucas";

// Escopo de variáveis

// Escopo Global
var esporte = "Musculação";

// Escopo Local
// só é valida dentro desse trecho abaixo { }
{
    let v_apelido = "luquinhas";
    console.log(v_apelido, "só existo aqui");
}

