const num1 = 5;
const num2 = 10;

function addValues (){
    console.log(`The sum is :${num1 + num2}`);
}

addValues();

// if we have a function inside a module that we invoke, the code will run even though we didnt assign it to a variable and we didnt invoke that variable
// when you import a module, you also invoke it