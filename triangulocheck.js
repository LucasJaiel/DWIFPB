function classificarTriangulo(a, b, c) {
    // Verifica se é um triângulo válido
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Não é um triângulo válido (lados devem ser maiores que zero).";
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Não é um triângulo válido (a soma de dois lados deve ser maior que o terceiro).";
    }

    // Classifica o triângulo
    if (a === b && b === c) {
        return "Equilátero (3 lados iguais).";
    } else if (a === b || a === c || b === c) {
        return "Isósceles (2 lados iguais).";
    } else {
        return "Escaleno (todos os lados diferentes).";
    }
}

// Exemplos de uso:
console.log(classificarTriangulo(2, 2, 2));   // Equilátero
console.log(classificarTriangulo(3, 4, 4));   // Isósceles
console.log(classificarTriangulo(5, 6, 7));   // Escaleno
console.log(classificarTriangulo(0, 0, 0));   // Inválido (zero)
console.log(classificarTriangulo(1, 1, 3));   // Inválido (soma 1+1 <= 3)
