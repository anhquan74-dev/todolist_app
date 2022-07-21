let inputElement = document.getElementById("input-text");
let addBtnElement = document.getElementById("add-btn");
let ulElement = document.getElementById("list-item");

// tu localstorage ta lay du lieu do vao mot
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

// bat su kien khi click vao li cua ul (nghia la cong viec da hoan thanh)
ulElement.addEventListener("click", function (e) {
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("checked");
  }
});
