let inputData = document.getElementById('taskData');
let btnAdd = document.getElementById('btnAdd');
let noTask = document.getElementById('noTask');
let tasks = document.getElementById("tasks")

let showNoTask = () =>{
    if(tasks.childElementCount == 0){
        noTask.classList.remove('none')
    }
}



let addTask = () => {
    let task = inputData.value
    if (task.trim() == 0 || inputData.value.lenght > 20) {
        alert('you must enter valid data')
    } else {
        noTask.classList.add('none');
        tasks.innerHTML += `
  <div class="alert alert-danger">
  ${task}
  <button class" delete btn btn-danger float-right">
  Delete
 </button>
  </div>
  `;

inputData.value = " ";


        // let btnDelete = document.createElement('button');
        // btnDelete.classList = "btn btn-danger";
        // btnDelete.innertext = "Delete";
        // newDiv.append(btnDelete);


    }


}


let check = (e) => {
    if(e.target.classList.contains('task')){
        e.target.classList.toggle('check');
    }
}

btnAdd.addEventListener('click', addTask);

document.addEventListener('click',function(e) {
  if (e.target.classList.contains('delete')){
      e.target.parentElement.remove();
      noTask.classList.remove('none')
  }
 
})