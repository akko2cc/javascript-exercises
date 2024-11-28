const removeFromArray = function() {
    let array = arguments[0]; 
    let removeArr = Array.from(arguments).slice(1);

    return array.filter(item => !removeArr.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
