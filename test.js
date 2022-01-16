const barcode = (number) => {
    let array = [],
        bonus = 0,
        numbersEven = [],
        numbersOdd = [],
        severalNumbersOdd = [],
        several = [],
        from = [],
        to = [],
        between,
        isTrue = false,
        sumNumbersEven,
        sumNumbersOdd;
    while (number > 0) {
        array.unshift(number % 10);
        number = number / 10 | 0;
    }
    if (array.length > 8 || array.length < 8) {
        return bonus;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numbersEven.push(array[i])
        } else {
            numbersOdd.push(array[i])
        }
        if ((array[i] % 2 !== 0) && (array[i + 1] % 2 !== 0)) {
            severalNumbersOdd.push(array[i])
            severalNumbersOdd.push(array[i + 1])
        }
    }
    for (let j = 0; j < severalNumbersOdd.length; j += 2) {
        several.push(+`${severalNumbersOdd[j]}${severalNumbersOdd[j + 1]}`)
    }

    from.push(severalNumbersOdd[0])
    from.push(severalNumbersOdd[1])
    to.push(severalNumbersOdd[2])
    to.push(severalNumbersOdd[3])

    function getBetween(array, from, to) {
        let reg = new RegExp(`${from}\,([^${[...from, ...to].join('')}]*)\,${to}`);
        let result = array.toString().match(reg)
        return result ? result[1].split(',') : null
    }
    between = getBetween(array, from, to)

    if (between !== null) {
        isTrue = between.every((el) => el % 2 === 0)
    }

    if (numbersEven.length >= 1) sumNumbersEven = numbersEven.reduce((a, b) => a + b)
    if (numbersOdd.length >= 1) sumNumbersOdd = numbersOdd.reduce((a, b) => a + b)

    if (
        isTrue
        && (severalNumbersOdd[2] >= severalNumbersOdd[0])
        && (severalNumbersOdd[3] > severalNumbersOdd[1])
    ) return bonus = 2000

    if (isTrue && several.length >= 2) return bonus = 1000

    sumNumbersEven > sumNumbersOdd ? bonus = 100 : bonus = 0

    return bonus
}
// barcode()
console.log(barcode(84533920));// 0
console.log(barcode(48183276));// 100
console.log(barcode(73289388));// 1000
console.log(barcode(37283988));// 2000
console.log(barcode(37218398));// 0  (37)2[1]8(39)8