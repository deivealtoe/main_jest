import express from 'express'

const server = express()
server.use(express.json())

let contadorDeRequisicoes = 0

const middleware = (request, response, next) => {
  contadorDeRequisicoes++
  console.log(`Requisição recebida. ${contadorDeRequisicoes} requisições contadas`)
  next()
}

server.use(middleware)

server.get('/api', (request, response) => {
  response.status(200)
  response.send({
    message: 'Hello, World!'
  })
})

server.listen(3001, () => console.log('Server initialized...'))