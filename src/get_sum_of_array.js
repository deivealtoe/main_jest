const getSumOfArray = (numbersArray) => {
  let sum = 0;

  if (numbersArray) {
    numbersArray.forEach(number => {
      if (typeof number === 'number') {
        sum += number
      }
    })
  }

  return sum
}

export default getSumOfArray