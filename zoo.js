class Animal {
  constructor (type) {
    this.type = type
  }

  eat () {
    console.log('HUM HUM')
  }
}

class Cat extends Animal {
  constructor (name, color) {
    super('CAT')
    this.name = name
    this.color = color
  }

  eat () {
    console.log('HOOOM HOOOM')
    super.eat()
  }

  speak () {
    console.log('MIO MIO')
  }
}

class PersianCat extends Cat {
  constructor (name, color, weight) {
    super(name, color)
    this.weight = weight
  }

  speak () {
    console.log('MIU MIU')
  }

  attack () {
    console.log('KHESH')
  }
}

const cat = new PersianCat('Pishi', 'White', 3)

console.log(cat instanceof Object)

// cat.speak()
// cat.attack()

// const cat1 = new Cat('Makhmal', 'brown')

// console.log(cat1.name)
// console.log(cat1.type)

// cat1.eat()
// cat1.speak()

// console.log(cat1)

// const animal1 = new Animal('CAT')

// animal1.eat()
