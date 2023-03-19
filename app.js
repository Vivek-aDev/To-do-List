const listElement = document.querySelector("#list");
const createButtonElement = document.querySelector("#create");

let todos = [];

createButtonElement.addEventListener("click", createNewTodo);

function createNewTodo() {
  const item = {
    id: new Date().getTime(),
    text: "",
    complete: false,
  };

  todos.unshift(item);

  const { itemElement, inputElement } = createTodoElement(item);

  listElement.prepend(itemElement);

  inputElement.removeAttribute("disabled");
  inputElement.focus();

  // save
}

{/* <div class="item">
  <input type="checkbox" />
  <input type="text" value="Todo content goes here" disabled />
  <div class="actions">
    <button class="material-icons">edit</button>
    <button class="material-icons remove-btn">remove_circle_outline</button>
  </div>
</div> */}

function createTodoElement(item) {
  const itemElement = document.createElement("div");
  itemElement.classList.add("item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = item.complete;

  if(item.complete){
    
  }
}


