const repeatString = function(theString = '', theNumber) {

    let res = '';

    if (theNumber > 0) {
        for (let i = 0; i < theNumber; i++) {
            res = res + theString;
        }
    } else if (theNumber === 0) {
        res = '';
    } else {
        res = 'ERROR';
    }

    return res;
    
};

// Do not edit below this line
module.exports = repeatString;
