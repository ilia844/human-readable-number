const READ_TABLE = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen', 
    '15': 'fifteen', 
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty', 
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
};

module.exports = function toReadable (number) {
    function getTwoDigit(str) {
        if (str[0] === '1') {
            return READ_TABLE[str];
        } else if (str[0] === '0') {
            if (str === '00') {
                return '';
            } else {
                return READ_TABLE[str[1]];    
            }            
        } else {
            if (str[1] !== '0') {
                return READ_TABLE[str[0] + '0'] + ' ' + getDigit(str[1]);    
            } else {
                return READ_TABLE[str];
            }
            
        }
    }

    function getDigit(str) {
        return READ_TABLE[str];
    }

    let strNum = number.toString();
    if (strNum.length === 3) {
        return (getDigit(strNum[0]) + ' ' + 'hundred' + ' ' + getTwoDigit(strNum.slice(1))).trim();
    } else if (strNum.length === 2) {
        return getTwoDigit(strNum)
    } else if (strNum.length === 1) {
        return getDigit(strNum[0]);
    } else {
        return '';
    }

    // return readableNum.trim();
}
