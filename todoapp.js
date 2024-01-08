document.getElementById("addButton").addEventListener("click", addTask);
document.getElementById("addTask").addEventListener("click", updateAndDeleteTasks);


function addTask(event){
    event.preventDefault();
    const taskInput = document.getElementById("addTask");
    const  task = taskInput.value;
    if(task){
        const taskList = document.getElementById("task-list");
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type ="checkbox";
        checkbox.id = "task-" + Date.now();
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(task));
        listItem.appendChild(document.createElement("button")).classList.add("delete");
        taskInput.appendChild.listItem;
        taskInput.value="";
    }
}


function updateAndDeleteTasks(event){
    const target = event.target;
    if(target.classList.contains("delete")){
        target.parentElement.removeChild(target);
    } else if(target.type==="checkbox"){
        target.parentElement.style.textDecoration=target.checked ? "line-through" : "";
    }
}