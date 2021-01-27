class Login {

    constructor(name, password) {
        this.name = name;
        this.password = password
    }

    printDetails = function () {
        console.log(this.name)
        console.log(this.password)
    }
}

var MathFunctions = {

    sumOfNumbers: function (a, b) {
        return a + b;
    },

    multiply: function (a, b) {
        return a * b;
    },

    divide: function (a, b) {
        return a / b;
    }

}

module.exports = {Login,MathFunctions}

module.exports.DirectFunction = function (){
    console.log("This is the direct function it will go here...")
}

