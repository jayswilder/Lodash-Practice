const fetch = require('node-fetch');
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
const chunkData = _.chunk(myData, 4);

console.log(chunkData);

console.log(`
================================================================
================ _.reverse(The array to modify.) ===============
================================================================
`)

const reverseData = _.reverse(myData)
console.log(reverseData)

console.log(`
==========================================================================================
================ _.without( The array to inspect., The values to exclude.) ===============
==========================================================================================
`)

const withoutData = _.without(myData, myData[1], myData[2])
console.log(withoutData)

console.log(`
======================================================================
================ _.shuffle(The collection to shuffle.) ===============
======================================================================
`)

const shuffleData = _.shuffle(myData)
console.log(shuffleData)

console.log(`
==================================================================================================
================ _.size(The collection to inspect.) == Returns the collection size ===============
==================================================================================================
`)

const sizeData = _.size(myData);
console.log(`The size of the array/collection is: ${sizeData}`)

console.log(`
==================================================================================================
========== _.some(The collection to iterate over., The function invoked per iteration.) ========== 
=============== Returns true if any element passes the predicate check, else false. ==============
==================================================================================================
`)

const someData = _.some(myData, { 'gender': 'Male' });
console.log(`Does the data contain 'Male'?  ${someData}

`);