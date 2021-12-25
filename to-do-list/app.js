const alert = document.querySelector(".alert");
const form = document.querySelector(".list-form");
const toDo = document.getElementById("to-do");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".list-container");
const list = document.querySelector(".to-do-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", clearItems);

const deleteBtn = document.querySelector(".delete-btn");

function addItem(event) {
  event.preventDefault();
  const value = toDo.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("to-do-item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>`;
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    list.appendChild(element);
    displayAlert("item added to the list", "success");
    container.classList.add("show-container");
    setBackToDefault()
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

function displayAlert(text, action) {
  alert.textContext = "text";
  alert.classList.add(`alert-${action}`);

  setTimeout(function() {
    alert.textContext = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function deleteItem(event) {
  const element = event.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  setBackToDefault();
}

function editItem(event) {
  const element = event.currentTarget.parentElement.parentElement;
  editElement = event.currentTarget.parentElement.previousElementSibling;
  toDo.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

function clearItems() {
  const items = document.querySelectorAll(".to-do-item");
  if (items.length > 0) {
    items.forEach(function(item){
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger")
};

function setBackToDefault() {
  toDo.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
};

