var list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
  if (ev.target.nodeName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

var close = document.getElementsByClassName("close-btn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
//
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input-text").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.className = "item";
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("list-item").appendChild(li);
  }
  document.getElementById("input-text").value = "";

  var span = document.createElement("SPAN");
  span.className = "close-btn";
  span.innerHTML = '<i class="fa-solid fa-trash-can">';
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
