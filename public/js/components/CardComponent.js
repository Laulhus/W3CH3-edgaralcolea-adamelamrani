import Component from "./Component.js";

export default class CardComponent extends Component {
  serie;
  actionOnClick;

  constructor(parentElement, className, htmlTag, serie) {
    super(parentElement, className, htmlTag);
    this.serie = serie;
    this.generateHTML();
    this.addListener();
  }

  generateHTML() {
    this.element.innerHTML = `
                <img
                  class="serie__poster"
                  src=${this.serie.poster}
                  alt="${this.serie.name} poster"
                />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
                <i class="fas fa-times-circle icon--delete"></i>`;
  }

  addListener() {
    this.element.querySelector(".icon-delete");
    this.element.addEventListener("click", () => {
      const deleteSerie = [...this.deleteSerie];
      const deleteCard = deleteSerie.find((serie) => serie.id === id);
      deleteCard.filter((serie) => serie.id !== id);
      this.removedSeries = deleteCard;
      this.element.innerHTML = "";
      this.generateHTML();
      this.renderPendingSeries();
      this.renderWatchedSeries();
    });
  }
}
