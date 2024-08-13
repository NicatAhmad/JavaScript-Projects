const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");

let todos =[];

const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

console.log();
runEvents();

function  runEvents()
{
  form.addEventListener("submit" , addTodo);
  document.addEventListener("DOMContentLoaded" , addFromStorageToUI);
  secondCardBody.addEventListener("click" , removeFromUI);
  clearButton.addEventListener("click" , removeAllTodoEverywhere);
  filterInput.addEventListener("keyup" , filter );
}



function addTodo(e)
{
 const inputText = addInput.value.trim();
 if (inputText =="" || inputText==null)
 {
   showAlert("warning" , "Please add TODO..");
 }
 else 
 {
    addTodoToUI(inputText);
    addTodoToStorage(inputText);
    showAlert("success" , "Add Correctly");
 
 }
 e.preventDefault();

}

function addTodoToUI (inputText)
{

 
  const li = document.createElement("li");
  li.className="list-group-item d-flex justify-content-between";
  li.textContent = inputText;

  const a = document.createElement("a");
  a.href="#";
  a.className = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  addInput.value="";

}

function addTodoToStorage(inputText)
{
 checkLocalStorage();
 todos.push(inputText);
 localStorage.setItem("todos" , JSON.stringify(todos))

}

function checkLocalStorage ()
{
    if (localStorage.getItem("todos")==null)
    {
        todos = [];
    }
    else 
    {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type , text)
{
  
 const div = document.createElement("div");
 div.className=`alert alert-${type}`;
 div.role="alert";
 div.textContent = text;
 
 firstCardBody.appendChild(div);

 setTimeout(function ()
{
 div.remove();
} , 2500)

}

function addFromStorageToUI()
{
    checkLocalStorage();
   todos.forEach(function (todo)
{
 addTodoToUI(todo);
})
}

function removeFromUI(e)
{
   if (e.target.className =="fa fa-remove" )
   {
    let value = e.target.parentElement.parentElement;
    value.remove();
    showAlert("success" , "Removing be correctly")
   }
   removeFromLocalStorage(e.target.parentElement.parentElement.textContent);
}

function removeFromLocalStorage(text)
{
    checkLocalStorage();
    todos.forEach(function (todo , index)
{
    if (todo == text)
    {
        todos.splice(index , 1);
    }
});

localStorage.setItem("todos" , JSON.stringify(todos));

}