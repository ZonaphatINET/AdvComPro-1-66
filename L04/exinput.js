//Program to calculate BMI
//BMI = weight / (height (m) * height (m))

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// declare variables
var name, weight, height, bmi;

//prompt user for name, weight and height
rl.question('Enter your name: ', (answer) => {
    name = answer;
    rl.question('Enter your weight (kg): ', (answer) => {
        weight = answer;
        rl.question('Enter your height (m): ', (answer) => {
            height = answer;
            bmi = weight / (height * height);
            console.log(`${name}, your BMI is ${bmi.toFixed(2)}`);
            rl.close();
        });
    });
}
);