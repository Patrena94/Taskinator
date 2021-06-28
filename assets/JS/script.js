var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event){
    event.preventDefault();
var taskNameInput = doucment.querySelector("input[name='task-name']").value;
var taskTypeInput=doucment.querySelector("select[name='task-type']").value;
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";
var taskInfoEl = document.createElement("div");
taskInfoEl.className="task-info";
taskInfoEl.innerHTML = "<h3 class ='task-name'>" + taskDataObj.name +"</h3><span class ='task-type'>" + taskDataObj.type + "</span>";
tasksToDoEl.appendChild(listItemEl);
};
formEl.addEventListener("submit", createTaskHandler);



