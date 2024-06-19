import inquirer from 'inquirer';
let currenceConvertor = {
    "USD": {
        "USD": 1,
        "EUR": 0.92,
        "PKR": 278,
    },
    "EUR": {
        "USD": 1.08,
        "EUR": 1,
        "PKR": 300
    },
    "PKR": {
        "USD": 0.0036,
        "EUR": 0.0033,
        "PKR": 1,
    },
};
// Input Prompt
const answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter your Currency Which you want to Convert?",
        type: "list",
        choices: ["USD", "EUR", "PKR"]
    },
    {
        name: "to",
        message: "Select Which Currency Convert?",
        type: "list",
        choices: ["USD", "EUR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount In Number",
        type: "number",
        choices: ["USD", "EUR", "PKR"]
    },
]);
const { from, to, amount } = answer;
// Conversion
if (from && to && amount) {
    let result = currenceConvertor[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid Operator Select");
}
