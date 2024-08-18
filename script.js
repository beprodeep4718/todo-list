const text = document.getElementById("text-input");
const addBtn = document.getElementById("add-text");
const mainCont = document.getElementById("list-div");

const add = () => {
  const task = `<div class="task-item">
    <input type="checkbox" name="" id="check">
    <span id="task">${text.value.trim()}</span>
    <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
  </div>`;
  if (!text.value) {
    alert("You can't add an empty task");
  } else {
    mainCont.insertAdjacentHTML("beforeend", task);
    text.value = "";
  }

  // Handle delete
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
    };
  });

  // Handle checkbox
  const checkBoxes = document.querySelectorAll("#check");
  checkBoxes.forEach((check) => {
    check.onchange = () => {
      check.nextElementSibling.classList.toggle("complete");
    };
  });

  // Handle edit
  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((button) => {
    button.onclick = () => {
      const taskItem = button.previousElementSibling;
      const currentText = taskItem.textContent;
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = currentText;

      button.textContent = "Save";
      taskItem.replaceWith(inputField);

      button.onclick = () => {
        const newText = inputField.value.trim();
        if (newText) {
          const newSpan = document.createElement("span");
          newSpan.id = "task";
          newSpan.textContent = newText;
          inputField.replaceWith(newSpan);
          button.textContent = "Edit";
        } else {
          alert("Task cannot be empty");
        }
      };
    };
  });
};

addBtn.addEventListener("click", add);
