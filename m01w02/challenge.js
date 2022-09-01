// IMPLEMENT MAP FUNCTION
const map = (array, cb) => {
  const result = [];

  for (const element of array) {
    // console.log(element);
    result.push(cb(element));
  }

  return result;
};

const myArray = ['Ernie', 'Megan', 'Sarah', 'Pedro'];
console.log(myArray);

const myMapResult = map(myArray, string => `${string} 🚀`);
console.log(myMapResult);

// IMPLEMENT FOREACH FUNCTION
const forEach = (array, cb) => {
  for (const element of array) {
    console.log(cb(element));
  }
};

forEach(myArray, string => `${string} 🚀`);

// IMPLEMENT FILTER
const filter = (array, cb) => {
  const result = [];

  for (const element of array) {
    if (cb(element)) {
      result.push(element);
    }
  }

  return result;
};

const myNumbersArray = [53, 36, 80, 93, 10, 30, 14];
console.log(myNumbersArray);

const myFilterResultGT50 = filter(myNumbersArray, num => num > 50);
const myFilterResultLT50 = filter(myNumbersArray, num => num < 50);
console.log(myFilterResultGT50);
console.log(myFilterResultLT50);
