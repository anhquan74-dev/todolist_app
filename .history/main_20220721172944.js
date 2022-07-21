let inputElement = document.getElementById("input-text");
let addBtnElement = document.getElementById("add-btn");
let ulElement = document.getElementById("list-item");
let editElement = document.getElementsByClassName("edit-btn")[0];
let deleteElement = document.getElementsByClassName("delete-btn")[0];

// tu localstorage ta lay du lieu do vao mot array
let tasks = getTasksFromLocalStorage();
// hien thi danh sach task ra man hinh
renderTasks(tasks);

// bat su kien cho nut them task
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

// ham hien thi danh sach task
function renderTasks(tasks = []) {
  let content = "";
  tasks.forEach((task) => {
    content += `<li class="item">
                  ${task.name}
                  <a class="edit-btn" onclick="">Edit</a>
                  <a class="delete-btn">Delete</a>
                </li>`;
  });
  document.getElementById("list-item").innerHTML = content;
}

// ham lay du lieu tu localstorage
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

// su kien nut edit
function editTask(id) {}

// su kien nut delete
function deleteTask(id) {}
