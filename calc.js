function calculadora(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) return "Erro: divisão por zero!";
            return num1 / num2;
        default:
            return "Operador inválido! Use +, -, * ou /.";
    }
}

// Exemplo de uso:
console.log(calculadora(1, 1, '+')); // 2
console.log(calculadora(5, 3, '-')); // 2
console.log(calculadora(4, 2, '*')); // 8
console.log(calculadora(10, 2, '/')); // 5
console.log(calculadora(5, 0, '/')); // "Erro: divisão por zero!"
console.log(calculadora(1, 1, 'x')); // "Operador inválido! Use +, -, * ou /."
