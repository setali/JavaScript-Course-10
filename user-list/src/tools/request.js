export default function request (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.send()

    xhr.onload = function () {
      resolve(JSON.parse(xhr.responseText))
    }

    xhr.onerror = function () {
      reject({
        status: xhr.status
      })
    }
  })
}
