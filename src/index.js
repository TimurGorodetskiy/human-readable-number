module.exports = function toReadable(number) {
    let oneSymbol = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let twoSymbol = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let threeSymbol = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let result = [];

    let hundreds = Math.floor(number / 100);
    let dozens = number % 100;
    let units = number % 10;

    if (number === 0) {
        result.push(oneSymbol[0]);
    }

    if (hundreds > 0) {
        result.push(oneSymbol[hundreds] + " hundred");
    }

    if (dozens >= 20) {
        result.push(threeSymbol[Math.floor(dozens / 10)]);
        if (units !== 0) {
            result.push(oneSymbol[units]);
        }
    } else if (dozens >= 10) {
        result.push(twoSymbol[Math.floor(dozens % 10)]);
    } else if (dozens !== 0) {
        result.push(oneSymbol[units]);
    }
    return result.join(" ");
};
