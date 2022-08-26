/*~~~~~~~~~~~Api~~~~~~~~~~~~*/
const Api = (() => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const todosPath = "todos";
  const getTodos = () => {
    return fetch([baseUrl, todosPath].join("/")).then((response) =>
      response.json()
    );
  };
  const deleteTodo = () => {};
  return {
    getTodos,
    deleteTodo,
  };
})();

/*~~~~~~~~~~~View~~~~~~~~~~~~*/
const View = (() => {
  const domstr = {
    todoList: "list",
    button: ".delete-btn"
  };
  const render = (elem, templ) => {
    elem.innerHTML = templ;
  };
  const createTempl = (arr) => {
    let templ = "";
    arr.forEach((todo) => {
      templ += `
            <li><span>${todo.title}</span><button class="delete-btn" id=${todo.id}>X</button></li>`;
    });
    return templ;
  };
  return {
    render,
    domstr,
    createTempl,
  };
})();

/*~~~~~~~~~~~Model~~~~~~~~~~~~*/
const Model = ((api) => {
  const { getTodos, deleteTodo } = api;
  return {
    getTodos,
    deleteTodo,
  };
})(Api);

/*~~~~~~~~~~~Controller~~~~~~~~~~~~*/
const Controller = ((model, view) => {
  const init = () => {
    const todoList = document.getElementById(view.domstr.todoList);
    model.getTodos().then((todos) => {
      const templ = view.createTempl(todos);
      console.log(templ);
      view.render(todoList,templ)
      const deleteBtns = document.querySelectorAll(view.domstr.button)
      console.log(deleteBtns);
    });
  };
  return {
    init,
  };
})(Model, View);
Controller.init();
