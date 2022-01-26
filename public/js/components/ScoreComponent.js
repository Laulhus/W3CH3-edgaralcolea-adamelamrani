import Component from "./Component.js";

class ScoreComponent extends Component {
  constructor(parentElement, className, htmlTag, title, actionOnClick) {
    super(parentElement, "icon--score fas fa-star", "i");

    this.addListeners(actionOnClick);
  }

  addListeners(actionOnClick) {
    this.element.addEventListener("click", actionOnClick);
  }
}
