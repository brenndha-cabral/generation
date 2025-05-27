const read = require('readline-sync');

let nameEmployee;
let positionEmployee;
let salaryEmployee;

nameEmployee = read.question("\nDigite o nome do colaborador: ");
positionEmployee = parseInt(read.question("\nDigite o cargo: "));
salaryEmployee = parseFloat(read.question("\nDigite salário: "));

const data = [
    { code: 1, position: "Gerente", adjustment: 10 },
    { code: 2, position: "Vendedor", adjustment: 7 },
    { code: 3, position: "Supervisor", adjustment: 9 },
    { code: 4, position: "Motorista", adjustment: 6 },
    { code: 5, position: "Estoquista", adjustment: 5 },
    { code: 6, position: "Técnico de TI", adjustment: 8 }
];

let employee = data.find(e => e.code === positionEmployee);

let formattedSalary = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(salaryEmployee + (salaryEmployee * employee.adjustment / 100))

switch (employee.code) {
    case 1:
        console.log(`Nome do colaborador: ${nameEmployee} | Cargo: ${employee.position} | Salário Ajustado: ${formattedSalary}`);
        break;
    case 2:
        console.log(`Nome do colaborador: ${nameEmployee} | Cargo: ${employee.position} | Salário Ajustado: ${formattedSalary}`);
        break;
    case 3:
        console.log(`Nome do colaborador: ${nameEmployee} | Cargo: ${employee.position} | Salário Ajustado: ${formattedSalary}`);
        break;
    case 4:
        console.log(`Nome do colaborador: ${nameEmployee} | Cargo: ${employee.position} | Salário Ajustado: ${formattedSalary}`);
        break;
    case 5:
        console.log(`Nome do colaborador: ${nameEmployee} | Cargo: ${employee.position} | Salário Ajustado: ${formattedSalary}`);
        break;
    case 6:
        console.log(`Nome do colaborador: ${nameEmployee} | Cargo: ${employee.position} | Salário Ajustado: ${formattedSalary}`);
        break;
    default:
        break;
}
    
