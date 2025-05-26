const read = require('readline-sync');

let salary;
let bonus;
let newSalary;

salary = parseFloat( read.question("\nDigite o salário: "));
bonus = parseFloat(read.question("\nDigite o bônus: "));

newSalary = (salary + bonus).toFixed(2);

let formattedSalary = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(newSalary)

console.log(`O valor do salário + bônus é: ${formattedSalary}`);