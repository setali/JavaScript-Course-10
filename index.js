// function sum (a, b) {
//   return a + b
// }

// console.log(sum(2, 3))
// console.log(sum(12, 3))

// / \ ` ~ ! @ # $ % ^ & * () - _ [] {} ' " | <> ? , .

// kebab-case-naming => my-first-name
// snake-case-naming => my_first_name
// camelCaseNaming => myFirstName
// PascalCaseNaming => MyFirstName
// UPPER_CASE_NAMING => MY_FIRST_NAME

// var myFirstName = 'Ali'

// console.log(myFirstName)

// var my_first_name = 'Ali'

// console.log(my_first_name)

// var obj = {
//   'my-first-name': 'ali'
// }

// console.log(obj['my-first-name'])

// setTimeout(function () {
//   console.log('salam')
// }, 1000)
// console.log(2 + 3)
// console.log('Hello')
// setTimeout(function () {
//   console.log('salam')
// }, 1000)
// setTimeout(function () {
//   console.log('salam')
// }, 1000)
// setTimeout(function () {
//   console.log('salam')
// }, 1000)

// function func () {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(
//       function (j) {
//         console.log(j)
//       },
//       1000,
//       i
//     )
//     // ;(function (j) {
//     //   setTimeout(function () {
//     //     console.log(j)
//     //   }, 1000)
//     // })(i)
//   }
// }

// func()

// var a = 0

// setInterval(function () {
//   console.log('salam')
//   console.log(++a)
// }, 1000)

// setTimeout(function () {
//   console.log('salam')
// }, 3000)

// var a = `salam ${(function () {
//   console.log('hasan')
//   return 'ali'
// })()}`

// console.log(a)

// ;(function (a, b) {
//   console.log('salam', a + b)
// })(2, 3)

// function Counter () {
//   var counter = 0

//   function increase () {
//     counter++
//     console.log(counter)
//   }

//   function decrease () {
//     counter--
//     console.log(counter)
//   }

//   return {
//     increase,
//     decrease
//   }
// }

// var myCounter = Counter()
// var myCounter2 = Counter()

// console.log(myCounter)

// function func (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }

// // var result = func(2)(5)(7)

// var add10 = func(10)

// console.log(add10(2)(6))
// console.log(add10(12)(6))

// var add25 = func(25)
// console.log(add25(6)(7))

// var add32 = add25(7)

// console.log(add32(8))

// console.log(result)

// func()

// function func () {
//   // var count
//   console.log('salam')
//   console.log(count)
//   var count = 5
// }

// // var a = 'Ali'
// window.a = 'Ali' // Is better
// // a = 'Ali'

// function func () {
//   window.b = 'Hasan'
//   c = 'Qoli'
//   window.a = 'Eli'
//   var g = 'Saeed'

// }

// func()

// function jquery () {

// }

// window.$ = jquery

// var count = 5

// var b = 10

// function func () {
//   var b = 20

//   function func2 () {
//     console.log('func2:', b)
//   }

//   func2()
//   console.log('func:', count)

//   console.log('func:', b)
// }

// func()

// console.log(b)
// console.log(count)

// var obj = {
//   'first-name': 'ali', // firstName
//   'friends-list': [null, { 'last-name': 'Mousavi' }, 'Hasan-Qoli'],
//   'my-family': {}
// }

// function factorial (n) {
//   var result = n

//   for (var i = n - 1; i > 0; i--) {
//     result = result * i
//   }

//   return result
// }

// function factorial (n) {
//   return n === 1 ? 1 : n * factorial(n - 1)
//   //   if (n === 1) {
//   //     return 1
//   //   } else {
//   //     return n * factorial(n - 1)
//   //   }
// }

// console.time('factorial')

// var result = factorial(150)

// console.timeEnd('factorial')

// console.log(result)

// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1
