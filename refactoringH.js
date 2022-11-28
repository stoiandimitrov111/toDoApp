const addToDoBtn = document.getElementById("add-to-do-btn");
const toDoInput = document.getElementsByTagName("input")[0];
const toDoContainer = document.querySelector("#to-do-container");
const exDoContainer = document.querySelector("#ex-do-container");
const addToDoBtnRemote = document.getElementById("remote-add-to-do-btn");
const localToDoBtn = document.getElementById("local-to-do-btn");

let toDos = [];
let remoteToDos = [];

addToDoBtn.addEventListener("click", addToDo);
toDoInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addToDo();
    }
});
localToDoBtn.addEventListener("click", renderToDos);
addToDoBtnRemote.addEventListener("click", renderRemoteToDos);

function addToDo() {
    const validText = toDoInput.value.trim();
    if (validText) {
        const newToDoObj = {
            text: validText,
            completed: false,
        };
        toDos.push(newToDoObj);

        renderToDos();
        toDoInput.value = "";
    } else {
        alert("Please type in some text");
    }
}

function renderToDos() {
    toDoContainer.innerHTML = "in progress";
    exDoContainer.innerHTML = "done";
    toDos.forEach((todo) => {
        const newToDoElement = createToDoElement(todo);
        if (todo.completed === false) {
            toDoContainer.appendChild(newToDoElement);
        } else if (todo.completed === true) {
            exDoContainer.appendChild(newToDoElement);
        }
    });
}

function renderLocalToDos() {
    toDoContainer.innerHTML = "in progress";
    exDoContainer.innerHTML = "done";
    toDos.forEach((todo) => {
        const newToDoElement = createToDoElement(todo);
        if (todo.completed === false) {
            toDoContainer.appendChild(newToDoElement);
        } else if (todo.completed === true) {
            exDoContainer.appendChild(newToDoElement);
        }
    });
}

function renderRemoteToDos() {
    toDoContainer.innerHTML = "in progress";
    exDoContainer.innerHTML = "done";
    remoteToDos.forEach((todo) => {
        const newToDoElement = createRemoteToDoElement(todo);
        if (todo.completed === false) {
            toDoContainer.appendChild(newToDoElement);
        } else if (todo.completed === true) {
            exDoContainer.appendChild(newToDoElement);
        }
    });
}

function createToDoElement(todoObj) {
    const divElement = document.createElement("div");
    divElement.classList.add("to-do-instance");
    const pElement = document.createElement("p");
    pElement.textContent = todoObj.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("dlt-btn")
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
        toDos = toDos.filter(el => el.text !== todoObj.text);
        divElement.remove();
    });
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox");
    checkbox.checked = todoObj.completed;
    checkbox.addEventListener("click", () => {
        todoObj.completed = !todoObj.completed;
        renderToDos();
    })
    divElement.appendChild(checkbox);
    divElement.appendChild(pElement);
    divElement.appendChild(deleteBtn);
    return divElement;
}

function createRemoteToDoElement(remoteToDoObj) {
    const divElement = document.createElement("div");
    divElement.classList.add("to-do-instance");
    const pElement = document.createElement("p");
    pElement.textContent = remoteToDoObj.title;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("dlt-btn")
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
        remoteToDos = remoteToDos.filter(el => el.title !== remoteToDoObj.title);
        divElement.remove();
    });
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox");
    checkbox.checked = remoteToDoObj.completed;
    checkbox.addEventListener("click", () => {
        remoteToDoObj.completed = !remoteToDoObj.completed;
        renderRemoteToDos();
    })
    divElement.appendChild(checkbox);
    divElement.appendChild(pElement);
    divElement.appendChild(deleteBtn);
    return divElement;
}


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => remoteToDos.push(json))
fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then(response => response.json())
    .then(json => remoteToDos.push(json))
fetch('https://jsonplaceholder.typicode.com/todos/3')
    .then(response => response.json())
    .then(json => remoteToDos.push(json))
fetch('https://jsonplaceholder.typicode.com/todos/7')
    .then(response => response.json())
    .then(json => remoteToDos.push(json))
fetch('https://jsonplaceholder.typicode.com/todos/9')
    .then(response => response.json())
    .then(json => remoteToDos.push(json))
fetch('https://jsonplaceholder.typicode.com/todos/11')
    .then(response => response.json())
    .then(json => remoteToDos.push(json))
fetch('https://jsonplaceholder.typicode.com/todos/21')
    .then(response => response.json())
    .then(json => remoteToDos.push(json))
fetch('https://jsonplaceholder.typicode.com/todos/31')
    .then(response => response.json())
    .then(json => remoteToDos.push(json))
fetch('https://jsonplaceholder.typicode.com/todos/41')
    .then(response => response.json())
    .then(json => remoteToDos.push(json))
fetch('https://jsonplaceholder.typicode.com/todos/71')
    .then(response => response.json())
    .then(json => remoteToDos.push(json))
