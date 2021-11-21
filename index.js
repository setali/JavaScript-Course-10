// function sum (a, b) {
//   return a + b
// }

// function mul (a, b) {
//   return a * b
// }

// var noop = function () {}

// // const noop = () => {}

// function operate (a, b, operator = noop) {
//   //   console.log(operator)

//   return operator(a, b)

//   //   if (operator) {
//   //     return operator(a, b)
//   //   }
// }

// var a = operate(2, 5)

// console.log(a)
// function operate (operator, a, b) {
//   return operator(a, b)
// }

// // var a = operate(mul, 2, 5)

// var a = operate(
//   function (a, b) {
//     return a ** b
//   },
//   2,
//   5
// )

// console.log(a)
// var func = function () {
//   console.log('salam')
// }

// func()

// // function sum (a = 0, b = 0, c = 0, d = 10) {
// function sum () {
//   console.log('a:', a)
//   //   if (c === undefined) {
//   //     c = 0
//   //   }

//   //   c = c ? c : 0

//   //   c = c || 0

//   var result = 0
//   for (var i = 0; i < arguments.length; i++) {
//     // result = result + arguments[i]
//     result += arguments[i]
//   }

//   return result
// }

// console.log(sum(2, 3, 5))
// console.log(sum(2, 3))

// console.log(sum(5, 10, 20, 5, 6))

// var func = function () {
//   console.log('salam')
// }

// func()

// function sum (a, b) {
//   var result = a + b

//   console.log('salam')

//   return result

//   console.log('HI')
// }

// var r = sum(5, 8)

// console.log(r)

// console.log(sum(2, 3))
// console.log(sum(6, 3))
// console.log(sum(4, 12))

// var person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32
//   //   key: 'SALAM',
//   //   propertyName: 'test'
// }

// console.log('gender' in person)

// var propertyName = 'age'

// console.log(person[propertyName]) // => person.age
// console.log(person.propertyName)

// for (var key in person) {
//   console.log(key, person[key])
//   //   console.log(key, person.key)
// }

// var str = 'salam'
// for (var i = 0; i < str.length; i++) {
//   console.log(str[i])
// }

// for (var ali of 'salam') {
//   console.log(ali)
// }

// var friends = ['Ali', 'Eli', 'Qoli', 'Fati']

// for (var friend of friends) {
//   console.log(friend)
// }

// for (var i = 0; i < friends.length; i++) {
//   console.log(friends[i])
// }

// for (var i = 0; i < 10; i++) {
//   if (i === 5) {
//     break
//   }

//   console.log(i)
// }

// var i = 0
// do {
//   if (i % 2) {
//     console.log(i + ' salam')
//   } else {
//     console.log(i + ' Hi')
//   }
//   i++
// } while (i >= 10)

// var i = 0
// while (i >= 10) {
//   if (i % 2) {
//     console.log(i + ' salam')
//   } else {
//     console.log(i + ' Hi')
//   }
//   i++
// }

// for (var i = 0; i <= 10; i++) {
//   if (i % 2) {
//     console.log(i + ' salam')
//   } else {
//     console.log(i + ' Hi')
//   }
// }

// var a = 80

// if (a < 100) {
//   console.log('a is less than 100')

//   if (a < 50) {
//     console.log('a is less than 50')
//   } else if (a === 50) {
//     console.log('a is equal 50')
//   } else {
//     console.log('a is greater than 50')
//   }
// }

// var a = 16

// // a % 2 ? console.log('Odd') : console.log('Even')
// !(a % 2) ? console.log('Even') : console.log('Odd')

// console.log(a % 2 ? 'Odd' : 'Even')

// if (a % 2) {
//   console.log('Odd')
// } else {
//   console.log('Even')
// }

// var a = 15

// a === 10 ? console.log('is 10') : console.log('is not 10')

// var variable = 'b'

// switch (variable) {
//   case 'A':
//   case 'a':
//     console.log('is A')
//     break

//   case 'B':
//   case 'b':
//     console.log('is B')
//     break

//   case 'C':
//   case 'c':
//     console.log('is C')
//     break

//   default:
//     console.log('is not A,B,C')
// }

// var a = 16

// console.log(a % 2)

// if (a % 2) {
//   console.log('Odd')
// } else {
//   console.log('Even')
// }

// if (false) console.log('salam')

// console.log('hello')

// var a = 10

// if (a < 10) {
//   console.log('A is less than 10')
// } else if (a === 10) {
//   console.log('A is equal 10')
// } else {
//   console.log('A is greater than 10')
// }

// if ({} && 12) {
//   console.log('salam')
// } else {
//   console.log('Hello')
// }

// console.log('Hi')

// var person = {
//   //   name: 'Ali Mousavi',
//   age: 32
// }

// console.log('Welcome ' + (person.name || 'Unknown user'))

// 0 & 0 => 0
// 1 & 0 => 0
// 0 & 1 => 0
// 1 & 1 => 1

// 0 | 0 => 0
// 1 | 0 => 1
// 0 | 1 => 1
// 1 | 1 => 1
