let add = document.getElementById("addToDo");
let input = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer");

add.addEventListener("click", addItem);
input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addItem();
  }
});
function addItem(e) {
  const item_value = input.value;
  const item = document.createElement("div");
  item.classList.add("item");

  const item_content = document.createElement("div");
  item_content.classList.add("content");

  item.appendChild(item_content);

  const input_item = document.createElement("input");
  input_item.classList.add("text");
  input_item.type = "text";
  input_item.value = item_value;

  item_content.appendChild(input_item);

  const item_action = document.createElement("div");
  item_action.classList.add("actions");

  const edit_item = document.createElement("button");
  edit_item.classList.add("edit", "btn", "btn-success");
  edit_item.type = "button";
  edit_item.innerText = "Edit";

  const delete_item = document.createElement("button");
  delete_item.classList.add("delete", "btn", "btn-danger", "fa", "fa-trash");

  item_action.appendChild(edit_item);
  item_action.appendChild(delete_item);

  item.appendChild(item_action);

  toDoContainer.appendChild(item);

  input.value = "";
  edit_item.addEventListener("click", (e) => {
    if (edit_item.innerText.toLowerCase() == "edit") {
      edit_item.innerText = "Save";
      input_item.removeAttribute("readonly");
    } else {
      edit_item.innerText = "Edit";
    }
  });

  delete_item.addEventListener("click", (e) => {
    toDoContainer.removeChild(item);
  });
}

const count = document.getElementsByName("count");
