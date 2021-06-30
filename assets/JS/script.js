var tasksInProgressEl = document.querySelector("#tasks-in-progress");
var tasksCompletedEl =document.querySelector("tasks-completed");
var pageContentEl = document.querySelector("#page-content");
var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var tasks=[];
var taskFormHandler =function(event){
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput=doucment.querySelector("select[name='task-type']").value;
// package up data as an object
var taskDataObj ={
    name: taskNameInput,
    type: taskTypeInput,
    status: "to do"   
}
var isEdit = formEl.hasAttribute("data-task-id"); 
console.log(isEdit);
if (isEdit){
    var taskId = formEl.getAttribute("data-task-id");
completeEditTask(tasknameInput, taskTypeInput, taskId);
}
// no data attribute, so create object as normal and pass to createTaskEl function
else {
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
createTaskEl(taskDataObj)
var saveTasks = function(){localStorage.setItem("tasks", tasks);
    }
var completedEditTask = function(taskName, taskType, taskId){
    console.log(taskName, taskType, taskId);
    //THIS CODE IS ALREADY IN PLACE
    taskSelected.querySelector("h3.task-name").textContent=taskName;
    taskSelected.querySelector("span.task-type").textContent=taskType;
    //loop through tasks array and task object with new content
    for (var i=0; i <tasks.length; i++){
        if(tasks[i].id ===parseInt(taskId)){
            tasks[i].name = taskName;
            tasks[i].type = taskType;
            var saveTasks = function(){localStorage.setItem("tasks", tasks);
        }
    }
};    
//send it as an argument to createTaskEL
createTaskEl(taskDataObj);
console.log(taskDataObj);
console.log(taskDataObj.status);
};

var createTaskEl = function (taskDataObj){
    //create list item 
    var listItemEl = document.createElement("li");
 listItemEl.className = "task-item";
//add task id as a custom attribute
listItemEl.setAttribute("data-task-id",taskIdCounter);
};
var createTaskActions= function(taskId) {
var actionContainerEl = document.createElement("div");
actionContainerEl.className = "task-actions";
//create edit button
var editButtonEl =document.createElement("button");
editButtonEl.textContent = "Edit";
editButtonEl.className = "btn edit-btn";
editButtonEl.setAttribute("data-task-id", taskID);
actionContainerEl.appendChild(editButtonEl);

//create delete button
var deleteButtonEl =document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-task-id", taskID);
actionContainerEl.appendChild(deleteButtonEl);
var statusSelectEl =document.createElement("select");
statusSelectEl.className = "select-status";
statusSelectEl.setAttribute("name", "status-change");
statusSelectEl.setAttribute("data-task-id", taskId);
var statusChoices = ["To Do", "In Progress", "Completed"];
for (var i=0; i < statusChoices.length; i++) {//create option element
var statusOptionEl = document.createElement("option");
statusOptionEl.textContent = statusChoices[i];
statusOptionEl.setAttribute("value", statusChoices[i]);
// append to select
actionContainerEl.appendChild(statusSelectEl);
return actionContainerEl;
}
//create div to hold task info and add to list item
 var taskInfoEl = document.createElement("div");
 taskInfoEl.className="task-info";
 taskInfoEl.innerHTML = "<h3 class ='task-name'>" + taskDataObj.name +"</h3><span class ='task-type'>" + taskDataObj.type + "</span>";
 listItemEl.appendChild(taskInfoEl);
 
 //add entire list item to list
 var createTaskActionsEl =createTaskActions(taskIdCounter);
 listItemEl.appendChild(taskActionsEl);
 tasksToDoEl.appendChild(listItemEl);
  };
taskDataObj.id=traskIdCounter;
tasks.push(taskDataObj);
  //increase task counter for next unique id
  taskIdCounter++;

  formEl.addEventListener("submit", createTaskHandler);

  var createTaskHandler = function(event){
    event.preventDefault();
var taskNameInput = doucment.querySelector("input[name='task-name']").value;
var taskTypeInput=doucment.querySelector("select[name='task-type']").value;
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";
var taskInfoEl = document.createElement("div");
taskInfoEl.className="task-info";
taskInfoEl.innerHTML = "<h3 class ='task-name'>" + taskDataObj.name +"</h3><span class ='task-type'>" + taskDataObj.type + "</span>";
listItemEl.appendChild(taskInfoEl);
//add entire list item to list
tasksToDoEl.appendChild(listItemEl);
};
 // check if input values are empty strings
 if(!taskNameInput || !taskTypeInput) {alert("You need to fill out the taskform!");
return false;
}
//other logic
pageContentEl.addEventListener("click",taskButtonHandler);
}
var taskButtonHandeler=function(event){//get target element from event
    var targetEl = event.target;
    //edit button was clicked
    if(targetEl.matches("edit-btn")){
        var taskId = targetel.getAttribute("data-task-id");
        editTask(taskId);
    }
}
    //delete button was clicked
    else if (targetEl.matches(".delete-btn")) {
        var taskId=targetEl.getAttribute("data-task-id");
    deleteTask(taskId); {
        //create a new array to hold updated list of tasks
        var updatedTaskArr=[];
     //loop through current tasks
     for (vari=0; i < tasks.length; i++) {
         //if tasks[i].id doesn't match the value of taskId, lets keep that task and push it into the new array
       if(taks[i].id !== parseInt(taskId)) {
        var saveTasks = function(){localStorage.setItem("tasks", tasks);   updatedTaskArr.push(tasks[i]);
       } 
    } 
    } 
}
// reassign tasks array to be the same as updated TaskArr
tasks =updatedTaskArr;
}; 
var editTask = function(taskId){console.log("editing task#" + taskId);
// get task list item element
var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId +"']");
var taskName = taskSelected.querySelector("h3.task-name").textContent;
var taskType =taskSelected.querySelector("span.task-type").textContent;
document.querySelector("input[name='task-name']").value=taskName;
document.querySelector("select[name='task-type.]").value=taskType;
alert("Task Updated!");
formEl.removeAttribute("data-task-id");
document.querySelector("#save-task").textContent ="Save Task";
formEl.setAttribute("data-task-id", taskId);
};
pageContentEl.addEventListener("Change", taskStatuschangeHandler);
var taskStatusChangeHandler=function(event){
//get the task item's id
var taskId = event.target.getAttribute("data-task-id")};
// get the currently selected option's value and conver to lowercase
var StatusValue = event.target.value.toLowerCase();
var taskSelected = document.querySelector (".task-item[data-task-id='"+ "']");
;
if (statusValue ==="to do") {
    tasksToDoEl.appendChild(taskSelected);
}    
else if (statusValue ==="in progress"){    
    tasksInProgressEl.appendChild(taskSelected);
}
else if (statusValue ==="completed"){
    tasksCompletedEl.appendChild(taskSelected);
}
//update task's in tasks array
for(var i=0; i <tasks.length;i++){
    if(tasks[i].id ===parseInt(taskId)){
        tasks[i].status = statusValue;
        var saveTasks = function(){localStorage.setItem("tasks", tasks);
    }
}
var pushedArr =[1,2,3];
pushedArr.push(4);
//pushedArr is now [1,2,3,4]
pushedArr.push("Taskinator");
//pushedArr is now [1, 2, 3, 4, "Taskinator"]
pushedArr.push(10, "push", false);
//pushedArr is now[1,2,3, 4, "Taskinator", 10, "push", false]

var saveTasks = function(){localStorage.setItem("tasks", JSON.stringify(tasks));
}
var loadTasks =function (){
   var savedTasks = localStorage.getItem("tasks");
    if(!tasks){
        return false;
    }
    tasks=JSON.parse(tasks);
    //loop through saved Tasks array
    for (var i = 0; i < savedTasks.length; i++) {
        //pass each task object into the 'createTaskEl()` function
        createTaskEl(savedTasks[i]);
    }
}
}
    
