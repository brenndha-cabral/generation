import { Stack } from "./pilha";
import read from 'readline-sync';

const newStack = new Stack<string>();
let inputNumber: number, inputName: string, keepRun: boolean = true;

const data: Array<{ code: number; description: string }> = [
  { code: 0, description: "Sair" },
  { code: 1, description: "Adiciona um novo livro a pilha: " },
  { code: 2, description: "Listar todos os livros da pilha" },
  { code: 3, description: "Remove um livro da pilha: " },
];

console.log("\n========== MENU ==========");
data.forEach((item) => console.log(`${item.code} - ${item.description}`));

while (keepRun) {
  inputNumber = read.questionInt("Entre com a opção desejada: ");
  const operation = data.find((o) => o.code === inputNumber);

  if (!operation) {
    console.log("Opção inválida.");
    continue;
  }

  switch (operation.code) {
    case 1:
      inputName = read.question("Escreva o nome do livro a ser adicionado: ");
      newStack.push(inputName);
      console.log("Pilha atual:");
      newStack.printStack();
      console.log(`${inputName} foi adicionado(a) à pilha de livros!`);
      break;

    case 2:
      if (newStack.isEmpty()) {
        console.log("A pilha de livros está vazia!");
      } else {
        console.log("Pilha atual de livros: ");
        newStack.printStack();
      }
      break;

    case 3:
      if (newStack.isEmpty()) {
        console.log("A pilha está vazia, nenhum livro na pilha!");
      } else {
        console.log(`Livro removido: ${newStack.pop()}`);
        console.log("Pilha atual de livros");
        newStack.printStack();
      }
      break;

    case 0:
      console.log(`${operation.description}`);
      keepRun = false;
  }
}
