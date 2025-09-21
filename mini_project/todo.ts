function addItem(event: Event) {
    event.preventDefault();

    const form = document.forms["todoForm"] as HTMLFormElement;
    const item = (form['text'] as HTMLInputElement).value.trim();

    if (!item) return; // ignore empty items

    // Get existing todo list
    let todoListArray: string[] = [];
    const todoList = localStorage.getItem("todo_list");
    if (todoList) {
        todoListArray = JSON.parse(todoList);
    }

    // Add new item
    todoListArray.push(item);
    localStorage.setItem("todo_list", JSON.stringify(todoListArray));

    // Clear textarea and update displayed list
    (form['text'] as HTMLInputElement).value = "";
    getItems();
}

function getItems() {
    const todoListDiv = document.getElementById("todoList")!;
    todoListDiv.innerHTML = ""; // clear previous content

    const storedTodoList = localStorage.getItem("todo_list");
    if (!storedTodoList || JSON.parse(storedTodoList).length === 0) {
        todoListDiv.innerHTML = "No items are created";
        return;
    }

    const todoArray: string[] = JSON.parse(storedTodoList);

    for (const item of todoArray) {
        const container = document.createElement("div"); // wrapper for each item

        const checkBoxElement = document.createElement("input");
        checkBoxElement.type = "checkbox";
        checkBoxElement.value = item;
        checkBoxElement.id = item;

        const checkBoxLabel = document.createElement("label");
        checkBoxLabel.htmlFor = item;
        checkBoxLabel.innerText = item;

        // When checkbox is clicked, remove item after 2 seconds
        checkBoxElement.addEventListener("change", () => {
            container.style.opacity = "0.5"; // optional visual effect
            setTimeout(() => {
                removeItem(item);
                getItems(); // re-render list
            }, 2000);
        });

        container.appendChild(checkBoxElement);
        container.appendChild(checkBoxLabel);
        todoListDiv.appendChild(container);
    }
}

function removeItem(itemToRemove: string) {
    const storedTodoList = localStorage.getItem("todo_list");
    if (!storedTodoList) return;

    const todoArray: string[] = JSON.parse(storedTodoList);
    const updatedArray = todoArray.filter(item => item !== itemToRemove);
    localStorage.setItem("todo_list", JSON.stringify(updatedArray));
}

// Call getItems on page load
document.addEventListener("DOMContentLoaded", () => getItems());
