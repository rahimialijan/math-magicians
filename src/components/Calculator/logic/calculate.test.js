const calculate = require("./calculate").default;

test("AC button should reset the calculator state", () => {
  const initialState = {
    total: "100",
    text: "500",
    operation: "+",
  };

  const expectedState = {
    total: null,
    text: null,
    operation: null,
  };

  const newState = calculate(initialState, "AC");

  expect(newState).toEqual(expectedState);
});
