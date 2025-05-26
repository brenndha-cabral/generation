const read = require('readline-sync');

let score1;
let score2;
let score3;
let score4;

score1 = parseFloat( read.question("\nDigite a primeira nota: "));
score2 = parseFloat(read.question("\nDigite a segunda nota: "));
score3 = parseFloat( read.question("\nDigite a terceira nota: "));
score4 = parseFloat(read.question("\nDigite a quarta nota: "));

mediaScore = ((score1 + score2 + score3 + score4)/4).toFixed(1);

console.log(`O valor das médias das notas é: ${mediaScore}`);