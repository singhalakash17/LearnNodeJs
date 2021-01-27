var moduleUsage=require('./learnmodule.js');


let loginPage = new moduleUsage.Login("akash","singhal");

console.log(loginPage.printDetails())
console.log("Addition functionality : " + moduleUsage.MathFunctions.sumOfNumbers(10,20))
console.log("Addition functionality : " + moduleUsage.MathFunctions.multiply(10,20))
console.log("Addition functionality : " + moduleUsage.MathFunctions.divide(10,20))

moduleUsage.DirectFunction()

// console.log(dummy.loginPage.loginSuccessfully("firstname","lastname"))
// console.log(dummy.loginSuccessfully1("firstname","lastname"))