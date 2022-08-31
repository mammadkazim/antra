
/*~~~~~~~~~~~View~~~~~~~~~~~~*/
export const View = (() => {
    const domstr = {
      todoList: "list",
      button: ".delete-btn",
      inputBox: ".input-box",
    };
    const render = (elem, templ) => {
      elem.innerHTML = templ;
    };
    const createTempl = (arr) => {
      let templ = "";
      arr.forEach((todo) => {
        templ += `
              <li><span>${todo.id}. ${todo.title}</span><button class="delete-btn" id=${todo.id}>X</button></li>`;
      });
      return templ;
    };
    return {
      render,
      domstr,
      createTempl,
    };
  })();
  