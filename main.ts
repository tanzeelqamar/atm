import inquirer from "inquirer";
let yourBalance = 25000;
let myPin =  61025;
let pinAnswer = await inquirer.prompt(
    [
        {
            name : "pin",
            type : "number",
            message : "Enter Your Pin"
        }
    ]
);
if(
    pinAnswer.pin === myPin
)
    console.log("correct pin");
    let operations = await inquirer.prompt(
        [
            {
                name: "operations",
                type: "list",
                message: "what do you want to do?",
                choices:["withdraw","check balance","convert to another currency"]
            }
        ]
);
    if(
        operations.operations=== "withdraw"
    )
    {
        let amount = await inquirer.prompt(
            [
                {
                  name: "amount",
                  type:"number",
                  message: "How much do you want to withdraw?",   
                }
            ]
        )

          yourBalance -= amount.amount;
          console.log("your remaining balance is:" + yourBalance);
    }
    else if (
            operations.operations=== "check balance"
    )
    {
        console.log(yourBalance);
    }
    else if (
        operations.operations==="convert to another currency"
    )
    {
        let exchangeRate:any={
            "USD": 1,
            "EUR": 0.9,
            "CAD": 1.3,
            "JYP": 113,
            "PKR": 277,
            "AUD": 1.65,
        }
        {
          let userAnswer = await inquirer.prompt([{
            name: "fromCurrency",
            type:"list",
            message:"Select currency to convert from",
            choices:["USD","EUR","CAD","JYP","PKR","AUD"]
          },
        {
            name: "toCurrency",
            type:"list",
            message:"Select currency to convert into",
            choices:["USD","EUR","CAD","JYP","PKR","AUD"]
        },
        {
        name:"amount",
        type:"input",
        message:"Enter amount to convert"
        }
      ]);
      let fromAmount=exchangeRate[userAnswer.fromCurrency];
        let  toAmount=exchangeRate[userAnswer.toCurrency];
        let amount=userAnswer.amount
        let baseAmount=amount/fromAmount
        let convertedAmount=baseAmount*toAmount   
        console.log(`Converted Amount= ${convertedAmount.toFixed(2)}`)
    }
}
if(operations.withdraw>yourBalance){
    console.log("Insufficient Balance")
}