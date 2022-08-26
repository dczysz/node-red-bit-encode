module.exports = function decode(bitConfigs, value) {
  const obj = {};

  for (const { property, shift, length, type } of bitConfigs) {
    const intValue = (value >> shift) & (2 ** length - 1);

    if (type === "boolean") {
      if (length > 1) {
        obj[property] = [];

        for (let i = 1; i <= length; i++) {
          obj[property].push(Boolean((intValue >> (length - i)) & 1));
        }
      } else {
        obj[property] = Boolean(intValue);
      }
    } else {
      obj[property] = intValue;
    }
  }

  return obj;
};
