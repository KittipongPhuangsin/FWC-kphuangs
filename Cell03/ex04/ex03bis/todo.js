function saveTodos() {
    const todos = [];

    $(".todo-item").each(function () {
        todos.push($(this).text());
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
    const todo = $("<div></div>");

    todo.addClass("todo-item");
    todo.text(text);

    todo.click(function () {
        const remove = confirm("Do you want to remove this to-do?");

        if (remove) {
            todo.remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);

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

$("#new-button").click(function () {
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