console.log("CALCULADORA")
let num1 = Number(prompt('Digite o primeiro numero'))
let num2 = Number(prompt('Digite o segundo numero'))
op = parseInt(prompt("Digite 1: soma, 2: subtração, 3: multiplicação, 4: divisão"));
sinal =""
let resultado

if (isNaN(num1) || isNaN(num2)) {
    console.log('Valores inválidos. Por favor, insira apenas números.');
} else {

    

switch (op) {
    case 1:
       resultado = somar(num1,num2)
       op ="Soma"
       sinal = "+"

        break;
    case 2: 
        
        resultado = subtrair(num1,num2)
        op ="Subtração"
        sinal ="-" 
                      

        break;

    case 3:
        resultado= multiplicar(num1,num2)
        op = "Multiplicação"
        sinal="x"
        break;
    case 4:
        try{
                resultado = dividir(num1,num2)
                 op= "Divisao"
                 sinal ="/"
        } catch (error){
            console.log(error.message)

        }   
        break;

    case 0 :
        console.log("Sair da Calculadora")
        resultado= "não foi possivel obter o usuário saiu"
    

    break;

        default:
            console.log('operação inválida')
            
            break;

    }         
                    
}


function somar(num1,num2){
return num1+num2;
}

function subtrair(num1,num2){
    return num1 - num2;
    }

    function multiplicar(num1,num2){
        return num1 * num2;
        }
        function dividir(num1,num2){
            return num1 / num2;
            }

            console.log(`O Resultado da ${op} ${num1} ${sinal} ${num2} = ${resultado}`)

