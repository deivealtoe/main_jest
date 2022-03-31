import getSumOfArray from '../src/get_sum_of_array.js'

test('Deve retornar o valor 25', () => {
  expect(getSumOfArray([25])).toBe(25)
})

test('Deve retornar o valor 12', () => {
  expect(getSumOfArray([5, 5, 2])).toBe(12)
})

test('Deve retornar o valor 100', () => {
  expect(getSumOfArray([50, 20, 20, 5, 5])).toBe(100)
})

test('Deve retornar o valor 0', () => {
  expect(getSumOfArray([0])).toBe(0)
})

test('Deve retornar o valor 0', () => {
  expect(getSumOfArray()).toBe(0)
})