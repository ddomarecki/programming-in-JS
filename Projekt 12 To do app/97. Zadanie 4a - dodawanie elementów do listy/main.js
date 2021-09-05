const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = (e) => {
    //usuń rodzica czyli parentNode
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}


const addTask = (e) => {
e.preventDefault();
const titleTask = input.value;
if(titleTask === "") return; 
const task = document.createElement('li');
task.className = 'task';
task.innerHTML = titleTask + "<button>Usuń</button>";
ul.appendChild(task);
input.value = "";
// const liItems = document.querySelectorAll("li.task").length;
// taskNumber.textContent = liItems;
taskNumber.textContent = listItems.length;
//button uchwyć który jest nie w document tylko w task
// task.querySelector('button').addEventListener('click', removeTask);
//a jak chcemy szukać w document to:
document.querySelector('li:last-child button').addEventListener('click', removeTask);

}

form.addEventListener('submit', addTask)