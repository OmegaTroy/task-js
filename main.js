const $Selector = (Selector) => document.querySelector(Selector);
const $form = document.getElementById("form");
const $input = $Selector("#form__input");
const $body = $Selector(".body");
const $tasks = $Selector("#tasks");
let id = Math.random();

const removeElement = (id) => {
  document.getElementById(id).remove();
};

function errors() {
  const $errors = document.createElement("span");
  $errors.textContent = "no se puede crear una tarea vacia";
  $errors.classList.add("form__errors");
  setTimeout(() => {
    $errors.remove();
  }, 3000);
  $body.append($errors);
}

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = $input.value;

  if (inputValue === "") {
    return errors();
  }

  let task = document.createElement("li");
  task.classList.add("task");
  inputValue = inputValue[0].toUpperCase() + inputValue.slice(1);
  task.setAttribute("id", id++);
  task.innerText = inputValue;
  task.addEventListener("click", () => {
    task.classList.add("complete");
  });

  task.addEventListener("dblclick", () => {
    let elementId = task.getAttribute("id");
    removeElement(elementId);
  });
  $input.value = "";
  $tasks.appendChild(task);
});
