import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 9999;
let myPin = 12345;

let pinNumber = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "enter your pin number !",
  },
]);
if (pinNumber.pin === myPin) {
  console.log(chalk.green("your pin number is correct !"));
  let operationAns = await inquirer.prompt([
    {
      name: "operator",
      type: "list",
      message: "select your operator !",
      choices: ["withdrawl !", "fast cash !", "check balance !"],
    },
  ]);
  if (operationAns.operator === "withdrawl !") {
    let myAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "enter your amoount !",
      },
    ]);
    if (myBalance >= myAmount.amount) {
      myBalance -= myAmount.amount;
      console.log(chalk.blue(`your remining amount is ${myBalance} !`));
    } else {
      console.log(chalk.red("insuficaint balance !"));
    }
  }
  if (operationAns.operator === "fast cash !") {
    let myAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        message: "select your option !",
        choices: ["1000", "5000", "9999", "10000"],
      },
    ]);
    if (myBalance >= myAmount.amount) {
      myBalance -= myAmount.amount;
      console.log(chalk.blue(`your reminig amount is ${myBalance} !`));
    } else {
      console.log(chalk.red("insuficaint balance !"));
    }
  } else if (operationAns.operator === "check balance !") {
    console.log(chalk.green(`your total balnce is ${myBalance}`));
  }
} else {
  console.log(chalk.red("wrong pin number !"));
}
