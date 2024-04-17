#! /usr/bin/env node

import inquirer from "inquirer"

import chalk from "chalk"

console.log(chalk.bgBlueBright("\n\tWelcome to my Word counter\t\n"));

const answers : {
  Sentence :string
} = await inquirer.prompt([
    {
      name : "Sentence",
      type : "input",
      message : chalk.bgBlue("Enter your message")  
    }
])
const words = answers.Sentence.trim( ).split(" ");
console.log(words);
console.log(chalk.bgBlueBright(`Your word count is ${words.length}`));