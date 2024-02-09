import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkanimation from 'chalk-animation';
class calc {
    welcomeMessage() {
        let animation = chalkanimation.rainbow(`
       Hey! Get ready for some math magic with our calculator. xD
        _____________________
       |  _________________  |
       | | JO           0. | |
       | |_________________| |
       |  ___ ___ ___   ___  |
       | | 7 | 8 | 9 | | + | |
       | |___|___|___| |___| |
       | | 4 | 5 | 6 | | - | |
       | |___|___|___| |___| |
       | | 1 | 2 | 3 | | x | |
       | |___|___|___| |___| |
       | | . | 0 | = | | / | |
       | |___|___|___| |___| |
       |_____________________|
       

      ╔═╗┬ ┬┌─┐┌┐┌┬ ┬┌─┐  ╦╔═┬ ┬┌─┐┌┐┌
      ║ ╦├─┤├─┤││││││├─┤  ╠╩╗├─┤├─┤│││
      ╚═╝┴ ┴┴ ┴┘└┘└┴┘┴ ┴  ╩ ╩┴ ┴┴ ┴┘└┘
 

       `);
        setTimeout(() => {
            animation.stop();
            this.askQuestion();
        }, 300);
    }
    addition(num1, num2) {
        console.log(chalk.bgBlueBright(`--> ${num1} + ${num2} = ${num1 + num2} `));
    }
    ;
    subtraction(num1, num2) {
        console.log(chalk.bgBlueBright(`-->${num1} - ${num2} =  ${num1 - num2}`));
    }
    ;
    multipliction(num1, num2) {
        console.log(chalk.bgBlueBright(`--> ${num1} * ${num2} = ${num1 * num2}`));
    }
    ;
    division(num1, num2) {
        console.log(chalk.bgBlueBright(`-->${num1} / ${num2} = ${num1 / num2}`));
    }
    ;
    power(num1, num2) {
        console.log(chalk.bgBlueBright(`--> ${num1} ^ ${num2} = ${num1 ** num2}`));
    }
    ;
    async askQuestion() {
        const choices = ["+ addition", "- subtraction", "* multiplaction", "/ division", "power", "> exit"];
        while (true) {
            let operator = await inquirer.prompt([
                {
                    name: "selectedOperator",
                    type: "list",
                    message: chalk.blue.underline.bold("Which operator you want to perfome?"),
                    choices: choices,
                }
            ]);
            if (operator.selectedOperator == choices[6]) {
                let endAnimation = chalkanimation.rainbow(`thank you for using calculator`);
                setTimeout(() => {
                    endAnimation.stop();
                }, 3000);
                break;
            }
            else {
                let input = await inquirer.prompt([
                    {
                        type: "number",
                        name: "number1",
                        message: chalk.yellowBright("enter value for number 1:")
                    },
                    {
                        type: "number",
                        name: "number2",
                        message: chalk.yellowBright("enter value for number 2:")
                    }
                ]);
                console.log("number 1: ", input.number1);
                console.log("number 2: ", input.number2);
                if (!isNaN(input.number1) && !isNaN(input.number2)) {
                    switch (operator.selectedOperator) {
                        case "+ addition":
                            this.addition(input.number1, input.number2);
                            break;
                        case "- subtraction":
                            this.subtraction(input.number1, input.number2);
                            break;
                        case "* multiplaction":
                            this.multipliction(input.number1, input.number2);
                            break;
                        case "/ division":
                            this.division(input.number1, input.number2);
                            break;
                        case "+ power":
                            this.power(input.number1, input.number2);
                            break;
                        default:
                            console.log(`operato not found`);
                            break;
                    }
                }
                else {
                    console.log(chalk.bgRed(`please enter a valid number`));
                }
            }
        }
    }
}
// patorjk.com
// ascii.co.uk calculator
const mycalc = new calc();
mycalc.welcomeMessage();
// class Calculator {
//     add(a:number,b:number):number {
//        return a + b; 
//     }
//     subtract(a:number,b:number):number{
//         return a - b
//     }
//     multiply(a:number,b:number):number{
//         return a * b
//     };
//     divide(a:number, b:number):number{
//         if (b === 0) {
//            throw new Error("Cannot devide by zero");
//         }
//         return a /b;
//     }
// }
// let calculator = new Calculator ();
// function printResult(operation:string, result: number):void {
//    console.log(`${operation} Result: ${result}`);
// }
// let args = process.argv.slice(2)
// if (args.length !== 3) {
//     console.error(`Usage: node calculator.js <number> <operator> <number>`)
//     process.exit(1)
// };
// const num1 = parseFloat(args[0]);
// const operator = args[1];
// const num2 = parseFloat(args[2]);
// let result;
// switch (operator) {
//     case "+":
//         result = calculator.add(num1, num2);
//         break;
//     case "-":
//         result = calculator.subtract(num1, num2);
//         break;
//     case "*":
//         result = calculator.multiply(num1, num1);
//         break;
//     case "/":
//         result = calculator.divide(num1,num2)
//     break;
//     default:
//         console.error("Invalid operator. Use +, -, *, or /");
//         process.exit(1)
// };
// printResult(`${num1} ${operator} ${num2}`,result)
//   //tsc calc.ts
//  // node calc.js 10 + 5
