const firstLetterUpercase = (string) => {
  const upercaseFirstLetter = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  return upercaseFirstLetter;
}

export default firstLetterUpercase;
