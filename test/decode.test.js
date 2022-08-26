const {
  numbersOnly,
  booleansOnly,
  numbersAndBooleans,
} = require("./test-data");

const decode = require("../shared/decode");

describe("decode function", () => {
  it("decodes numbers properly", () => {
    expect(
      decode(numbersOnly.bitConfig, numbersOnly.encodedValue)
    ).toMatchObject(numbersOnly.decodedValues);
  });

  it("decodes booleans properly", () => {
    expect(
      decode(booleansOnly.bitConfig, booleansOnly.encodedValue)
    ).toMatchObject(booleansOnly.decodedValues);
  });

  it("decodes mixed numbers and booleans properly", () => {
    expect(
      decode(numbersAndBooleans.bitConfig, numbersAndBooleans.encodedValue)
    ).toMatchObject(numbersAndBooleans.decodedValues);
  });
});
