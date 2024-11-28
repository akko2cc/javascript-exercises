const sumAll = function(num1, num2) {

    try {
        if (typeof num1 === "string" | typeof num2 === "string") return "ERROR"

        let temp1 = Number(num1)
        let temp2 = Number(num2)

        if (temp1 > temp2) {
            num1 = temp2
            num2 = temp1
        }
        if (temp1 < 0 | temp2 < 0 | !Number.isInteger(temp1) | !Number.isInteger(temp2)) return "ERROR"
        
        counter = 0
        for (let i = num1; i <= num2; i++) {
            counter += i
        }
        return counter
    }
    catch (err) {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
