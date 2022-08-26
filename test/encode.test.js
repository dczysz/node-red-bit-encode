const {
  numbersOnly,
  booleansOnly,
  numbersAndBooleans,
} = require("./test-data");

const encode = require("../shared/encode");

describe("encode function", () => {
  // Numbers
  it("encodes numbers properly", () => {
    expect(encode(numbersOnly.bitConfig, numbersOnly.decodedValues)).toBe(
      numbersOnly.encodedValue
    );
  });

  it("throws if invalid number", () => {
    expect(() =>
      encode(numbersOnly.bitConfig, { first: 123, last: "45" })
    ).toThrow();
  });

  it("throws if negative number", () => {
    expect(() =>
      encode(numbersOnly.bitConfig, { first: 123, last: -45 })
    ).toThrow();
  });

  it("throws if number too large for `size`", () => {
    expect(() =>
      encode(numbersOnly.bitConfig, { first: 123456, last: 45 })
    ).toThrow();
  });

  // Booleans
  it("encodes booleans properly", () => {
    expect(encode(booleansOnly.bitConfig, booleansOnly.decodedValues)).toBe(
      booleansOnly.encodedValue
    );
  });

  it("throws if not a valid boolean", () => {
    expect(() =>
      encode(booleansOnly.bitConfig, {
        first: [true, false, true, false, true, false, true, false],
        last: "true",
      })
    ).toThrow();
  });

  it("throws if array not provided for length > 1", () => {
    expect(() =>
      encode(booleansOnly.bitConfig, {
        first: true,
        last: true,
      })
    ).toThrow();
  });

  it("throws if array is incorrect length", () => {
    expect(() =>
      encode(booleansOnly.bitConfig, {
        first: [true, false, true, false],
        last: true,
      })
    ).toThrow();
  });

  it("throws if array contains a non-boolean value", () => {
    expect(() =>
      encode(booleansOnly.bitConfig, {
        first: [true, "false", true, false, true, false, true, false],
        last: true,
      })
    ).toThrow();
  });

  // Numbers and booleans mixed
  it("encodes mixed numbers and booleans properly", () => {
    expect(
      encode(numbersAndBooleans.bitConfig, numbersAndBooleans.decodedValues)
    ).toBe(numbersAndBooleans.encodedValue);
  });
});
