import Component from "./public/js/components/Component.js";

describe("Given a Component", () => {
  describe("When it receives a 'div' element", () => {
    test("Then it should not be null", () => {
      const element = "div";
      const body = document.createElement("body");

      const expectedOutput = new Component(body, "", element);

      expect(expectedOutput).not.toBeNull();
    });
  });
});
