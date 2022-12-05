const findTheOldest = function(people) {
    people.sort((a,b) => {
        let aAge = 0;
        let bAge = 0;
        if (!a.yearOfDeath) {
            aAge = new Date().getFullYear() - a.yearOfBirth;
        } else {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        if (!b.yearOfDeath) {
            bAge = new Date().getFullYear() - b.yearOfBirth;
        } else {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        if (aAge >= bAge) {return -1;}
        else {return 1;}
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
