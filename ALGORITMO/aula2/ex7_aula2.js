    // Função para obter um número do usuário
    function getNumber(promptText) {
      return parseFloat(prompt(promptText));
    }

    // Solicitar três números do usuário
    var num1 = getNumber("Digite o primeiro número:");
    var num2 = getNumber("Digite o segundo número:");
    var num3 = getNumber("Digite o terceiro número:");

    // Encontrar o maior número
    var maior = Math.max(num1, num2, num3);

    // Exibir o resultado
    alert("O maior número fornecido é: " + maior);
