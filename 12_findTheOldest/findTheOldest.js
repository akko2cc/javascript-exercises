const findTheOldest = function(people) {

    peopleAges = []
    largestPerson = ""

    people.forEach(element => {
        if (element.yearOfDeath === undefined) {
            peopleAges.push([element.name, new Date().getFullYear() - element.yearOfBirth])
        }
        else {
            peopleAges.push([element.name, element.yearOfDeath - element.yearOfBirth])
        }
    });

    largest = peopleAges[0][1]
    largestPerson = peopleAges[0][0]

    peopleAges.forEach((element, index) => {
        if (index != 0) {
            if (element[1] > largest) {
                largest = element[1]
                largestPerson = element[0]
            }
        }
    });

    return { name: largestPerson }
};

// Do not edit below this line
module.exports = findTheOldest;
