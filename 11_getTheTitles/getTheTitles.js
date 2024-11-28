const getTheTitles = function(object) {

    answer = []

    object.forEach(object => {
        answer.push(object.title)
    })

    return answer
};

// Do not edit below this line
module.exports = getTheTitles;
