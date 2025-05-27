const read = require('readline-sync');

let value;
let inputOperation;
let balance = 1000.00;

inputOperation = parseInt(read.question("\nDigite o tipo da operação (1: Saldo | 2: Saque | 3: Depósito "));

const data = [
    { code: 1, operation: "Saldo" },
    { code: 2, operation: "Saque" },
    { code: 3, operation: "Depósito" },
];

function formattedBalance(valueOfBalance) {
    return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(valueOfBalance)
}

let operation = data.find(o => o.code === inputOperation);

if (!operation) {
    console.log("Operação Inválida!");

} else if (operation.code === 1) {
    console.log(`Operação - Saldo | Saldo: ${formattedBalance(balance)}`);

} else {
    value = parseFloat(read.question("\nDigite valor: "));

    switch (operation.code) {
    case 2:
        if (balance >= value) {
            balance = balance - value;
            console.log(`Operação - Saque | Saldo: ${formattedBalance(balance)}`);
        } else {
            console.log("Saldo Insuficiente!");
        }
        break;
    case 3:
        balance = balance + value;
        console.log(`Operação - Depósito | Saldo: ${formattedBalance(balance)}`);
        break;
    }
}

    
