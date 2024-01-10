const text = document.getElementById("text-input");
const addBtn = document.getElementById("add-text");
const mainCont = document.getElementById("list-div");

const add = () => {
  const task = `<div class = "task-item">
    <input type="checkbox" name="" id="check">
    <span id="task">${text.value.trim()}</span>
    <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
  </div>`;
  if (!text.value) {
    alert("You can't add empty task");
  } else {
    mainCont.insertAdjacentHTML("beforeend", task);
    text.value = "";
  }
  const deleteButton = document.querySelectorAll(".delete");
  deleteButton.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
    };
  });
  const checkBox = document.querySelectorAll("#check");
  checkBox.forEach((check) => {
    check.onchange = () => {
      check.nextElementSibling.classList.toggle("complete")
    };

  });
};

addBtn.addEventListener("click", add);
