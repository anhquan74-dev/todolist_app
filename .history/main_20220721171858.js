let inputElement = document.getElementById("input-text");
let addBtnElement = document.getElementById("add-btn");
let ulElement = document.getElementById("list-item");

ulElement.addEventListener('click', function(e){
  if(e.target.nodeName == 'LI')
})

let tasks = getTasksFromLocalStorage();
renderTasks(tasks);

addBtnElement.addEventListener("click", function () {
  if (!inputElement.value) {
    alert("You must write something!");
    return false;
  }

  let tasks = getTasksFromLocalStorage();
  tasks.push({ name: inputElement.value });
  inputElement.value = "";

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks(tasks);
});

function renderTasks(tasks = []) {
  let content = "";
  tasks.forEach((task) => {
    content += `<li class="item">
                  ${task.name}
                  <a class="edit-btn">Edit</a>
                  <a class="delete-btn">Delete</a>
                </li>`;
  });
  document.getElementById("list-item").innerHTML = content;
}

function getTasksFromLocalStorage() {
  return localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
}
