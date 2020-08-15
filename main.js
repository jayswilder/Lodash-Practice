'use strict';
const assert = require('assert');
var chai = require('chai');
// Load the full build.
var _ = require('lodash');

const myData = [
    {
        "id": 1,
        "first_name": "Baxy",
        "last_name": "Neild",
        "email": "bneild0@angelfire.com",
        "gender": "Male",
        "ip_address": "185.191.224.62"
    }, {
        "id": 2,
        "first_name": "Foster",
        "last_name": "Hoff",
        "email": "fhoff1@usda.gov",
        "gender": "Male",
        "ip_address": "177.27.133.222"
    }, {
        "id": 3,
        "first_name": "Chloe",
        "last_name": "Ceely",
        "email": "cceely2@google.com.au",
        "gender": "Female",
        "ip_address": "162.13.183.248"
    }, {
        "id": 4,
        "first_name": "Lucian",
        "last_name": "Piddocke",
        "email": "lpiddocke3@mail.ru",
        "gender": "Male",
        "ip_address": "97.182.175.26"
    }, {
        "id": 5,
        "first_name": "Josi",
        "last_name": "Abadam",
        "email": "jabadam4@bing.com",
        "gender": "Female",
        "ip_address": "124.254.193.27"
    }, {
        "id": 6,
        "first_name": "Lyon",
        "last_name": "Haddacks",
        "email": "lhaddacks5@psu.edu",
        "gender": "Male",
        "ip_address": "187.125.13.89"
    }, {
        "id": 7,
        "first_name": "Justinn",
        "last_name": "Franks",
        "email": "jfranks6@domainmarket.com",
        "gender": "Female",
        "ip_address": "154.175.219.165"
    }, {
        "id": 8,
        "first_name": "Keane",
        "last_name": "Barnes",
        "email": "kbarnes7@biblegateway.com",
        "gender": "Male",
        "ip_address": "51.32.92.31"
    }
]

console.log(`
=========================================================================================
================ _.chunk(The array to process., The length of each chunk) ===============
=========================================================================================
`)
const chunkData = (array, chunkSize) => {
    let dataChunk = _.chunk(array, chunkSize);
    return dataChunk;
};
console.log(chunkData(myData, 4));

console.log(`
================================================================
================ _.reverse(The array to modify.) ===============
================================================================
`)

const reverseData = (array) => {
    let dataReverse = _.reverse(array)
    return dataReverse;
}

console.log(reverseData(myData))
console.log(`
==========================================================================================
================ _.without( The array to inspect., The values to exclude.) ===============
==========================================================================================
`)

const withoutData = (array) => {
    let dataWithout = _.without(array, array[1], array[5])
    return dataWithout;
}
console.log(withoutData(myData))

console.log(`
======================================================================
================ _.shuffle(The collection to shuffle.) ===============
======================================================================
`)

const shuffleData = (array) => {
    let dataShuffle = _.shuffle(array)
    return dataShuffle;
}
console.log(shuffleData(myData))

console.log(`
==================================================================================================
================ _.size(The collection to inspect.) == Returns the collection size ===============
==================================================================================================
`)

const sizeData = (array) => {
    let dataSize = _.size(array);
    return dataSize;
}
console.log(`The size of the array/collection is: ${sizeData(myData)}`)


// =====================================================================
// ========================== UNIT TESTING =============================
// =====================================================================

if (typeof describe === 'function') {
    describe('chunkData', function () {
        it('This should create 2 arrays with 4 elements each', function () {
            // this checks chunkData()
            let testArray = [11, 22, 33, 44, 55, 66, 77, 88]
            let testTemp = chunkData(testArray, 4);
            assert.equal(testTemp.length, 2);
            assert.equal(testTemp[0].length, 4)
            assert.equal(testTemp[1].length, 4)
            assert.equal(testTemp[0][0], '11')
            assert.equal(testTemp[1][0], '55')
        });

    });
}

if (typeof describe === 'function') {
    describe('reverseData', function () {
        it('This should return the array in reverse order', function () {
            // this checks reverseData()
            let testArray2 = [11, 22, 33, 44, 55, 66, 77, 88]
            let testTemp2 = reverseData(testArray2);
            assert.equal(testTemp2[0], 88)
            assert.equal(testTemp2[1], 77)
            assert.equal(testTemp2[2], 66)
            assert.equal(testTemp2[3], 55)
            assert.equal(testTemp2[4], 44)
            assert.equal(testTemp2[5], 33)
            assert.equal(testTemp2[6], 22)
            assert.equal(testTemp2[7], 11)
        });
    });
}

if (typeof describe === 'function') {
    describe('withoutData', function () {
        it('This should return the array without specified data', function () {
            // this checks withoutData()
            let testArray3 = [11, 22, 33, 44, 55, 66, 77, 88]
            let testTemp3 = withoutData(testArray3, testArray3[1], testArray3[5]);
            assert.equal(testTemp3.length, 6)
            assert.equal(testTemp3[0], 11)
            assert.equal(testTemp3[1], 33)
            assert.equal(testTemp3[2], 44)
            assert.equal(testTemp3[3], 55)
            assert.equal(testTemp3[4], 77)
            assert.equal(testTemp3[5], 88)
        });
    });
}

if (typeof describe === 'function') {
    describe('shuffleData', function () {
        it('This should return the array in a randomized order', function () {
            // this checks shuffleData()
            let testArray4 = [11, 22, 33, 44, 55, 66, 77, 88]
            let testTemp4 = shuffleData(testArray4);
            let arrayString = testArray4.toString()
            let tempArrayString = testTemp4.toString()
            assert.notEqual(arrayString, tempArrayString)
        });
    });
}

if (typeof describe === 'function') {
    describe('sizeData', function () {
        it('This should return the size/length of the data collection', function () {
            // this checks shuffleData()
            let testArray5 = [11, 22, 33, 44, 55, 66, 77, 88]
            let testTemp5 = sizeData(testArray5);
            assert.equal(testArray5.length, testTemp5)
        });
    });
}