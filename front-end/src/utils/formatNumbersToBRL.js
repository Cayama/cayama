const formatNumberToBRL = (stringOfNumbers) => {
  if (stringOfNumbers == ',') return '';

  const arrayOfPrice = stringOfNumbers.split('');
  const arrayOfPriceNumbersOnly = arrayOfPrice.filter((element) => element !== ',');

  if (arrayOfPriceNumbersOnly.every((number) => /^\d+$/.test(number))) {
    arrayOfPriceNumbersOnly.splice(arrayOfPriceNumbersOnly.length - 2, 0, ',');
    const formatedPriceString = arrayOfPriceNumbersOnly.join('');

    return formatedPriceString
  }
  return stringOfNumbers.slice(0, stringOfNumbers.length - 1)
}

export default formatNumberToBRL;
