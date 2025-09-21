function addItem(event) {
    event.preventDefault();
    var form = document.forms["todoForm"];
    var item = form['text'].value.trim();
    if (!item)
        return; // ignore empty items
    // Get existing todo list
    var todoListArray = [];
    var todoList = localStorage.getItem("todo_list");
    if (todoList) {
        todoListArray = JSON.parse(todoList);
    }
    // Add new item
    todoListArray.push(item);
    localStorage.setItem("todo_list", JSON.stringify(todoListArray));
    // Clear textarea and update displayed list
    form['text'].value = "";
    getItems();
}
function getItems() {
    var todoListDiv = document.getElementById("todoList");
    todoListDiv.innerHTML = ""; // clear previous content
    var storedTodoList = localStorage.getItem("todo_list");
    if (!storedTodoList || JSON.parse(storedTodoList).length === 0) {
        todoListDiv.innerHTML = "No items are created";
        return;
    }
    var todoArray = JSON.parse(storedTodoList);
    var _loop_1 = function (item) {
        var container = document.createElement("div"); // wrapper for each item
        var checkBoxElement = document.createElement("input");
        checkBoxElement.type = "checkbox";
        checkBoxElement.value = item;
        checkBoxElement.id = item;
        var checkBoxLabel = document.createElement("label");
        checkBoxLabel.htmlFor = item;
        checkBoxLabel.innerText = item;
        // When checkbox is clicked, remove item after 2 seconds
        checkBoxElement.addEventListener("change", function () {
            container.style.opacity = "0.5"; // optional visual effect
            setTimeout(function () {
                removeItem(item);
                getItems(); // re-render list
            }, 2000);
        });
        container.appendChild(checkBoxElement);
        container.appendChild(checkBoxLabel);
        todoListDiv.appendChild(container);
    };
    for (var _i = 0, todoArray_1 = todoArray; _i < todoArray_1.length; _i++) {
        var item = todoArray_1[_i];
        _loop_1(item);
    }
}
function removeItem(itemToRemove) {
    var storedTodoList = localStorage.getItem("todo_list");
    if (!storedTodoList)
        return;
    var todoArray = JSON.parse(storedTodoList);
    var updatedArray = todoArray.filter(function (item) { return item !== itemToRemove; });
    localStorage.setItem("todo_list", JSON.stringify(updatedArray));
}
// Call getItems on page load
document.addEventListener("DOMContentLoaded", function () { return getItems(); });
