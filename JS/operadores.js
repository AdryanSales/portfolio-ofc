// Variáveis
let n1 = 75;
let n2 = 75;

// OPERADORES ARITMÉTICOS
    // Soma
    let soma=n1+n2
    console.log(n1 + " + " + n2 + " = " + soma);

    // Subtração
    let sub=n1-n2
    console.log(n1 + " - " + n2 + " = " + sub);

    // Multiplicação
    let prod=n1*n2
    console.log(n1 + " x " + n2 + " = " + prod);

    // Divisão
    let divisao=n1/n2
    console.log(n1 + " / " + n2 + " = " + divisao);

    // Exponenciação
    let expo=n1**n2
    console.log(n1 + " ^ " + n2 + " = " + expo);

    // Resto da Divisão
    let resto=n1%n2
    console.log(n1 + " % " + n2 + " = " + resto);

    // Incremento
    console.log("Incremento ao "+ n1 + ": " + ++n1);

    // Decremento
    console.log("Decremento sobre o "+ n1 + ": " + --n1);

// OPERADORES DE COMPARAÇÃO
    // Maior
        if (n1 > n2){
          console.log(n1 + " é maior que " + n2);
        }
        else if(n1 == n2){
          console.log(n1 + " é igual a " + n2);
        }
        else{
          console.log(n1 + " é menor que " + n2);
        }
    // Maior ou Igual
        if (n1 >= n2){
          console.log(n1 + " é maior ou igual a " + n2);
        }
        else{
          console.log(n1 + " é menor que " + n2);
        }
    // Menor
        if (n1 < n2){
          console.log(n1 + " é menor que " + n2);
        }
        else{
          console.log(" ");
        }
    // Menor ou Igual
        if (n1 <= n2){
          console.log(n1 + " é menor ou igual a " + n2);
        }
        else{
          console.log(" ");
        }
    // Igualdade de Valor
        if (n1 == n2){
          console.log(n1 + " é igual a " + n2);
        }
        else{
          console.log(n1 + " é diferente de " + n2);
        }
    // Diferença de Valor
        if (n1 != n2){
          console.log(n1 + " é diferente de " + n2);
        }
        else{
          console.log(n1 + " é igual a " + n2);
        }
    // Igualdade de Valor e Tipo
        if (n1 === n2){
          console.log(n1 + " é igual (em valor e em tipo) de " + n2);
        }
        else{
          console.log(n1 + " é diferente (em valor e em tipo) de " + n2);
        }
    // Diferença de Valor
        if (n1 !== n2){
          console.log(n1 + " é diferente (em valor e em tipo) de " + n2);
        }
        else{
          console.log(n1 + "  é igual (em valor e em tipo) de  " + n2);
        }
  // OPERADORES LÓGICOS 
    // E : && - Só será verdadeiro se todas as condições forem verdadeiras
        
    // OU : || - Será verdadeiro se palo menos uma das condições forem verdadeiras

    // NOT : !