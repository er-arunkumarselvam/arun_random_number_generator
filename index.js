// random number generator in 6 digits
const randomNumberGenerator = (min = 100000, max = 999999) => {
  return Math.round(Math.random() * (max - min) + min);
};

export default randomNumberGenerator;
