import Component from "./Component.js";

export default class DeleteButton extends Component {
  constructor(parentElement, className, actionOnClick) {
    super(parentElement, className);

    this.addListeners(actionOnClick);
  }

  addListeners(actionOnClick) {
    this.element.addEventListener("click", actionOnClick);
  }
}
