#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt ([
    {message: "Kindly select the first number to initiate the process", type:"number", name: "firstnumber"},
    {message: "Kindly select the second number to initiate the process", type: "number",name: "secondnumber"},
    {
        message: " Kindly select one of the operators to perform the desired action",
        type: "list",
        name: "useroperator",
        choices: ["Addition","Subtraction","Multiplication","Division","Percentage"],
    },
]);

if (asnwer.useroperator === "Addition") {
    console.log(asnwer.firstnumber + asnwer.secondnumber);
}
else if (asnwer.useroperator === "Subtraction") {
    console.log(asnwer.firstnumber - asnwer.secondnumber);
}
else if (asnwer.useroperator === "Multiplication") {
    console.log(asnwer.firstnumber * asnwer.secondnumber);
}
else if (asnwer.useroperator === "Division") {
    console.log(asnwer.firstnumber / asnwer.secondnumber);
}
else if (asnwer.useroperator === "Percentage") {
    console.log(asnwer.firstnumber % asnwer.secondnumber);
}

console.log("Thankyou for using");
console.log("Hope You Liked our application");


