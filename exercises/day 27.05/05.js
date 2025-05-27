const read = require('readline-sync');

let productCode;
let quantity;

productCode = parseInt(read.question("\nDigite o código do produto: "));
quantity = parseInt(read.question("\nDigite a quantidade comprada: "));

const products = [
    { code: 1, name: "Cachorro Quente", price: 10.00 },
    { code: 2, name: "X-Salada", price: 15.00 },
    { code: 3, name: "X-Bacon", price: 18.00 },
    { code: 4, name: "Bauru", price: 12.00 },
    { code: 5, name: "Refrigerante", price: 8.00 },
    { code: 6, name: "Suco de Laranja", price: 13.00 }
];

let product = products.find(p => p.code === productCode);

let formattedPrice = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(quantity * product.price)

switch (product.code) {
    case 1:
        console.log(`Produto: ${product.name} | Valor total: ${formattedPrice}`);
        break;
    case 2:
        console.log(`Produto: ${product.name} | Valor total: ${formattedPrice}`);
        break;
    case 3:
        console.log(`Produto: ${product.name} | Valor total: ${formattedPrice}`);
        break;
    case 4:
        console.log(`Produto: ${product.name} | Valor total: ${formattedPrice}`);
        break;
    case 5:
        console.log(`Produto: ${product.name} | Valor total: ${formattedPrice}`);
        break;
    case 6:
        console.log(`Produto: ${product.name} | Valor total: ${formattedPrice}`);
        break;
    default:
        break;
}
    
