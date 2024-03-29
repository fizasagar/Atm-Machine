#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000; //Dollar
const myPin = 6767;
let isExit = false;


console.log(`Dear customer welcome and thank you so much for coming back to our bank`);

let pinAnswer = await inquirer.prompt([

  {
    name: "pin",
    message: "Enter your pin",
    type: "number"
  },
     ]
        );

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code !!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash", "Exit"],
    },
        ]
            );

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
    {
        name: "amount",
        message: "enter your amount",
        type: "number",
    },
        ]   
            );

    if (amountAns.amount < myBalance) {
      (myBalance -= amountAns.amount),
        console.log(`Your remaining balance : ${myBalance}`);
    } else if (amountAns.amount > myBalance) {
      console.log("Insufficent Balance");
    }
  } 
    else if (operationAns.operation === "check balance") {
    console.log(`Your balance is : ${myBalance}`);
  }
    else if (operationAns.operation === "fast cash") {
    let cashAmount = await inquirer.prompt([
      {
        name: "cash",
        message: "Select your Amount",
        type: "list",
        choices: ["1000", "2000", "10000", "20000"],
      },
        ]
            );
    myBalance -= cashAmount.cash;
    console.log(`Your new Balance is : ${myBalance}`);
  } else if (operationAns.operation === "Exit") {
    isExit = true;
  }
}
 else {
  console.log("Incorrect pin number");
}