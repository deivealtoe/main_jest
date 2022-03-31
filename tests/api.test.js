import axios from 'axios'

it('Deve retornar status 200', async () => {
  const response = await axios.get('http://127.0.0.1:3001/api')

  await expect(response.status).toBe(200)
})

it('Deve retornar atributo "message" contendo "Hello, World!"', async() => {
  const response = await axios.get('http://127.0.0.1:3001/api')
  
  await expect(response.data.message).toBe('Hello, World!')
})

it('Deve retornar "statusText" igual a "OK"', async () => {
  const response = await axios.get('http://127.0.0.1:3001/api')

  await expect(response.statusText).toBe('OK')
})