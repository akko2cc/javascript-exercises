const fibonacci = function(number) {

    if (number < 0) return "OOPS"
    if (number == 0) return 0

    n1 = 0
    n2 = 1
    total = 0
    limit = Number(number)
    arr = [0]

    while (true)
    {
        total = n1 + n2
        n2 = n1
        n1 = total
        arr.push(total)
        if (arr.length >= limit + 1) break;
    }

    return arr[arr.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
