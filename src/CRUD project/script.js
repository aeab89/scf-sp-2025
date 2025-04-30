let todos = [];
let idCounter = 1;

const form = document.getElementById("todo-form");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTodo = {
    id: idCounter++,
    title: titleInput.value.trim(),
    desc: descInput.value.trim(),
    completed: false
  };

  todos.push(newTodo);
  renderTodos();
  form.reset();
});

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
    });

    const todoText = document.createElement("span");
    todoText.innerHTML = `<strong>${todo.title}</strong>: ${todo.desc}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      renderTodos();
    });

    li.appendChild(checkbox);
    li.appendChild(todoText);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}
