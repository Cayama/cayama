const formDataArrayOfObjects = (form, array, key) => {
  array.forEach(({ size, stockQuantity }) => {
    form.append({ [size]: stockQuantity }, key);
  });
}

export default formDataArrayOfObjects;