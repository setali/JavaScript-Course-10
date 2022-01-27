// const math = require('./math')
// const { sum } = require('./math')
// const { sum: mySum } = require('./math')
import { mul as myMul } from './math'
import mySum from './math'
import random from 'lodash/random'
import isOdd from 'is-odd'

console.log(mySum(2, 7))
console.log(myMul(2, 7))

console.log(random(1, 100))
console.log(isOdd(23))
