import getHelloWorld from '../src/get_hello_world.js'
// const getHelloWorld = require('../src/index.js')

test('Deve retornar o texto "Hello, World!"', () => {
  expect(getHelloWorld()).toBe('Hello, World!')
})
