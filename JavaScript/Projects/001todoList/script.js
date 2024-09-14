const items = ["Hellow"];
let a;
function addTodo() {
    let inputTask = document.getElementById('input-task');
    let showTask = document.querySelector('.todo-list');

    const task = inputTask.value;
    items.push(task);
    console.log(items);
    
    items.forEach((i) => {
        a = `
        <div class="todos">
            <span class="tasks" onclick="completedTask();">${i}</span>
            <button onclick="removeTask();">Delete</button>
        </div>
        `
    });

    showTask.innerHTML += a;
    inputTask.value = "";
}

function completedTask() {
  const task = document.getElementsByClassName('.tasks');
  task.classList.remove('crosh');
}