import ScoreComponent from "./components/ScoreComponent";

describe("Given an ScoreComponent component", () => {
  describe("When instantiated", () => {
    test('It should render a "ul" element', () => {
      const container = document.createElement("div");

      new ScoreComponent(container);

      expect(container.querySelector("ul")).not.toBe(null);
    });
  });

  describe("When clicked on any of its childs", () => {
    test("It should call a function", () => {
      const container = document.createElement("div");
      const action = jest.fn();

      const score = new ScoreComponent(container, action).starList;
      score[0].click(action);
      expect(action).toHaveBeenCalled();
    });
  });
});
