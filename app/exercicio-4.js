console.log("Exercicio 4 - Funções em Javscript");

console.log(" ### Crie uma função 'calcularMedia' que retorne a media dos elementos passados: ");

num_elem = Math.floor(Math.random() * 10);
elementos = [];
for (var i = 0; i < num_elem; i++) {
	elementos.push(Math.floor(Math.random() * 10));
}

// ############# Insira seu codigo abaixo #############

var calcularMedia = function(elementos) {
	return 0;
	console.log('oi')
}

// ############# Fim do seu codigo #############

console.log('Elementos: ' + JSON.stringify(elementos));
console.log('Media: ' + calcularMedia(elementos));