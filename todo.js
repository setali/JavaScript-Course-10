var root = document.getElementById('root')

var todoList = document.createElement('ol')

var form = document.createElement('form')
form.addEventListener('submit', function (event) {
  event.preventDefault()

  var value = input.value

  if (!value) return

  addTodo(value)
  saveTodo(value)

  input.value = ''
  input.focus()
})

var input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Todo')

var button = document.createElement('button')
button.setAttribute('type', 'submit')
button.innerText = 'Add'

form.appendChild(input)
form.appendChild(button)

root.appendChild(form)
root.appendChild(todoList)

function addTodo (value) {
  var todo = document.createElement('li')
  todo.textContent = value

  var deleteIcon = document.createElement('span')
  deleteIcon.textContent = 'x'

  deleteIcon.style.color = 'red'
  deleteIcon.style.margin = '0 10px'
  deleteIcon.style.cursor = 'pointer'

  deleteIcon.addEventListener('click', function (event) {
    event.target.parentElement.remove()
    removeTodo(value)
  })

  todo.appendChild(deleteIcon)

  todoList.appendChild(todo)
}

function getTodos () {
  var todosString = localStorage.getItem('todos')
  return todosString ? JSON.parse(todosString) : []
}

function saveTodos (todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function saveTodo (value) {
  var todos = getTodos()
  todos.push(value)
  saveTodos(todos)
}

function removeTodo (todo) {
  var todos = getTodos()
  var newTodos = todos.filter(function (el) {
    return el !== todo
  })

  saveTodos(newTodos)
}

function loadTodos () {
  var todos = getTodos()
  todos.forEach(function (todo) {
    addTodo(todo)
  })
}

loadTodos()
