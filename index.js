let a = 10,
  b = 5

;[b, a] = [a, b]

console.log(a, b)

// const arr = [1, 2]

// const [a, b, c = 10, ...others] = arr

// console.log(a, b, c, others)

// const person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32,
//   city: 'Tehran'
// }

// const {
//   name: myName,
//   family: myFamily,
//   gender: myGender = true,
//   ...otherProperty
// } = person
// // const name = person.name
// // const family = person.family
// // const { family } = person

// // name = 'hasan'
// console.log(myName, myFamily, myGender)
// console.log(otherProperty)

// const sort = (...args) => args.sort()

// const result = sort(4, 1, 6, 3, 7, 2)

// console.log(result)

// const sum = (a, b, c, ...rest) => {
//   console.log(a, b, c)
//   console.log(rest)
// }

// sum(1, 2, 3, 4, 5, 6, 7)

// const obj = { name: 'Ali' }

// const arr = [1, 2, 3, ...'salam']

// console.log(arr)

// const arr = [1, 2, 3]

// const obj = { name: 'Ali', ...arr }

// console.log(obj)

// const numbers = [4, 9, 3, 11, 25, 4]

// console.log(Math.max.apply({}, numbers))
// console.log(Math.max(...numbers))

// const arr = [4, 5, 6, 7]

// const newArr = [1, 2, 3, ...arr, 8, 9]

// console.log(newArr)

// const obj1 = { name: 'Ali', family: 'Mousavi' }

// const obj2 = { ...obj1, name: 'hasan', age: 32, city: 'Tehran' }

// console.log(obj2)
// const sum = () => {}

// sum(2, 3)

// const Person = (name, family) => {
//   this.name = name
//   this.family = family
// }

// const obj1 = new Person('Ali', 'Mousavi') // Wrong

// console.log(obj1)

// function func () {
//   return {
//     normal: function () {
//       console.log(this)
//     },
//     arrow: () => console.log(this),
//     name: 'Ali'
//   }
// }

// const person = {
//   myName: 'Hasan'
// }
// // const obj = func()
// const obj = func.call(person)

// obj.arrow()

// const myObject = {
//   normal: obj.normal,
//   arrow: obj.arrow
// }

// obj.arrow()
// myObject.arrow.call(person)

// const persons = [
//   { name: 'Ali', age: 32 },
//   { name: 'Eli', age: 27 },
//   { name: 'Qoli', age: 3 },
//   { name: 'Fati', age: 10 }
// ]

// const child = persons.filter(el => el.age <= 12)

// console.log(child)

// const mul = (a, b) => {
//   return a * b
// }

// console.log(mul(2, 5))

// const arr = [1, 2, 3, 4]

// const newArr = arr.map(el => el * 2)

// console.log(newArr)

// const sum = (a, b) => {
//   return a + b
// }
// const sum = (a, b) => a + b

// console.log(sum(5, 3))

// const myName = 'Ali'
// console.log('My name is ' + myName)
// console.log(`My name is ${myName}`)

// const a = 6

// function func () {
//   return 'Hello'
// }

// const str = `Salam ${(function func () {
//   return 'Hello'
// })()} ali`

// console.log(str)

// function func () {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, 1000)
//   }
// }

// func()

// const obj = {
//   a: 10
// }

// obj = {
//   a: 15
// }

// // obj.a = 15

// console.log(obj)
// const a = 5

// a = 10

// let a = 3
// if (true) {
//   let a = 4
//   console.log(a)
// }

// console.log(a)

// let a = 5
// console.log(a)

// a = 10

// console.log(a)

// function func () {
//   var a = 5

//   function func2 () {
//     var a = 60
//   }

//   {
//     let a = 10
//     console.log(a)

//     {
//       let b = 50
//       console.log(a)
//     }
//   }

//   console.log(a)
// }

// func()

// function func () {
//   let b = 5

//   {
//     var a = 2
//     console.log(b)
//   }

//   console.log(a)
// }

// func()

// console.log(varName)

// var varName = 'VAR'

// var varName = 'VAR2'

// // console.log(letName)

// let letName = 'LET'

// // let letName = 'LET2'
