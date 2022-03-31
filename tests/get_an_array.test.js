import getAnArray from '../src/get_an_array.js'

test('Deve retornar um array', () => {
  expect(Array.isArray(getAnArray())).toBe(true)
})