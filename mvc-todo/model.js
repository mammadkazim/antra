import { Api } from "./api.js";
import { View } from "./view.js";
export const Model = ((api, view) => {
    const { getTodos, deleteTodo, addTodo } = api;
    class State {
      #todoList = [];
    
      get todoList() {
        return this.#todoList;
      }
  
      set todoList(newlist) {
        this.#todoList = [...newlist];
        const ulContainer = document.getElementById(view.domstr.todoList);
        const templ = view.createTempl(this.#todoList);
        view.render(ulContainer, templ);
      }
    }
  
    class Todo {
      constructor(title){
        this.userId = 5;
        this.title = title;
        this.completed = false
      }
    }
    return {
      getTodos,
      deleteTodo,
      addTodo,
      State,
      Todo,
    };
  })(Api, View);
  