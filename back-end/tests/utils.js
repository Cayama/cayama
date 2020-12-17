const generateFakeCpf = () => {
  const cpfArr = [];
  for (let i = 0; i < 11; i += 1) {
    cpfArr.push(Math.floor(Math.random() * 9).toString());
  }
  return cpfArr.join('');
};

module.exports = {
  generateFakeCpf,
};
