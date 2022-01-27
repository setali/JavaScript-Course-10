import { COLUMNS } from '../tools/constants'

export default class User {
  constructor ({ id, name, username, email, address: _address }) {
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this._address = _address
  }

  get address () {
    return `${this._address.city} ${this._address.street} ${this._address.suite}`
  }

  // Mood 1
  //   remove (event) {
  //     event.target.parentElement.remove()
  //   }

  // Mood 1
  //   remove () {
  //     this.parentElement.remove()
  //   }

  // Mood 2
  //   removeById(id) {
  //     document.getElementById(`tr-${id}`).remove()
  //   }

  // Mood 3
  //   removeById() {
  //     document.getElementById(`tr-${this.id}`).remove()
  //   }

  // Mood 4
  removeById = () => {
    document.getElementById(`tr-${this.id}`).remove()
  }

  render () {
    const tr = document.createElement('tr')

    COLUMNS.forEach(column => {
      const td = document.createElement('td')
      td.innerText = this[column.toLowerCase()]
      tr.appendChild(td)
    })

    const removeButton = document.createElement('td')
    removeButton.innerText = 'x'
    removeButton.style.color = 'red'
    removeButton.style.paddingLeft = '10px'
    removeButton.style.cursor = 'pointer'
    // removeButton.addEventListener('click', this.remove) // Mood 1
    // removeButton.addEventListener('click', () => this.removeById(this.id)) // Mood 2
    // removeButton.addEventListener('click', function () { this.removeById(this.id)}) // Mood 2
    // removeButton.addEventListener('click', () => this.removeById()) // Mood 3
    removeButton.addEventListener('click', this.removeById) // Mood 4
    tr.appendChild(removeButton)

    tr.setAttribute('id', `tr-${this.id}`)

    return tr
  }
}
