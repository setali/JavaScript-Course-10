class Person {
  static [Symbol.hasInstance] (instance) {
    if (Array.isArray(instance) || instance === 'Ali') {
      return true
    }
  }
}

const p = new Person()

console.log([] instanceof Person)
console.log(p instanceof Person)
console.log('Ali' instanceof Person)
console.log({} instanceof Person)

// const obj = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32,
//   [Symbol.toPrimitive]: function (hint) {
//     if (hint === 'number') {
//       return this.age
//     }
//     if (hint === 'string') {
//       return `${this.name} ${this.family}`
//     }
//   }
// }

// console.log(+obj)
// console.log(`Hello ${obj}`)

// const sym1 = Symbol.for('name')

// console.log(sym1 === Symbol.for('name'))

// const sym = Symbol()

// const obj = {
//   family: 'Mousavi',
//   age: 32,
//   [sym]: 'Ali'
// }

// for (const key in obj) {
//   console.log(key, obj[key])
// }

// console.log(JSON.stringify(obj))

// console.log(obj[sym])

// const sym1 = Symbol('Ali')

// const sym2 = Symbol('Ali')

// console.log(sym1)

// console.log(sym2)

// console.log(sym1 === sym2)

// const a = NaN

// const b = a ?? 5

// console.log(b)
