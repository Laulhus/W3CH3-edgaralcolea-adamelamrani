import Component from "./Component.js";

export default class ScoreComponent extends Component {
  constructor(parentElement, className, htmlTag) {
    super(parentElement, "score", "ul");

    this.generateHTML();
    // this.addListeners(actionOnClick);
    this.displayEmptyStars();
  }

  generateHTML() {
    this.element.innerHTML = `<li class="score__star">
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
                  </li>`;
  }

  displayEmptyStars() {
    const starList = this.element.querySelectorAll("i");
    starList.forEach((star) => {
      star.style.fontWeight = 100;
    });
  }

  addListeners(actionOnClick) {
    this.element.addEventListener("click", actionOnClick);
  }
}
