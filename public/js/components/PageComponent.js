import series from "../series.js";
import Component from "./Component.js";

export default class PageComponent extends Component {
  seriesList = series;
  constructor(parentElement) {
    super(parentElement, "main", "main");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have ${this.seriesList.length} series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
            </ul>
          </section>
        </section>
      </main>`;
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
