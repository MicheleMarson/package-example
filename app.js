//npm init -y
//lodash package 

const _ = require("lodash")

const items = [1, [2, [3, [4]]]] //flatens the array
const newItems = _.flattenDeep(items)
console.log(newItems)