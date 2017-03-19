console.log("Exercicio 2");

console.log(" ### Ana, Seigo, Andresa e Ju foram para um bar. Andresa e Ju dividiram uma porção de frango. Ana, Seigo e Ju dividiram uma porção de batata. Andresa pediu uma piña colada. Ana pediu um White Russian. E todos juntos beberam 7 cervejas. Dados os preços descritos nas variáveis, defina o quanto cada um deve pagar ###");

frango = 30
batata = 25
pina_colada = 12
white_russian = 11
cerveja = 8

pg_ana = 0
pg_seigo = 0
pg_andresa = 0
pg_ju = 0

// ############# Insira seu codigo abaixo #############

 
console.log("1 - dividir Frango por 2");

ParcialF = (frango / 2)
console.log("Parte do frango: " + ParcialF + "\n\n\n"); 



console.log("2 - dividir batata por 3");

ParcialB = (batata / 3)
console.log("Parte da batata: " + ParcialB + "\n\n\n")


console.log("3 - dividir cervejas por 4");

ParcialC = ((cerveja * 7) / 4)
console.log("Parte da cerveja: " + ParcialC + "\n\n\n")


console.log("4 - fazer a conta de cada um:" + "\n\n\n");

console.log("a. ana = B + C + WR");

ParteAna = (ParcialB + ParcialC + white_russian)
console.log("Parte da Ana: " + ParteAna + "\n\n\n")


console.log("b. seigo = B + C ");

ParteSeigo = (ParcialB + ParcialC)
console.log("Parte do Seigo: " + ParteSeigo + "\n\n\n")


console.log("c. andresa = F + PC + C");

ParteAndresa = (ParcialF + ParcialC + pina_colada)
console.log("Parte da Andresa: " + ParteAndresa + "\n\n\n")


console.log("d. ju = F + B + C");

ParteJu = (ParcialF + ParcialB + ParcialC)
console.log("Parte da Ju: " + ParteJu + "\n\n\n")




// ############# Fim do seu codigo #############

console.log("Ana pagou: " + ParteAna + "\n\n")
console.log("Seigo \"pagou\": " + ParteSeigo + "\n\n")
console.log("Andresa pagou: " + ParteAndresa + "\n\n")
console.log("Ju pagou: " + ParteJu + "\n\n")
console.log("Total pago: " + (ParteAna + ParteSeigo + ParteAndresa + ParteJu + "\n\n\n"))
console.log("Total conta: " + (frango + batata + pina_colada + white_russian + (7 * cerveja)))