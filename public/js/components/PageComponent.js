import series from "../series.js";
import CardComponent from "./CardComponent.js";
import Component from "./Component.js";

export default class PageComponent extends Component {
  pendingSeries = series;
  watchedSeries = [];
  constructor(parentElement) {
    super(parentElement, "main", "main");

    this.generateHTML();
    this.renderSeries();
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

  renderSeries(pendingSeries) {
    this.pendingSeries.forEach((serie) => {
      new CardComponent(
        this.element.querySelector(".series-list"),
        "serie",
        "li",
        serie
      );
    });
  }

  /* renderGentlemenList() {
    const gentlemenContainer = this.element.querySelector(".gentlemen");
    gentlemenContainer.innerHTML = "";
    this.gentlemen.forEach((gentleman) => {
      new GentlemanComponent(gentlemenContainer, "li", gentleman, () =>
        this.toggleGentleman(gentleman.id)
      );
    });
  } */
}
