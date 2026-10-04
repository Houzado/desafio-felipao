let saldoRank = saldoDeVitorias()
let nivel

if (saldoRank <= 10){
	nivel = "Ferro"
}
else if (saldoRank <=20){
	nivel = "Bronze"
}
else if (saldoRank <=50){
	nivel = "Prata"
}
else if (saldoRank <=80){
	nivel = "Ouro"
}
else if (saldoRank <=90){
	nivel = "Diamante"
}
else if (saldoRank <=100){
	nivel = "Lendário"
}
else {
	nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + saldoRank + " está no nível de " + nivel)

function saldoDeVitorias (vit = 80, der = 4){
    let saldo = vit - der
    return saldo
}