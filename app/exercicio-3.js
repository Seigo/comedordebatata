console.log("Exercicio 3 - Objetos em Javscript");

console.log(" ### Imprima no console a data do dia de hoje da seguinte forma: ");

console.log(" * Ano: YYYY");
console.log(" * Mes: MM");
console.log(" * Dia: DD");

console.log("Dica: vc pode obter a data-hora atual a partir da classe 'Date' do Javascript. Para instanciar um objeto desta classe, utilize 'new Date()'");
 
// ############# Insira seu codigo abaixo #############

data_atual = new Date()


console.log(" * Ano: " + data_atual.getFullYear());
console.log(" * Mes: " + (data_atual.getMonth() + 1));
console.log(" * Dia: " + data_atual.getDate());


// ############# Fim do seu codigo #############
