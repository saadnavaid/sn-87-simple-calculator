#! usr/bin/env node

//the above command is called a SHABANG command.

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {message: "Select any operator to perform operation",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);

//conditional statements

if (answer.Operator === "Addition") {console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.Operator === "Substraction") {console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.Operator === "Multiplication") {console.log(answer.firstNumber * answer.secondNumber);
}
 else if (answer.Operator === "Division") {console.log(answer.firstNumber / answer.secondNumber);
}else {console.log("Please select valid operator")}
