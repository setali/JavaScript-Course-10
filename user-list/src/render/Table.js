import User from '../entity/User'
import renderTableHead from './TableHead'
import '../assets/css/table.css'

export default function renderTable (users) {
  const table = document.createElement('table')
  table.setAttribute('border', 1)
  // table.setAttribute('width', '100%')
  table.appendChild(renderTableHead())

  users.forEach(el => {
    const user = new User(el)
    table.appendChild(user.render())
  })

  return table
}
