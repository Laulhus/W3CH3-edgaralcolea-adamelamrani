import series from "../series.js";
import Component from "./Component.js";

export default class CardComponent extends Component {
  serie;

  constructor(parentElement, className, htmlTag, serie) {
    super(parentElement, className, htmlTag);
    this.serie = serie;
    this.generateHTML();
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
}
