// var person = {
//   name: 'Ali',
//   family: 'Mousavi'
// }

// console.log(Object.keys(person))

// var entries = Object.entries(person)

// console.log(entries)

// for (var el of entries) {
//   console.log(el[0], el[1])
// }

// var person = {
//   name: 'Ali'
// }

// person.family = 'Mousavi'

// Object.defineProperty(person, 'age', {
//   //   value: 32,
//   //   writable: false
//   //   enumerable: false,
//   //   configurable: false,
//   set: function (value) {
//     this._age = +value
//   },
//   get: function () {
//     return this._age
//   }
// })

// Object.defineProperty(person, 'fullName', {
//   //   value: 'a',
//   //   writable: true,
//   get: function () {
//     return this.name + ' ' + this.family
//   },
//   set: function (value) {
//     var arr = value.split(' ')
//     this.name = arr[0]
//     this.family = arr[1]
//   }
// })

// console.log(person.fullName)

// person.fullName = 'Hasan Hasani'

// console.log(person)
// console.log(person.age)

// person.age = '25'

// console.log(typeof person.age)

// console.log(person)

// delete person.age

// console.log(person)

// person.age = 25

// for (var key in person) {
//   console.log(key)
// }

// console.log('age' in person)

// console.log(person)

// var person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32,
//   friends: ['Ali', 'Eli', 'Qoli', 'Fati'],
//   gender: true,
//   education: undefined,
//   getFullName: function () {},
//   birthday: new Date()
// }

// console.log(person)

// var personJson = JSON.stringify(person)

// console.log(personJson)

// var newPerson = JSON.parse(personJson)

// console.log(newPerson)

// newPerson.name = 'Hasan'

// console.log(person)
// console.log(newPerson)

// var obj1 = {
//   a: 10,
//   //   b: #12EB14
//   b: {
//     c: 20
//   },
//   d: 20
// }

// var obj3 = {
//   d: 40
// }

// // var obj2 = obj1

// // var obj2 = {}
// // Object.assign(obj2, obj1)

// // var obj2 = Object.assign({}, obj1)

// var obj2 = JSON.parse(JSON.stringify(obj1))

// obj2.a = 50
// obj2.b.c = 90

// console.log(obj1)
// console.log(obj2)

// console.log(obj1.b === obj2.b)
// console.log(newObj === obj2)

// var obj = Object.create(null)

// console.log(obj)

// var proto = {
//   family: 'Mousavi',
//   getFullName: function () {
//     return this.name + ' ' + this.family
//   }
// }

// var obj = Object.create(proto)

// obj.name = 'Ali'
// // obj.family = 'Hasani'

// console.log(obj.getFullName())

// function Func () {}

// var obj = {}

// var obj2 = new Func()

// var numbers = [2, 6, 9, 24, 3, 16]

// var result = Math.max.apply(null, numbers)
// // var result = Math.max(2, 6, 9, 24, 3, 16)

// console.log(result)

// var firstName = 'Ali',
//   lastName = 'Mousavi'

// function welcome (greeting) {
//   console.log(this)
//   console.log(greeting + ' ' + this.firstName + ' ' + this.lastName)
// }

// welcome('Hello')

// var obj5 = {
//   firstName: 'Zahra',
//   lastName: 'Barzegar'
// }

// var newFunc = welcome.bind(obj5)

// newFunc.apply(null, ['Hi'])

// var obj1 = {
//   firstName: 'Mohammad',
//   lastName: 'Torki'
// }

// welcome.call(obj1, 'Hi')

// var obj2 = {
//   firstName: 'Sajjad',
//   lastName: 'Karimian'
// }

// welcome.call(obj2, 'Salam')

// var obj3 = {
//   firstName: 'Elahe',
//   lastName: 'Saadati'
// }

// welcome.apply(obj3, ['Hello'])

// var family = 'Mousavi'

// function getFamily () {
//   console.log(this.family)
// }

// var ranjbar = {
//   family: 'Ranjbar',
//   getFamily
// }

// var chegini = {
//   family: 'Chigini',
//   getFamily: getFamily.bind(window)
// }

// getFamily()

// ranjbar.getFamily()

// chegini.getFamily()

// function Something () {
//   return 'salam'
// }
// var something = new Something()
// console.log(something)

// var a = 20

// function getA () {
//   //   this.family = 'Mousavi'
//   console.log('getA', this)
// }

// // console.log(this)

// // console.log(window)

// var obj = new getA()

// console.log('obj', obj)

// var obj = {
//   a: function () {
//     console.log(this)
//   },
//   b: {
//     c: function () {
//       console.log(this)
//     },
//     d: 20
//   }
// }

// obj.b.c()

// var obj1 = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32,
//   getFullName: function () {
//     console.log(this)
//     return this.name + ' ' + this.family
//   }
// }

// console.log(obj1.getFullName())

// console.log(this === window)

// function Person (name, family, age) {
//   //   var this = {}

//   this.name = name
//   this.family = family
//   this.age = age

//   this.getFullName = function () {
//     return this.name + ' ' + this.family
//   }

//   //   return this
// }

// var obj1 = new Person('Ali', 'Mousavi', 32)

// var obj2 = new Person('Hasan', 'Hasani', 20)

// console.log(obj1.getFullName())
// console.log(obj2.getFullName())

// console.log(obj1 instanceof Person)

// var obj = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32,
//   getFullName: function () {
//     return obj.name + ' ' + obj.family
//   }
// }

// var obj2 = {
//   name: 'Qoli',
//   family: 'Hasani',
//   age: 22,
//   getFullName: function () {
//     return obj2.name + ' ' + obj2.family
//   }
// }

// console.log(obj.getFullName())
// console.log(obj2.getFullName())
