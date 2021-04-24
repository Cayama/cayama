const returnArrayOfObjects = (previousArrya, objectOrArray) => {
  let newArrayOfObjects;

  if (Array.isArray(objectOrArray)) {
    newArrayOfObjects = objectOrArray;
  } else {
    newArrayOfObjects = [ ...previousArrya, objectOrArray ];
  }

  return newArrayOfObjects
}

export default returnArrayOfObjects;
