//IIFE - Para que los usuarios no accedan a las funciones JS
/*
( () => {

}) ();
*/
import iconComplete from "./components/iconComplete.js";
import iconDelete from "./components/iconDelete.js";

const btn = document.querySelector(".btnCreate");

const createTask = (evento) => {
    evento.preventDefault();

    const input = document.querySelector(".inputForm");
    const value_input = input.value;

    input.value = "";

    const list = document.querySelector(".cardsList");

    const task = document.createElement("li");
    task.classList.add("card");

    const taskContent = document.createElement("div");
    taskContent.appendChild(iconComplete());

    const taskTitle = document.createElement("span");
    taskTitle.classList.add("task");
    taskTitle.innerHTML = value_input;

    taskContent.appendChild(taskTitle);

    task.appendChild(taskContent);
    task.appendChild(iconDelete());
    list.appendChild(task);
}

btn.addEventListener("click", createTask);