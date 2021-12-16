// var result = parseInt('110', 2)

// console.log(result)

// var str = 'My name is Ali Mousavi'

// var arr = str.split(' ')

// console.log(arr)

// var newStr = arr.join(' ')

// console.log(newStr)

// var name = 'Ali'

// var result = name.concat(' ', 'Mousavi')

// console.log(result)
// console.log(name)

// var family = 'mousavi'

// family.length = 3

// console.log(family.length)

// console.log(family)

// var str = 'salam'
// var str = "salam"
// var str = `salam`

// var str = new String('salam')

// console.log(str + ' ali')

// var arr = [9, 1, 8, 13, 6, 2, 33]

// // var arr = ['ali', 'eli', 'alirreza', 'bita']

// arr.sort(function (a, b) {
//   return a - b
// })

// console.log(arr)

// var arr = [4, 9, 3, 6]

// var data = arr.reduce(function (acc, el) {
//   return acc + el
// })

// console.log(data)

// var arr = [1, 2, 3, 4, 5]

// Bad practice =>
// var result = 0
// arr.map(function (el) {
//   result += el
// })

// console.log(result)

// var result = arr.map(function (el) {
//   return el ** 2
// })

// console.log(result)

// var obj1 = { name: 'cat' }
// var obj2 = { name: 'dog' }

// var arr = [obj1, obj2]

// console.log(arr.includes(obj1))

// function sum () {
//   arguments.forEach(function () {})
// }

// sum(2, 5, 9)

// var arr = [4, 9, 3, 7, 1]

// var result = 0
// arr.forEach(function (el) {
//   result += el
// })

// console.log(result)

// for (var el of arr) {
//   console.log(el)
// }

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// var arr = [5, 9, 2, 7]

// var result = arr.some(function (el) {
//   return el % 2
// })

// console.log(result)

// var arr = [
//   { name: 'Ali', gender: true },
//   { name: 'Elahe', gender: false },
//   { name: 'Hadis', gender: false },
//   { name: 'Ebrahim', gender: true },
//   { name: 'Sajjad', gender: true },
//   { name: 'Mohammad', gender: true },
//   { name: 'Ebrahim', gender: false },
//   { name: 'Zahra', gender: false }
// ]

// var result = arr.find(function (el) {
//   return el.name === 'Rozita'
// })

// console.log(result)

// var result = arr.filter(function (el) {
//   return el.gender
// })

// console.log(result)

// var arr = [12, 3, 9, 16, 17, 12]

// var result = arr.filter(function (el) {
//   return el % 2
//   // if (el % 2 === 1) {
//   //   return true
//   // } else {
//   //   return false
//   // }
// })

// var result = arr.filter(el => el % 2)

// console.log(result)

// var arr = [4, 8, 2, 12, 16]

// var result = arr.every(function (el) {
//   return !(el % 2)
// })

// console.log(result)

// var arr = new Array(10)

// console.log(arr.fill(5))

// // var arr = [1, 2, 3]
// var arr = { length: 3 }

// function mapFunc (el, index) {
//   console.log(el, index)

//   return index
// }

// var result = Array.from(arr, mapFunc)

// console.log(result)

// function * gen () {
//   yield 10

//   yield 5

//   yield 3

//   yield 1
// }

// var it = gen()

// for (var a of it) {
//   console.log(a)
// }

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// var arr = new Array(3)

// var arr2 = new Array(undefined, undefined, undefined)

// console.log(arr)
// console.log(arr2)

// var arr = [1, 2, 3]

// console.log(arr)

// console.log(arr.length)

// arr.length = 2

// console.log(arr)
