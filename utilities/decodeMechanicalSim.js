'use strict';

const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const stringHelper = (str) => {
    const obj = {};
    const wsIndexes = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') wsIndexes.push(i)
    }
    obj.wsIndexes = wsIndexes;
    let fixedString = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            fixedString += str[i]
        }
    }
    obj.fixedString = fixedString;
    return obj;
}

function decodeMechanicalSim(inputString) {
    let realDecodedStr = '';
    console.log('decode input', inputString)
    const tester = stringHelper(inputString);
    let temp = tester.fixedString.length - 1;

    for (let i = 0; i < tester.fixedString.length; i++) {
        console.log('decode input[i]', tester.fixedString[i])
        for (let j = 0; j < alpha.length; j++) {
            if (tester.fixedString[i] === alpha[j]) {
                // console.log('elseif', tester.fixedString[i], alpha[j], i, j, temp)

                if (alpha[j - temp] === undefined) {
                    console.log('testing undefined', i, j, temp, alpha[alpha.length - temp + j])
                    realDecodedStr += alpha[alpha.length - temp + j];
                    temp--
                    break

                } else {
                    console.log('in else', temp)
                    realDecodedStr += alpha[j - temp]
                    temp--
                    break

                }
            }
        }
    }
    console.log('before reverse', realDecodedStr)

    for (let i = 0; i < tester.wsIndexes.length; i++) {
        realDecodedStr = realDecodedStr.substring(0, tester.wsIndexes[i]) + ' ' + realDecodedStr.substring(tester.wsIndexes[i])
    }

    realDecodedStr = realDecodedStr.split('').reverse().join('');
    console.log('after reverse', realDecodedStr)
    return realDecodedStr;

}

module.exports = decodeMechanicalSim