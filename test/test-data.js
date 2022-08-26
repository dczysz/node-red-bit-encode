// 16 bits - [last,last,last,last,last,last,last,last,first,first,first,first,first,first,first,first]
const numbersOnly = {
  bitConfig: [
    { property: "first", shift: 0, length: 8, type: 'number' },
    { property: "last", shift: 8, length: 8, type: 'number' },
  ],
  decodedValues: {
    first: 123,
    last: 45,
  },
  encodedValue: 11643,
};

// 9 bits - [last,first,first,first,first,first,first,first,first]
const booleansOnly = {
  bitConfig: [
    { property: "first", shift: 0, length: 8, type: 'boolean' },
    { property: "last", shift: 8, length: 1, type: 'boolean' },
  ],
  decodedValues: {
    first: [true, false, true, false, true, false, true, false],
    last: true,
  },
  encodedValue: 426,
};

// 7 bits - [last,last,middle,first,first,first,first]
const numbersAndBooleans = {
  bitConfig: [
    { property: "first", shift: 0, length: 4, type: 'number' },
    { property: "middle", shift: 4, length: 1, type: 'boolean' },
    { property: "last", shift: 5, length: 2, type: 'boolean' },
  ],
  decodedValues: {
    first: 8,
    middle: false,
    last: [true, false],
  },
  encodedValue: 72,
}

module.exports = {
  numbersOnly,
  booleansOnly,
  numbersAndBooleans,
}
