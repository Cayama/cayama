const formDataArray = (form, array, key) => {
  array.forEach((value) => {
    form.append(key, value);
  });
}

export default formDataArray;
