// function Animal (type) {
//   this.type = type
//   this.eat = function () {
//     console.log('HUM HUM')
//   }
// }

// function Cat (name) {
//   this.name = name
//   this.speak = function () {
//     console.log('MIO MIO')
//   }
// }

// Cat.__proto__ = new Animal('CAT')

// const a = new Cat('Pishi')

// console.log(a)

// class Person {
//   // static city = 'Tehran'

//   constructor (name, family) {
//     console.log(name, family)
//     this.name = name
//     this.family = family
//   }

//   getFullName () {
//     return `${this.name} ${this.family} ${this.city}`
//   }
// }

// Person.city = 'Tehran'

// const ali = new Person('Ali', 'Mousavi')
// console.log(ali.getFullName())
// console.log(ali.city)
// console.log(Person.city)

// function Person (name, family) {
//   this.name = name
//   this.family = family
//   this.getFullName = function () {
//     return `${this.name} ${this.family}`
//   }
// }

// const mohammad = new Person('Mohammad', 'Torki')
// console.log(mohammad.getFullName())

// function sleep (time, value) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(value)
//     }, time * 1000)
//   })
// }

// async function aFunc () {
//   const arr = [1, 2, 3, 4, 5]

//   for (let i = 0; i < arr.length; i++) {
//     await sleep(1)
//     console.log(arr[i])
//   }

//   // arr.forEach(async el => {
//   //   await sleep(3)
//   //   console.log(el)
//   // })
// }

// aFunc()

// async function aFunc () {
//   for (let i = 0; i < 5; i++) {
//     await sleep(1)
//     console.log(i)
//   }
// }

// aFunc()

// async function aFunc () {
//   console.log(1)
//   const data = await sleep(2, 'Ali')
//   console.log('salam', data)

//   const data2 = await sleep(1, 'Eli')
//   console.log(2, data2)
// }

// aFunc()

// function prom () {
//   return new Promise(resolve => resolve('salam'))
// }

// function prom () {
//   return Promise.resolve('salam')
// }

// async function aFunc () {
//   return 'salam'
// }

// aFunc().then(data => console.log(data))

// function request (url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => resolve({ data }))
//       .catch(err => reject(err))
//   })
// }

// request('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => console.log(response.data))
//   .catch(err => console.log(err))

// function request (url, method = 'GET') {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)
//     xhr.send()

//     xhr.onload = function () {
//       if (xhr.status < 400) {
//         resolve({
//           body: {},
//           text: () => {},
//           json: () => {
//             return new Promise((resolve, reject) => {
//               try {
//                 const result = JSON.parse(xhr.response)
//                 resolve(result)
//               } catch (err) {
//                 reject(err)
//               }
//             })
//           }
//         })
//       } else {
//         reject('There is an error')
//       }
//     }

//     xhr.onerror = function () {
//       reject('There is an error')
//     }
//   })
// }

// request('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// function request (url, method = 'GET') {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)
//     xhr.send()

//     xhr.onload = function () {
//       if (xhr.status < 400) {
//         resolve({
//           config: {},
//           data: JSON.parse(xhr.response)
//         })
//       } else {
//         reject('There is an error')
//       }
//     }

//     xhr.onerror = function () {
//       reject('There is an error')
//     }
//   })
// }

// request('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// axios('https://jsonplaceholder.typicode.com/users/9')
//   .then(response => console.log(response.data))
//   .catch(err => console.log(err))

// function powerBigInt (a, b) {
//   return new Promise((resolve, reject) => {
//     if (typeof a !== 'bigint' || typeof b !== 'bigint') {
//       reject('Numbers must be Big Int')
//     }

//     resolve(a ** b)
//   })
// }

// console.log(1)

// powerBigInt(9999999n, 999999n)
//   .then(result => console.log(result))
//   .catch(err => console.log(err))

// // setTimeout(() => {
// // const a = 9999999n ** 999999n
// // console.log(a)
// // }, 0)

// console.log(2)

// function sleep (time, value) {
//   return new Promise((resolve, reject) => {
//     if (typeof time === 'number') {
//       setTimeout(() => {
//         const result = value ** 2
//         resolve(result)
//       }, time * 1000)
//     } else {
//       reject('Time must be a number.')
//     }
//   })
// }

// sleep(1)
//   .then(() => {
//     console.log('then 1')
//     return 'Ali'
//   })
//   .then(name => console.log(name))

// console.log(1)

// sleep(2).then(() => console.log('Salam'))

// console.log(2)

// sleep(4).then(() => console.log('Hello'))

// console.log(3)
// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('My Error')
//   }, 1000)
// })

// prom
//   .then(() => {
//     console.log('Then')
//   })
//   .catch(err => {
//     console.log(err)
//   })
