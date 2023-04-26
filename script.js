var openModal = document.querySelector('.add-task-btn');
var modal = document.querySelector('.modal');
var closeModal = document.querySelector('.close');
var addTaskForm = document.querySelector('#add-task-form');
var myBtn = document.querySelector('#add-task-btn');

openModal.addEventListener("click",()=>{
   modal.style.display = "flex";
});

closeModal.addEventListener("click",()=>{
    modal.style.display = "none";
});



myBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    var taskname = document.querySelector('#task-name').value;
    var priority = document.querySelector('#priority').value;
    var dueDate = document.querySelector('#due-date').value;
    var status = document.querySelector('#status').value;
     

    addTask(taskname,priority,dueDate,status);
    modal.style.display = 'none'
})







function addTask(taskname,priority,dueDate,status){
    console.log(taskname,priority,dueDate,status);
    if(status == "not-started"){
         var list = document.getElementById("not-started");
         list.innerHTML += `<li>
                            <p>${taskname}</p>
                            <p>${priority}</p>
                            <p>${dueDate}</p>
                            <p>${status}</p>

                         </li>`
    }


    else if(status == 'in-progress'){
        var list = document.getElementById("in-progress");
        list.innerHTML += `<li>
                           <p>${taskname}</p>
                           <p>${priority}</p>
                           <p>${dueDate}</p>
                           <p>${status}</p>

                        </li>`
    }



    else if(status == 'completed'){
        var list = document.getElementById("completed");
        list.innerHTML += `<li>
                           <p>${taskname}</p>
                           <p>${priority}</p>
                           <p>${dueDate}</p>
                           <p>${status}</p>

                        </li>`
    }

    
    //  document.querySelector('#task-name').value = "";
    //  document.querySelector('#priority').value = "";
    //  document.querySelector('#due-date').value = "";
    //  document.querySelector('#status').value = "";


    // OR


     document.getElementById("add-task-form").reset();
     
    
}