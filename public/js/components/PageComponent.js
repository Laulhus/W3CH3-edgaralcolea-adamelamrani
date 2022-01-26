import series from "../series.js";
import CardComponent from "./CardComponent.js";
import Component from "./Component.js";
import ScoreComponent from "./ScoreComponent.js";

export default class PageComponent extends Component {
  pendingSeries = series;
  watchedSeries = [];
  constructor(parentElement) {
    super(parentElement, "main", "main");

    this.generateHTML();
    this.renderPendingSeries();
  }

  generateHTML() {
    this.element.innerHTML = `<main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have ${this.pendingSeries.length} series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched ${this.watchedSeries.length} series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
            </ul>
          </section>
        </section>
      </main>`;
  }

  renderPendingSeries(pendingSeries) {
    this.pendingSeries.forEach((serie) => {
      const showCard = new CardComponent(
        this.element.querySelector(".series-list"),
        "serie",
        "li",
        serie
      );
      const showScore = new ScoreComponent(
        showCard.element,
        "score",
        "ul",
        () => {
          this.showWatched(showCard.serie.id);
        }
      );
    });
  }

  renderWatchedSeries(watchedSeries) {
    this.watchedSeries.forEach((serie) => {
      const showCard = new CardComponent(
        this.element.querySelector(".series-list--watched"),
        "serie",
        "li",
        serie
      );
    });
  }

  showWatched(id) {
    let pendingCopy = [...this.pendingSeries];
    const showWatched = pendingCopy.find((serie) => serie.id === id);
    pendingCopy = pendingCopy.filter((serie) => serie.id !== id);
    this.watchedSeries.push(showWatched);
    this.pendingSeries = pendingCopy;
    this.element.innerHTML = "";
    this.generateHTML();
    this.renderPendingSeries();
    this.renderWatchedSeries();
  }
}
