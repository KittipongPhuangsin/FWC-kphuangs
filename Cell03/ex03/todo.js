const newButton = document.getElementById("new-button");
const ftList = document.getElementById("ft_list");

function saveTodos() {
    const todos = [];

    const items = ftList.querySelectorAll(".todo-item");

    items.forEach(function (item) {
        todos.push(item.textContent);
    });

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; path=/; max-age=31536000";
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        const parts = cookies[i].split("=");

        if (parts[0] === name) {
            return parts.slice(1).join("=");
        }
    }

    return null;
}

function createTodo(text, save = true) {
    const todo = document.createElement("div");

    todo.className = "todo-item";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        const remove = confirm("Do you want to remove this to-do?");

        if (remove) {
            todo.remove();
            saveTodos();
        }
    });

    ftList.prepend(todo);

    if (save) {
        saveTodos();
    }
}

function loadTodos() {
    const cookie = getCookie("todos");

    if (cookie === null) {
        return;
    }

    try {
        const todos = JSON.parse(decodeURIComponent(cookie));

        for (let i = todos.length - 1; i >= 0; i--) {
            createTodo(todos[i], false);
        }
    } catch (error) {
        console.error("Could not load todos.");
    }
}

newButton.addEventListener("click", function () {
    const text = prompt("Enter a new TO DO:");

    if (text === null) {
        return;
    }

    const todoText = text.trim();

    if (todoText === "") {
        return;
    }

    createTodo(todoText);
});

loadTodos();