const read = require('readline-sync');

let salary;
let nightShift;
let overtime;
let salaryDiscount;
let newSalary;

salary = parseFloat( read.question("\nDigite o salário bruto: "));
nightShift = parseFloat(read.question("\nDigite o adicional noturno: "));
overtime = parseFloat( read.question("\nDigite as horas extras: "));
salaryDiscount = parseFloat(read.question("\nDigite os descontos: "));

newSalary = (salary + nightShift + (overtime*5) - salaryDiscount).toFixed(2);

let formattedSalary = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(newSalary)

console.log(`O valor do salário líquido é: ${formattedSalary}`);