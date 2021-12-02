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

console.log(division(21, 3, 7))

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
