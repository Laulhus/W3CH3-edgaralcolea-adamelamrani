import Component from "./Component.js";

class CardComponent extends Component {
  serie;

  constructor(parentElement, htmlTag, serie) {
    super(parentElement, htmlTag);
    this.serie = serie;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
    <li class="serie">
                <img
                  class="serie__poster"
                  src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                  alt="${this.serie.name} poster"
                />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.series.creator} ${this.serie.year}</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              </li>`;
  }
}
