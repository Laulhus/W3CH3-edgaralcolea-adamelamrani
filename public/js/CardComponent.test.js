import CardComponent from "./components/CardComponent";

describe("Given a CardComponent component", () => {
  describe("When instantiated", () => {
    test("It should render an element", () => {
      const container = document.createElement("div");
      const mockSerie = {
        id: 1,
        name: "The Sopranos",
        creator: "David Chase",
        year: 1999,
        poster:
          "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        watched: true,
        score: 5,
        emmies: 21,
      };

      const card = new CardComponent(container, "", "", mockSerie);

      expect(container.innerHTML).not.toBe(null);
    });
  });

  describe("When given an object", () => {
    test("It should store the object name", () => {
      const container = document.createElement("div");
      const mockSerie = {
        id: 1,
        name: "The Sopranos",
        creator: "David Chase",
        year: 1999,
        poster:
          "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        watched: true,
        score: 5,
        emmies: 21,
      };

      const card = new CardComponent(container, "", "", mockSerie);

      expect(card.serie.name).toBe(mockSerie.name);
    });
  });
});
