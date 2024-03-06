class Stack {
    constructor() {
      this.items = []; // Array para armazenar os elementos da pilha
    }
  
    // Método para adicionar um elemento ao topo da pilha
    push(element) {
      this.items.push(element);
    }
  
    // Método para remover e retornar o elemento do topo da pilha
    pop() {
      if (this.isEmpty()) {
        return "Underflow"; // Verifica se a pilha está vazia antes de remover
      }
      return this.items.pop(); // Remove e retorna o elemento do topo da pilha
    }
  
    // Método para obter o elemento do topo da pilha sem removê-lo
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Método para verificar se a pilha está vazia
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Método para esvaziar a pilha
    clear() {
      this.items = [];
    }
  

printStack() { 
    let str = " ";
    for (let i = 0; i < this.items.length; i++){
        str += this.items[i] + " ";
    }
    return str;
    }
}


const stack = new Stack(); 

stack.push(10);
stack.push(20);
stack.push(30);

console.log("ELEMENTO REMOVIDO:" + stack.pop());
     
console.log("PILHA ATUAL: " + stack.printStack());

stack.clear();
console.log("PILHA ESVAZIADA  : " + stack.printStack());