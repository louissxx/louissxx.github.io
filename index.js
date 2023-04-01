fetch('http://localhost:3000/proxy')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));