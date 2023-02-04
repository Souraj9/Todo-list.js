const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

const deleteSound = new Audio("pop-94319.mp3");

addTaskBtn.addEventListener("click", function() {
  const taskValue = taskInput.value;
  if (taskValue === "") return;

  const taskHTML = `
    <li>
      <label>
        <input type="checkbox"> ${taskValue}
      </label>
      <button class="deleteBtn">✖️</button>
    </li>
  `;

  taskList.insertAdjacentHTML("beforeend", taskHTML);
  taskInput.value = "";

  const taskCheckboxes = taskList.querySelectorAll("input[type='checkbox']");
  taskCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
      const taskItem = this.parentNode.parentNode;
      if (this.checked) {
        taskItem.classList.add("taskDone");
      } else {
        taskItem.classList.remove("taskDone");
      }
    });
  });

  const deleteBtns = taskList.querySelectorAll(".deleteBtn");
  deleteBtns.forEach(function(deleteBtn) {
    deleteBtn.addEventListener("click", function() {
      const taskItem = this.parentNode;
      taskItem.remove();
      deleteSound.currentTime = 0;
      deleteSound.play();
    });
  });
});
