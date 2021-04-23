module.exports = (previousArrya, objectOrArray) => {
  let newArrayOfObjects;

  if (Array.isArray(objectOrArray)) {
    newArrayOfObjects = objectOrArray;
  } else {
    newArrayOfObjects = [ ...previousArrya, objectOrArray ];
  }

  return newArrayOfObjects
}