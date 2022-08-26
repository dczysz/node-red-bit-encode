module.exports = function encode(bitConfigs, values) {
  let int = 0;

  for (const { property, shift, length, type } of bitConfigs) {
    let value = values[property];

    validate(value, property, length, type);

    if (type === "boolean") {
      if (length === 1) {
        value = [value];
      }

      value = parseInt(value.map(Number).join(""), 2);
    }

    int |= value << shift;
  }

  return int;
};

function validate(value, property, length, type) {
  if (type === "number") {
    if (typeof value !== "number") {
      throw new Error(`Valid integer not provided for property "${property}"`);
    }
    if (value < 0) {
      throw new Error(
        `Value for property "${property}" is not a positive integer`
      );
    }
    if (value > 2 ** length - 1) {
      throw new Error(
        `Value for property "${property}" is too large for ${length} bits`
      );
    }

    return;
  }

  if (type === "boolean") {
    if (length === 1 && typeof value !== "boolean") {
      throw new Error(`Valid boolean not provided for property "${property}"`);
    }
    if (length > 1 && !Array.isArray(value)) {
      throw new Error(
        `Valid boolean array not provided for property "${property}"`
      );
    }
    if (length > 1 && length !== value.length) {
      throw new Error(
        `Invalid boolean array length provided for property "${property}". Expected ${length}, received ${value.length}`
      );
    }
    if (length > 1 && value.some((val) => typeof val !== "boolean")) {
      throw new Error(
        `Invalid array provided for property "${property}", must be an array of booleans`
      );
    }

    return;
  }
}
