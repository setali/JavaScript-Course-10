import renderHead from './Head'
import renderTable from './Table'
import '../assets/scss/page.scss'

export default function renderPage (users) {
  const root = document.getElementById('root')

  root.appendChild(renderHead())
  root.appendChild(renderTable(users))
}
