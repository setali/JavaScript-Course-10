import request from './tools/request'
import renderPage from './render/Page'

request('https://jsonplaceholder.typicode.com/users')
  .then(data => renderPage(data))
  .catch(err => console.log(err))
