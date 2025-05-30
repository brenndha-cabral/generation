import { Queue } from "./fila";
import read from 'readline-sync';

const newQueue = new Queue<string>();
let inputNumber: number, inputName: string, keepRun: boolean = true;

const data: Array<{ code: number; description: string }> = [
  { code: 0, description: "Sair" },
  { code: 1, description: "Adicionar um novo cliente na fila: " },
  { code: 2, description: "Listar todos os clientes na fila" },
  { code: 3, description: "Retirar cliente da fila (chamar) " },
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
      inputName = read.question("Adicione um novo cliente a filha: ");
      newQueue.enqueue(inputName);
      console.log("Fila atual:");
      newQueue.printQueue();
      console.log(`${inputName} foi adicionado(a) à fila!`);
      break;

    case 2:
      if (newQueue.isEmpty()) {
        console.log("A fila está vazia!");
      } else {
        console.log("Fila atual:");
        newQueue.printQueue();
      }
      break;

    case 3:
      if (newQueue.isEmpty()) {
        console.log("A fila está vazia, ninguém para chamar!");
      } else {
        console.log(`Cliente chamado: ${newQueue.dequeue()}`);
        console.log("Fila atual:");
        newQueue.printQueue();
      }
      break;

    case 0:
      console.log("Programa Finalizado!");
      keepRun = false;
  }
}
