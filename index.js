const express = require('express')

const app = express()

app.get('/', (request, response) => {
  console.log(new Date())
  response.send('Olá')
})

app.listen(3000, err => {
  if (err) {
    console.log('Nao foi possivel iniciar o servidor do Jobify')
  } else {
    console.log('Servidor do jobify rodando...')
  }
})
