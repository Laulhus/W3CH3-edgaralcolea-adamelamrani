import ScoreComponent from "./components/ScoreComponent";

describe("Given an ScoreComponent component", () => {
  describe("When instantiated", () => {
    test('It should render a "ul" element', () => {
      const container = document.createElement("div");

      new ScoreComponent(container);

      expect(container.querySelector("ul")).not.toBe("null");
    });
  });

  describe("When clicked on", () => {
    test("It should call a function", () => {
      const container = document.createElement("div");
      const action = jest.fn();

      const element = new ScoreComponent(container, action);
      element.expect(action).toBeCalled();
    });
  });
});
