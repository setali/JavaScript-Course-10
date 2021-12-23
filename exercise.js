////////// 14

var ali = {}

ali.ali = ali

///////// 13

function power (a, b) {
  return b === 1 ? a : a * power(a, b - 1)

  // var result = a

  // for (var i = 1; i < b; i++) {
  //   result *= a
  // }

  // return result
}

// console.log(power(2, 10))

/////// 12

// var number = 16

// if (number % 2) {
//   console.log('Odd')
// } else {
//   console.log('Even')
// }

// number % 2 ? console.log('Odd') : console.log('Even')

// console.log(number % 2 ? 'Odd' : 'Even')

// switch (number % 2) {
//   case 1:
//     console.log('Odd')
//     break

//   case 0:
//     console.log('Even')
//     break
// }

/////// 11

function callbackOperation (cb) {
  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers[i - 1] = arguments[i]
  }

  return cb.apply(null, numbers)
}

// console.log(callbackOperation(subtraction, 10, 2, 3))

/////// 10

function operate (operator) {
  // var operator = arguments[0]

  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers[i - 1] = arguments[i]
  }

  switch (operator) {
    case 'sum':
      return sum.apply(null, numbers)

    case 'sub':
      return subtraction.apply(null, numbers)

    case 'mul':
      return multiply.apply(null, numbers)

    case 'div':
      return division.apply(null, numbers)

    default:
      return 0
  }
}

// console.log(operate('div', 10, 2, 3))

////// 9

function sum () {
  var result = 0

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }

  return result
}

function multiply () {
  var result = 1

  for (var i = 0; i < arguments.length; i++) {
    result *= arguments[i]
  }

  return result
}

function subtraction () {
  var result = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    result -= arguments[i]
  }

  return result
}

function division () {
  var result = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    result /= arguments[i]
  }

  return result
}

// console.log(division(21, 3, 7))

/////// 8

// function getFullName (obj) {
//   return obj.firstName + ' ' + obj.lastName
// }

// console.log(getFullName(ali))

//////// 7

// function printFriends (obj) {
//   for (var friend of obj.friends) {
//     console.log(friend)
//   }
// }

// printFriends(ali)

/////// 6

// ;[] == ![]

////// 5

// 100 ==> boolean
// 010 ==> string
// 001 ==> number
// 000 ==> object

// 00000000000000000000000000000000000000000

////// 4

// var ali = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   age: 32,
//   family: {
//     father: 'Mohammad',
//     mother: 'Hajar'
//   },
//   friends: ['Ali', 'ELi', 'Qoli', 'Fati']
// }

/////  1

// var firstName = 'Ali',
//   lastName = 'Mousavi',
//   age = 32,
//   city = 'Shiraz'

// console.log(
//   'My name is ' +
//     firstName +
//     ' ' +
//     lastName +
//     '\n\t => I have ' +
//     age +
//     ' years old' +
//     "\n\t => I'm living in " +
//     city
// )
