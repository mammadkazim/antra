/*~~~~~~~~~~~Api~~~~~~~~~~~~*/
export const Api = (() => {
    const baseUrl = "http://localhost:3000";
    const todosPath = "todos";
  
    const getTodos = () => {
      return fetch([baseUrl, todosPath].join("/")).then((response) =>
        response.json()
      );
    };
  
    const deleteTodo = (id) => {
      return fetch([baseUrl, todosPath, id].join("/"), { method: "DELETE" }).then(
        (response) => response.json()
      );
    };
  
    const addTodo = (newTodo) => {
      return fetch([baseUrl, todosPath].join("/"), {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json());
    };
    return {
      getTodos,
      deleteTodo,
      addTodo
    };
  })();