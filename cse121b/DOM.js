//events.js
let tasks = [];

function renderTask(tasks){
const listElement =document.querySelector("#todolist");
listElement.innerHTML = "";
tasks.forEach((task) => {
    listElement.innerHTML +=`
    <li ${ task.completed ? 'class="strike"' : ""}>
        <p>${task.detail}</p> 
        <div>
            <span data-function="delete">x</span>
            <span data-function="complete"></span>
        </div>

    </li>`;
});

}
function newTask(){
    const task = document.querySelector("#todo").ariaValueMax;
    tasks.push({detail: task, completed: false});
    renderTask(tasks);

}
function removeTask(taskElement){
    tasks = tasks.filter(
        (task) => task.detail != taskElement.childNodes[1].innerText
 );
 taskElement.remove();

}

function completeTask(taskElement){
    const taskIndex = tasks.findIndex(
        (task) => task.detail === taskElement.childNodes[1].innerText

    );
    tasks[taskIndex].completed = task[taskIndex].completed ? false : true;
    taskElement.classList.toggle("strike");
    console.log(task);
}
function manageTasks(e){
    console.log(e.target);
    const parent = e.target.closest("li");
    if (e.target.dataset.function ==="delete"){
       removeTask(parent);
    }
}document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(tasks);