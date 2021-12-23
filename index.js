function setCookie (name, value, time, path = '/') {
  var date = new Date()
  date.setSeconds(date.getSeconds() + time)
  document.cookie =
    name + '=' + value + ';expires=' + date.toUTCString() + ';path=' + path
}

setCookie('name', 'Ali', 10)
// setCookie('family', 'Mousavi', 10)
