import React from "react";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import AuthorMenu from "./AuthorMenu";

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = undefined;

  render() {
    return (
      <div>
        {/*<form onSubmit={this.handleFormSubmit}>*/}
        {/*  New Todo:*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    value={this.newTodoTitle}*/}
        {/*    onChange={this.handleInputChange}*/}
        {/*  />*/}
        {/*  <button type="submit">Add</button>*/}
        {/*</form>*/}
        {/*<hr />*/}
        {/*<ul>*/}
        {/*  {this.props.store.todos.map(todo => (*/}
        {/*    <Todo todo={todo} key={todo.id} />*/}
        {/*  ))}*/}
        {/*</ul>*/}
        {/*Tasks left: {this.props.store.unfinishedTodoCount}*/}

          <AuthorMenu>

          </AuthorMenu>

      </div>
    );
  }

  @action
  handleInputChange = e => {
      console.log(e);

      this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
    this.newTodoTitle = undefined;

      e.preventDefault();
  };
}

export default TodoList;
