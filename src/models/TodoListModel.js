import {observable, computed, action, makeObservable} from "mobx";

import TodoModel from "./TodoModel";

export default class TodoListModel {
  todos = undefined;

  constructor() {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      addTodo: action
    })
    this.todos = [];
  }


  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  addTodo(title) {
    console.log("addTodo");
    console.log(title);
    this.todos.push(new TodoModel(title));
  }
}
