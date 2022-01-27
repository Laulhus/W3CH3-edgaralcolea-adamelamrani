import Component from "./Component.js";

export default class ScoreComponent extends Component {
  starList;

  constructor(parentElement, actionOnClick) {
    super(parentElement, "score", "ul");

    this.generateHTML();
    // this.addListeners(actionOnClick);
    this.displayEmptyStars();
    this.addListeners(actionOnClick);
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
    this.starList = this.element.querySelectorAll("i");
    this.starList.forEach((star) => {
      star.className = "icon--score far fa-star";
    });
  }

  addListeners(actionOnClick) {
    this.starList.forEach((star) => {
      star.addEventListener("click", actionOnClick);
    });
  }
}
