import {Model} from "./model.js"
import {View} from "./view.js"
export const Controller = ((model, view) => {
    const state = new model.State();
  
    const deleteTodo = () => {
      const ulContainer = document.getElementById(view.domstr.todoList);
      ulContainer.addEventListener("click", (e) => {
        if (e.target.className === "delete-btn") {
          state.todoList = state.todoList.filter(
            (item) => +item.id !== +e.target.id
          );
          model.deleteTodo(e.target.id);
        }
      });
    };
    const addTodo = () => {
      const inputBox = document.querySelector(view.domstr.inputBox);
      inputBox.addEventListener("keyup",(e)=>{
        if(e.code === "Enter" && e.target.value.trim()) {
          const newTodo = new model.Todo(e.target.value)
          model.addTodo(newTodo).then(item=>{
            console.log(item)
            state.todoList = [item,...state.todoList]
          })
          e.target.value = ''
        }
      })
  
    };
  
    
    const init = () => {
      model.getTodos().then((todos) => {
        console.log(todos)
        state.todoList = todos.reverse();
      });
    };
  
  
    const bootstrap = () => {
      init();
      deleteTodo();
      addTodo();
    };
    return {
      bootstrap,
    };
  })(Model, View);