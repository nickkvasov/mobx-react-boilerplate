import { makeObservable, observable, action } from "mobx"

export default class TodoModel {
  id = Math.random()
  title = "";
  finished = undefined;

  constructor(title) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action
    })
    this.title = title
  }

  toggle() {
    this.finished = !this.finished
  }
}
